import { Button } from 'components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from 'components/ui/dialog';
import React, { useEffect, useState } from 'react';
import Etapa1_InserirVideo from './Etapas/Etapa1_InserirVideo';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ApiService from 'api/ApiService';

type ModalRegistrarFilmeType = {
    children: React.ReactNode;
}

const RegistrarVideoSchema = yup.object({

})

type RegistrarVideoSchemaType = yup.InferType<typeof RegistrarVideoSchema>;
const Api = new ApiService();
const ModalRegistrarFilme: React.FC<ModalRegistrarFilmeType> = (p) => {
    const [file, setFile] = useState<File | null>(null);
    const { handleSubmit } = useForm<RegistrarVideoSchemaType>({
        resolver: yupResolver(RegistrarVideoSchema)
    });




    async function change(data: RegistrarVideoSchemaType) {
        const formData = new FormData();
        
        // formData.set("videos", file!);
        formData.set("testeNamesss", "Eduardo!!!");
        // formData.append("teste", "Eduardio1!!")

        const eda=
        {
            videos: file!,
            teste: "qwdasdas"
        }

        await Api.Post<null>({
            data: formData,
            formData: true,
            path: "api/filme/RegistrarFilme",
            errorTitle: "Falha ao registrar vídeo"
        });
    }

    return (
        <Dialog>
            <DialogTrigger>
                {p.children}
            </DialogTrigger>
            <DialogContent className='min-w-[80%] min-h-[50%]'>
                <form onSubmit={handleSubmit(change)}>

                    <DialogHeader>
                        <DialogTitle>Upload do vídeo</DialogTitle>
                    </DialogHeader>

                    <Etapa1_InserirVideo onchange={setFile} />

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button color="outline-white">
                                Fechar
                            </Button>
                        </DialogClose>
                        <Button color="red" type='submit' >
                            Sair da plataforma
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default ModalRegistrarFilme;
