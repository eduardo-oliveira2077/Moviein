import ModalRegistrarFilme from 'components/Modals/ModalRegistrarFilme/ModalRegistrarFilme';
import { Button } from 'components/ui/button';
import React from 'react';
import { MdMovie } from 'react-icons/md';

const MeusVideos: React.FC = () => {
    return (
        <div className='px-8 mt-8'>
            <div className='w-full flex justify-between'>
                <h3 className='text-3xl'>Meus vídeos</h3>
                <ModalRegistrarFilme>
                    <Button variant="outline" className='gap-3'>
                        Registrar novo vídeo
                        <MdMovie />
                    </Button>
                </ModalRegistrarFilme>
            </div>
        </div>
    );
}

export default MeusVideos; 