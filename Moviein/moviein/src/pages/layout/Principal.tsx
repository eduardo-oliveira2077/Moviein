import React, { useEffect, useState } from 'react';
import { Button } from 'components/ui/button';
import tomate from '../../assets/tomate.png';
import pipoca from '../../assets/pipoca.png';
import { Carousel, CarouselContent, CarouselItem } from 'components/ui/carousel';
import { UNSAFE_DataRouterStateContext, useNavigate } from 'react-router-dom';
import unisuamLight from '../../assets/Unisuam-light.png'
import unisuam from '../../assets/Unisuam.png'
import moviein from '../../assets/moviein.png';
import movieinDark from '../../assets/moviein-dark.png';
import { useTheme } from 'components/ui/theme-provider';
import { Link } from 'react-router-dom';
import kungfupandacover2 from '../../assets/filmes/kungfupanda.jpg';
import casteloanimado from '../../assets/filmes/casteloanimado.jpg';
import princesamononoke from '../../assets/filmes/princesamononoke.jpg';
import moonlight from '../../assets/filmes/moonlight.jpg';
import vidaspassadas from '../../assets/filmes/vidaspassadas.jpg';
import zonadeinteresse from '../../assets/filmes/zonadeinteresse.jpg';
import aranhaverso from '../../assets/filmes/aranhaverso.jpg';
import nimona from '../../assets/filmes/nimona.jpg';
import haikyuu from '../../assets/filmes/haikyuu.jpg';
import tudoemtodo from '../../assets/filmes/tudoemtodo.jpg';
import pandafundo from '../../assets/filmes/pandafundo.jpg';
import ApiService from 'api/ApiService';
import FilmeItemDTO_Res from 'models/FilmeItemDTO_Res';
import FilmeDTO_Res from 'models/FilmeDTO_Res';

const api = new ApiService();
const Principal: React.FC = () => {
    const nav = useNavigate();
    const { theme } = useTheme();
    const [list, setList] = useState<FilmeDTO_Res[]>([]);
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {
        async function LoadFilme() {
            await api.Get<FilmeDTO_Res[]>({
                path: "api/filme/ListarFilmes",
                errorTitle: "Falha ao listar os filmes",
                thenCallback: (r) => {
                    setList(r);
                }
            })
        }
        LoadFilme();
    }, [])

    return (
        <main>
            <div className='relative h-[40vh]'>
                <div className='bg-background absolute w-full h-full z-[1]'>
                    <img src={pandafundo} alt="filme" className='w-full opacity-70 h-full object-cover' />
                </div>
                <div className='container relative z-20'>
                    <div className='grid grid-cols-2 items-end h-[25vh] pb-5'>
                        <div>
                            <h3 className='text-[50px] text-text font-bold'>Kung fu panda 4</h3>
                            {/* <p>Em "Kung Fu Panda 4", Po, o Grande Dragão Guerreiro, é escolhido para se tornar o Líder Espiritual do Vale da Paz, mas enfrenta desafios ao encontrar e treinar um novo Dragão Guerreiro, Zhen, uma raposa relutante. Enquanto isso, a Camaleoa tenta ressuscitar vilões derrotados por Po, colocando em risco a paz novamente.</p> */}
                        </div>
                        <div className='flex justify-end gap-4'>
                            <button className='p-2 rounded-full items-center bg-background flex gap-3'>
                                <img src={tomate} alt="tomate" className='h-[25px] object-contain' />
                                <label>30%</label>
                            </button>
                            <button className='p-2 rounded-full items-center bg-background flex gap-3'>
                                <img src={pipoca} alt="pipoca" className='h-[25px] object-contain' />
                                <label>60%</label>
                            </button>
                            <Button onClick={() => nav("VisualFilme")} variant="red">
                                Assistir
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='w-full absolute z-[10] h-[60px] bottom-0 left-0 bg-gradient-to-b from-transparent to-background'></div>
            </div>
            <section className='container mt-8'>

                {
                    list.map((e, i) => (
                        <>
                            <Carousel key={i}>
                                <h3 className='text-[25px] text-text font-bold mb-[15px] mt-[30px]'>{e.categoria}</h3>
                                <CarouselContent>
                                    {
                                        e.filmes.map((r, k) => (
                                            <CarouselItem key={k} className='basis-1/5' onClick={() => nav(`/a/visualFilme/${r.id}`)}>
                                                <div className='relative pt-[140%] border-primary border-[2px] rounded-xl hover:shadow-[0_6px_16px_0_rgba(134,93,255,0.5)]'>
                                                    <Link to="#">
                                                        <img className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" src={r.thumb} alt="" />
                                                    </Link>
                                                </div>
                                            </CarouselItem>
                                        ))
                                    }
                                </CarouselContent>
                            </Carousel >
                        </>
                    ))
                }

            </section>

            <section className='mb-[50px]'>
            </section>

            <footer className="dark:bg-black bg-card p-8 ">
                <div>
                    {
                        (theme === "dark" || theme === "system") && <img alt='Moviein' src={movieinDark} className="w-[100px] object-contain -dark:hidden" />
                    }
                    {
                        theme === "light" && <img alt='Moviein' src={moviein} className="w-[100px] object-contain -dark:hidden" />
                    }
                </div>
                <div className='flex justify-between'>
                    <small>Moviein © 2024 - Todos os direitos reservados</small>
                    {
                        (theme === "dark" || theme === "system") && <img alt='Moviein' src={unisuamLight} className="w-[100px] object-contain -dark:hidden" />
                    }
                    {
                        theme === "light" && <img alt='Moviein' src={unisuam} className="w-[100px] object-contain -dark:hidden" />
                    }
                </div>
            </footer>
        </main>
    );
}

export default Principal;