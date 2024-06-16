import ApiService from 'api/ApiService';
import ModalRegistrarFilme from 'components/Modals/ModalRegistrarFilme/ModalRegistrarFilme';
import { Button } from 'components/ui/button';
import React, { useEffect, useState } from 'react';
import { MdMovie } from 'react-icons/md';
import pipoca from '../../../assets/pipoca.png';
import tomate from '../../../assets/tomate.png';
import { Skeleton } from 'components/ui/skeleton';

type FilmeItem = {
    nome: string,
    id: number,
    thumb: string
    classificacaoAssinantes: number
}

const Api = new ApiService();
const MeusVideos: React.FC = () => {
    const [videos, setVideos] = useState<FilmeItem[]>([]);
    const [load, setLoad] = useState<boolean>(true);

    async function LoadVideos() {
        await Api.Get<FilmeItem[]>({
            path: "api/filme/Meusvideos",
            errorTitle: "Falha ao listar os vídeos",
            thenCallback: (r) => {
                setVideos(r);
                setLoad(false);
            }
        })
    }

    useEffect(() => {
        LoadVideos()
    }, [])


    return (
        <div className='px-8 mt-8'>
            <div className='w-full mb-4 flex justify-between'>
                <h3 className='text-3xl'>Meus vídeos</h3>
                <ModalRegistrarFilme>
                    <Button variant="outline" className='gap-3'>
                        Registrar novo vídeo
                        <MdMovie />
                    </Button>
                </ModalRegistrarFilme>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {
                    load ?
                        (
                            <>
                                <Skeleton className='w-full h-[280px]' />
                                <Skeleton className='w-full h-[280px]' />
                                <Skeleton className='w-full h-[280px]' />
                            </>
                        ) : (
                            <>
                                {
                                    videos.map((e, i) => (
                                        <div key={i}>
                                            <img src={e.thumb} className='mb-3 h-[200px] w-full object-cover rounded-xl' />
                                            <h4 className='font-bold text-2xl'>{e.nome}</h4>
                                            <div className='flex mt-3 jsutify-between'>
                                                <div className='flex gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <img src={pipoca} className='h-[20px]' />
                                                        <b>50%</b>
                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                        <img src={tomate} className='h-[20px]' />
                                                        <b>50%</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        )
                }

            </div>

        </div>
    );
}

export default MeusVideos; 