import React, { useState } from 'react';

interface LogEntry {
  nome: string;
  email: string;
  dataHora: string;
  acao: string;
  descricao: string;
  complemento: string;
}

const UserLogConsultation: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [results, setResults] = useState<LogEntry[]>([]);
  const [found, setFound] = useState(false);

  const searchContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nomeInput = nome.toLowerCase();
    const emailInput = email.toLowerCase();
    const newResults = logEntries.filter((entry) =>
      (nomeInput && entry.nome.toLowerCase().includes(nomeInput)) ||
      (emailInput && entry.email.toLowerCase().includes(emailInput))
    );
    setResults(newResults);
    setFound(newResults.length > 0);
  };

  const logEntries: LogEntry[] = [
    {
      nome: 'João Silva',
      email: 'joao.silva@gmail.com',
      dataHora: '21/02/2024 15:48:59',
      acao: 'Postagem vídeo',
      descricao: '.....',
      complemento: '......'
    },
  ];

  return (
    <div className="bg-purple-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-white mb-4">Consulta Log do Sistema</h1>
        <form className="mb-4" onSubmit={searchContact}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-white" htmlFor="nome">Usuário</label>
              <input
                type="text"
                id="nomeInput"
                className="w-full p-2 border-2 border-white rounded bg-gray-700 text-white"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="..."
              />
            </div>
            <div>
              <label className="block text-white" htmlFor="email">Email</label>
              <input
                type="text"
                id="emailInput"
                className="w-full p-2 border-2 border-white rounded bg-gray-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="..."
              />
            </div>
            <div>
              <label className="block text-white" htmlFor="date">Data</label>
              <input
                type="date"
                id="dataInput"
                className="w-full p-2 border-2 border-white rounded bg-gray-700 text-white"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-purple-600 text-white p-2 rounded"
          >
            Buscar
          </button>
        </form>
        {found && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Resultados</h2>
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="border-b p-2 bg-gray-800 text-white">Usuário</th>
                  <th className="border-b p-2 bg-gray-800 text-white">Email</th>
                  <th className="border-b p-2 bg-gray-800 text-white">Data Hora</th>
                  <th className="border-b p-2 bg-gray-800 text-white">Ação</th>
                  <th className="border-b p-2 bg-gray-800 text-white">Descrição</th>
                  <th className="border-b p-2 bg-gray-800 text-white">Complemento</th>
                </tr>
              </thead>
              <tbody>
                {results.map((entry, index) => (
                  <tr key={index}>
                    <td className="border-b p-2">{entry.nome}</td>
                    <td className="border-b p-2">{entry.email}</td>
                    <td className="border-b p-2">{entry.dataHora}</td>
                    <td className="border-b p-2">{entry.acao}</td>
                    <td className="border-b p-2">{entry.descricao}</td>
                    <td className="border-b p-2">{entry.complemento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLogConsultation;