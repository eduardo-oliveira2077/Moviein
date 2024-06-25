import ApiService from 'api/ApiService';
import { Button } from 'components/ui/button';
import { FormLabel } from 'components/ui/form';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';
import React, { useEffect, useState } from 'react';
interface Contact {
  nome: string;
  nascimento: string;
  genero: string;
  email: string;
  cpf: string;
  tel: string;
  cep: string;
}

// const initialContacts: Contact[] = [
//   {
//     nome: 'João Silva da Braga',
//     nascimento: '23/05/1999',
//     genero: 'M',
//     email: 'joao.silva@gmail.com',
//     cpf: '999.999.999-99',
//     tel: '(21) 98888-8888',
//     cep: '21810-007'
//   },
//   {
//     nome: 'Maria Oliveira',
//     nascimento: '27/02/1990',
//     genero: 'F',
//     email: 'maria.oliveira@gmail.com',
//     cpf: '333.222.333-22',
//     tel: '(21) 96833-7696',
//     cep: '21875-070'
//   },
//   {
//     nome: 'Carlos Pereira',
//     nascimento: '02/11/2002',
//     genero: 'M',
//     email: 'carlos.pereira@gmail.com',
//     cpf: '111.666.378-99',
//     tel: '(21) 98356-0154',
//     cep: '23056-050'
//   }
// ];

const Api = new ApiService();
const UserConsultation: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState({ nome: '', email: '' });
  const [load, setLoad] = useState<boolean>(false);
  const [emailFilter, setEmailFilter] = useState<string>('');
  const [nomeFilter, setNomeFilter] = useState<string>('');

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

  useEffect(() => {
    async function Load() {
      
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-white p-10">
      <div className="dark:bg-black/30 bg-slate-400/20 p-8 rounded-lg">
        <h1 className="text-2xl mb-0 text-text">Consulta de Usuário</h1>
        <p className='mb-4 opacity-50'>Consulte pelo nome e/ou por email.</p>
        <form onSubmit={handleSearch} className="mb-6">
          <div className='flex gap-4'>
            <div className='w-full mb-3'>
              <Label htmlFor="email">Email</Label>
              <Input id='email'
                className='w-full'
                onChange={(d) => setEmailFilter(d.target.value)}
                value={emailFilter} />
            </div>
            <div className='w-full'>
              <Label htmlFor="nome">Nome</Label>
              <Input id='nome'

                onChange={(d) => setNomeFilter(d.target.value)}
                value={nomeFilter} />
            </div>
          </div>
          <Button className='w-full'>
            Buscar
          </Button>
        </form>
        <hr />
        {filteredContacts.length > 0 && (
          <div>
            <h2 className="text-xl mb-4">Resultados da Consulta</h2>
            <table className="w-full border-collapse bg-gray-800">
              <thead>
                <tr>
                  <th className="border-b py-1 text-xs">Nome</th>
                  <th className="border-b py-1 text-xs">Nascimento</th>
                  <th className="border-b py-1 text-xs">Gênero</th>
                  <th className="border-b py-1 text-xs">Email</th>
                  <th className="border-b py-1 text-xs">CPF</th>
                  <th className="border-b py-1 text-xs">Tel</th>
                  <th className="border-b py-1 text-xs">CEP</th>
                  <th className="border-b py-1 text-xs">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact, index) => (
                  <tr key={index}>
                    <td className="border-b py-1 text-xs  text-center">{contact.nome}</td>
                    <td className="border-b py-1 text-xs  text-center">{contact.nascimento}</td>
                    <td className="border-b py-1 text-xs text-center">{contact.genero}</td>
                    <td className="border-b py-1 text-xs  text-center">{contact.email}</td>
                    <td className="border-b py-1 text-xs  text-center">{contact.cpf}</td>
                    <td className="border-b py-1 text-xs  text-center">{contact.tel}</td>
                    <td className="border-b py-1 text-xs  text-center">{contact.cep}</td>
                    <td className="border-b py-1">
                      <button
                        className="bg-purple-600 px-1  mr-2  text-xs"
                        onClick={() => handleEdit(index)}
                      >
                        Editar
                      </button>
                      <button
                        className="bg-purple-900 px-1  text-xs"
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

