import React, { useRef } from 'react';
import { BiSolidMoviePlay } from 'react-icons/bi';

type Etapa1_InserirVideoType = {
  onchange: (f: File | null) => any
}

const Etapas1_InserirVideo: React.FC<Etapa1_InserirVideoType> = (p) => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <input type='file' onChange={(d) => {
        var f: File | null = d.target.files != null ? d.target.files[0] : null;
        p.onchange(f);
      }} ref={ref} />
      <div className='flex justify-center'>
        <div
          onClick={() => ref.current?.click()}
          className='flex flex-col cursor-pointer justify-center items-center w-[400px] rounded-lg h-[400px] border-[1px] border-sky-100'>
          <BiSolidMoviePlay className='text-[80px] text-primary' />
          <p>Arraste o seu vídeo / filmes aqui</p>
        </div>
      </div>

    </>
  );
}

export default Etapas1_InserirVideo;