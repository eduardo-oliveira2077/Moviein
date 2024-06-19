import React, { useState } from 'react';
interface Contact {
  nome: string;
  nascimento: string;
  genero: string;
  email: string;
  cpf: string;
  tel: string;
  cep: string;
}

const initialContacts: Contact[] = [
  {
    nome: 'João Silva da Braga',
    nascimento: '23/05/1999',
    genero: 'M',
    email: 'joao.silva@gmail.com',
    cpf: '999.999.999-99',
    tel: '(21) 98888-8888',
    cep: '21810-007'
  },
  {
    nome: 'Maria Oliveira',
    nascimento: '27/02/1990',
    genero: 'F',
    email: 'maria.oliveira@gmail.com',
    cpf: '333.222.333-22',
    tel: '(21) 96833-7696',
    cep: '21875-070'
  },
  {
    nome: 'Carlos Pereira',
    nascimento: '02/11/2002',
    genero: 'M',
    email: 'carlos.pereira@gmail.com',
    cpf: '111.666.378-99',
    tel: '(21) 98356-0154',
    cep: '23056-050'
  }
];

const UserConsultation: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState({ nome: '', email: '' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email } = searchTerm;
    const filtered = contacts.filter(contact =>
      contact.nome.toLowerCase().includes(nome.toLowerCase()) ||
      contact.email.toLowerCase().includes(email.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Tem certeza que deseja excluir este contato?")) {
      const newContacts = [...contacts];
      newContacts.splice(index, 1);
      setContacts(newContacts);
      setFilteredContacts(newContacts);
    }
  };

  const handleEdit = (index: number) => {
    const contact = contacts[index];
    alert(`Editar contato: ${contact.nome} - ${contact.email}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h1 className="text-2xl mb-6">Consulta de Usuário</h1>
        <form onSubmit={handleSearch} className="mb-6">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm mb-2">Nome</label>
            <input
              type="text"
              id="nome"
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
              value={searchTerm.nome}
              onChange={e => setSearchTerm({ ...searchTerm, nome: e.target.value })}
              placeholder="..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">Email</label>
            <input
              type="text"
              id="email"
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
              value={searchTerm.email}
              onChange={e => setSearchTerm({ ...searchTerm, email: e.target.value })}
              placeholder="..."
            />
          </div>
          <button type="submit" className="bg-purple-600 py-2 px-4 rounded-lg">Buscar</button>
        </form>
        {filteredContacts.length > 0 && (
          <div>
            <h2 className="text-xl mb-4">Resultados da Consulta</h2>
            <table className="w-full border-collapse bg-gray-800">
              <thead>
                <tr>
                  <th className="border-b py-1">Nome</th>
                  <th className="border-b py-1">Nascimento</th>
                  <th className="border-b py-1">Gênero</th>
                  <th className="border-b py-1">Email</th>
                  <th className="border-b py-1">CPF</th>
                  <th className="border-b py-1">Tel</th>
                  <th className="border-b py-1">CEP</th>
                  <th className="border-b py-1">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact, index) => (
                  <tr key={index}>
                    <td className="border-b py-1 text-xs">{contact.nome}</td>
                    <td className="border-b py-1 text-xs">{contact.nascimento}</td>
                    <td className="border-b py-1 text-xs">{contact.genero}</td>
                    <td className="border-b py-1 text-xs">{contact.email}</td>
                    <td className="border-b py-1 text-xs">{contact.cpf}</td>
                    <td className="border-b py-1 text-xs">{contact.tel}</td>
                    <td className="border-b py-1 text-xs">{contact.cep}</td>
                    <td className="border-b py-1">
                      <button
                        className="bg-purple-600 px-1 rounded-lg mr-2"
                        onClick={() => handleEdit(index)}
                      >
                        Editar
                      </button>
                      <button
                        className="bg-purple-900 px-1 rounded-lg"
                        onClick={() => handleDelete(index)}
                      >
                        Excluir
                      </button>
                    </td>
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

export default UserConsultation;

