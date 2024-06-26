import ApiService from 'api/ApiService';
import ModalConfirmarRemocaoUsuario from 'components/Modals/ModalConfirmarRemocaoUsuario/ModalConfirmarRemocaoUsuario';
import { Button } from 'components/ui/button';
import { FormLabel } from 'components/ui/form';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableRow } from 'components/ui/table';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface Contact {
  nome: string;
  nascimento: string;
  genero: string;
  email: string;
  cpf: string;
  tel: string;
  cep: string;
}

const Api = new ApiService();
const UserConsultation: React.FC = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState({ nome: '', email: '' });
  const [load, setLoad] = useState<boolean>(false);
  const [emailFilter, setEmailFilter] = useState<string>('');
  const [nomeFilter, setNomeFilter] = useState<string>('');
  const [confirmRemove, setConfirmRemove] = useState<{ open: boolean, usuarioId?: number } | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    setSearchTerm({ nome: nomeFilter, email: emailFilter });
  }, [emailFilter, nomeFilter]);

  const handleSearch = async () => {
    const { nome, email } = searchTerm;

    // try {
    setLoad(true);
    await Api.Get<Contact[]>({
      path: `api/usuario/ConsultarUsuarios?nome=${nome}&email=${email}`,
      errorTitle: "Falha ao buscar contatos",
      thenCallback: (r) => {
        setFilteredContacts(r);
        setLoad(false);
      }
    });
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Tem certeza que deseja excluir este contato?")) {
      const newContacts = [...contacts];
      newContacts.splice(index, 1);
      setContacts(newContacts);
      setFilteredContacts(newContacts);
    }
  };

  useEffect(() => {
    handleSearch()
  }, [])

  const handleEdit = (index: number) => {
    const contact = contacts[index];
    alert(`Editar contato: ${contact.nome} - ${contact.email}`);
  };

  return (
    <div className="min-h-screen bg-background text-white p-10">
      <div className="dark:bg-black/30 bg-slate-400/20 p-8 rounded-lg">
        <h1 className="text-2xl mb-0 text-text">Consulta de Usuário</h1>
        <p className='mb-4 opacity-50'>Consulte pelo nome e/ou por email.</p>
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
        <Button onClick={() => handleSearch()} className='w-full'>
          Buscar
        </Button>
        <hr />
        <div>
          <h2 className="text-xl mb-4">Resultados da Consulta</h2>
          <Table>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
            <TableBody>
              {
                filteredContacts.map((d, i) => (
                  <TableRow key={i}>
                    <TableCell className='text-[12px]'>
                      <img src={d.thumb} className='w-[42px] h-[42px] object-cover rounded-full' />
                    </TableCell>
                    <TableCell className='text-[12px]'>{d.nome}</TableCell>
                    <TableCell className='text-[12px]'>{d.email}</TableCell>
                    <TableCell className='text-[12px]'>{d.cpf}</TableCell>
                    <TableCell className='text-[12px]'>
                      <Button onClick={() => setConfirmRemove({ open: true, usuarioId: d.id })}>
                        Deletar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
        <ModalConfirmarRemocaoUsuario
          open={confirmRemove?.open ?? false}
          usuarioId={confirmRemove!.usuarioId!}
          setClose={() => setConfirmRemove(null)}
        />
      </div>
    </div>
  );
};

export default UserConsultation;

