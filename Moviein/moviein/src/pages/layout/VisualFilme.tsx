import React, { useEffect, useState } from 'react';
// import Button from 'components/Button';
import livre from '../../assets/filmes/livre.png';
import fundo from '../../assets/filmes/fundopanda7.jpg';
import fundo2 from '../../assets/filmes/pandafundo2.jpg';
import tomate from '../../assets/tomate.png';
import pipoca from '../../assets/pipoca.png';
import ApiService from 'api/ApiService';
import { useParams } from 'react-router-dom';
import Classificacao from 'components/Classificacao/Classificacao';

interface FilmeDetalheDTO_Res {
  caminhoImagem: string,
  descricao: string,
  titulo: string,
  classificacao: string
  id: string
}

const Api = new ApiService();
const VisualFilme: React.FC = () => {
  const [detail, setDetail] = useState<FilmeDetalheDTO_Res | null>(null);
  const { filmeId } = useParams<{ filmeId: string }>();
  useEffect(() => {
    async function LoadDetalhe() {
      Api.Get<FilmeDetalheDTO_Res>({
        path: `api/filme/DetalheFilme?FilmeId=${filmeId}`,
        errorTitle: "Falha ao coletar detalhe do filme",
        thenCallback: (r) => {
          setDetail(r)
        }
      })
    }
    LoadDetalhe();
  }, [])


  return (
    <>
      <img className="absolute h-screen w-full top-0 left-0 m-0 p-0 border-0 bg-cover blur-[3px]" style={{ backgroundImage: `url(${detail?.caminhoImagem})`, backdropFilter: 'blur(5px)' }} />
      <div className='relative z-10'>
        <div className="container ml-12">
          {/* <img className="backdrop-blur-md w-20 h-20 mt-16 ml-10" src={livre} alt="Ícone de Indicação" /> */}
          <div className='flex flex-col justify-start'>
            <div >
              <Classificacao classificacao={detail?.classificacao ?? "l"} />
            </div>
            <h1 className="text-white text-7xl font-semibold mt-6">{detail?.titulo}</h1>
            <h5 className="text-2xl text-white font-normal leading-9 ml-10 mt-4 mb-16 max-w-6xl text-left">

              {detail?.descricao}

            </h5>
          </div>
          <div className="flex mt-8 ml-10">
            <button
              className="w-16 h-16 mr-4 rounded-full hover:bg-purple-700 bg-purple-600 focus:outline-none flex items-center justify-center">
              &#9654;
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-full px-5 py-3 ">
              Apoie o projeto!
            </button>
          </div>
        </div>

        <div className='flex justify-end gap-4 mr-10 bottom-0'>
          <button className='px-7 py-5 rounded-full items-center bg-background flex gap-3'>
            <img src={tomate} alt="tomate" className='h-[20px] object-contain' />
            <label>30%</label>
          </button>
          <button className='px-7 py-5 rounded-full items-center bg-background flex gap-3'>
            <img src={pipoca} alt="pipoca" className='h-[20px] object-contain' />
            <label>60%</label>
          </button>
        </div>
      </div>
    </>
  );
}

export default VisualFilme;