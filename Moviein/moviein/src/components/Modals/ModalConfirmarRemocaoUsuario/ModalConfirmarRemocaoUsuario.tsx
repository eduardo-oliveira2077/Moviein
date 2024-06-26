import { DialogTitle } from '@radix-ui/react-dialog';
import ApiService from 'api/ApiService';
import { Button } from 'components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from 'components/ui/dialog';
import React from 'react';
import { MdCircle, MdImage } from 'react-icons/md';

type ModalConfirmarRemocaoUsuarioType = {
    open: boolean
    usuarioId: number
    setClose: () => any
}

const api = new ApiService();
const ModalConfirmarRemocaoUsuario: React.FC<ModalConfirmarRemocaoUsuarioType> = (p) => {


   async function Remove() {
    
    }

    return (
        <Dialog modal open={p.open} onOpenChange={p.setClose}>
            <DialogTrigger asChild >
                <button className="w-[42px] flex justify-center items-center h-[42px] rounded-full bg-primary">
                    <MdImage />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Remover usuário</DialogTitle>
                </DialogHeader>
                Deseja mesmo deletar o usuário?
                <div className='w-full flex items-center gap-3'>
                    <MdCircle />
                    O usuário não será possível logar dentro do sistema.
                </div>
                <DialogFooter className='gap-3'>
                    <DialogClose>
                        <Button variant="outline">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button variant="red" load>
                        Sim, remover usuário
                    </Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    );
}

export default ModalConfirmarRemocaoUsuario;