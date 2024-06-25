import ApiService from 'api/ApiService';
import { Input } from 'components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableRow } from 'components/ui/table';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { MdOutlineCleaningServices } from 'react-icons/md';
interface LogEntry {
  nome: string;
  email: string;
  dataHora: Date;
  descricao: string;
}

const api = new ApiService();
const UserLogConsultation: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState<string>("");
  const [results, setResults] = useState<LogEntry[]>([]);
  const [found, setFound] = useState(false);

  // const searchContact = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();



  // };

  async function Logs(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    await api.Get<LogEntry[]>({
      errorTitle: "Falha ao consultar logs no sistema.",
      path: `api/log/Consultar?nome=${nome}&email=${email}&data=${data}`,
      thenCallback: (r) => {
        setFound(true);
        setResults(r);
      }
    })
  }

  useEffect(() => {
    Logs();
  }, [])

  // const logEntries: LogEntry[] = [
  //   {
  //     nome: 'João Silva',
  //     email: 'joao.silva@gmail.com',
  //     dataHora: '21/02/2024 15:48:59',
  //     descricao: '.....',
  //   },
  // ];

  return (
    <div className="bg-purple-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-white mb-4">Consulta Log do Sistema</h1>
        <form className="mb-4" onSubmit={Logs}>
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
              <Input type='date'
                onChange={(r) => setData(r.target.value)}
              />
            </div>
            <div>
              <MdOutlineCleaningServices />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-purple-600 text-white p-2 rounded"
          >
            Buscar
          </button>
        </form>
        <hr></hr>

        <Table>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Mensagem</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
          <TableBody>
            {
              results.map((d, i) => (
                <TableRow key={i}>
                  <TableCell>{d.email}</TableCell>
                  <TableCell>{d.descricao}</TableCell>
                  <TableCell>{moment(d.dataHora).format("DD/MM/yyyy HH:mm")}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>

      </div>
    </div>
  );
};

export default UserLogConsultation;