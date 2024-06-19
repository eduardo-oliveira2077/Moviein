import React, { useRef } from 'react';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

type Etapa1_InserirVideoType = {
  onchange: (f: File | null) => any
}

const Etapas1_InserirVideo: React.FC<Etapa1_InserirVideoType> = (p) => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <input type='file' accept='video/mp4' className='hidden' onChange={(d) => {
        var f: File | null = d.target.files != null ? d.target.files[0] : null;
        p.onchange(f);
      }} ref={ref} />
      <div className='flex justify-center'>
        <div
          onClick={() => ref.current?.click()}
          className='flex flex-col cursor-pointer justify-center items-center w-[400px] rounded-lg h-[400px] border-[1px] border-sky-100'>
          <BiSolidMoviePlay className={twMerge("text-[80px]", ref.current?.files?.length === 1 ? "text-primary" : "dark:text-white/50 text-black/20")} />
          <p>{ref.current?.files?.length === 1 ? ref.current.files[0].name : "Arraste o seu vídeo / filmes aqui" }</p>
        </div>
      </div>

    </>
  );
}

export default Etapas1_InserirVideo;