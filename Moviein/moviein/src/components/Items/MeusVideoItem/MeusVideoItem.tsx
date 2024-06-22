import FilmeItem from 'models/FilmeItemModel';
import React, { useState } from 'react';
import tomate from '../../../assets/tomate.png';
import pipoca from '../../../assets/pipoca.png';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from 'components/ui/menubar';
import { SlOptionsVertical } from 'react-icons/sl';
import ModalEditarFilme from 'components/Modals/ModalEditarFilme/ModalEditarFilme';



const MeusVideoItem: React.FC<FilmeItem> = (e) => {
    const [openEdit, setOpenEdit] = useState<boolean>(false);

    return (
        <div>
            <div >
                <img src={e.thumb} className='mb-3 h-[200px] w-full object-cover rounded-xl' />
                <h4 className='font-bold text-2xl'>{e.nome}</h4>
                <div className='flex mt-3 justify-between'>
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
                    <div className=''>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger className='cursor-pointer'>
                                    <SlOptionsVertical />
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={() => setOpenEdit(true)} className='cursor-pointer'>
                                        Editar vídeo
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
            <ModalEditarFilme
                filmeId={e.id}
                open={openEdit}
                setOpen={setOpenEdit}
                UpdateChange={() => e.updateChange()}
            />
        </div>
    );
}

export default MeusVideoItem;