import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { Button } from 'components/ui/button';
const Assinatura: React.FC = () => {
    return (
    <>
      <section className='container mx-auto mb-[120px]'>
        <div className='col-span-3 text-center'>
          <h2 className='font-bold text-3xl mb-4'>Planos de Assinatura</h2>
          <p></p>
        </div>
        <div className='grid md:grid-cols-3 gap-[20px]'>
          {/* ASSINATURAS */}
          <div className='relative p-6 py-10 rounded-xl border-primary border-[1px] text-text overflow-hidden'>
            <div className="w-[180px] h-[180px] absolute right-0 top-0 rounded-full blur-[50px] -z-10 bg-primary"></div>
            <div className="w-[180px] h-[180px] absolute -left-5 bottom-[-60px] rounded-full blur-[50px] -z-10 bg-primary"></div>
            <div className='mb-8'>
              <h4 className='text-[28px]'>Mensal</h4>
              <small className='text-md'>Casual</small>
            </div>
            <div className='border-l-2 border-l-white/45 p-4 flex flex-col gap-8'>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Livre para assistir qualquer vídeo gratuitamente (não alugados).</p>
              </div>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Avaliar vídeos como cliente</p>
              </div>
              <div className="flex gap-4 opacity-35">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Sem anúncios</p>
              </div>
              <div className="flex gap-4 opacity-35">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Enviar novo vídeo ou filme</p>
              </div>
            </div>
            <p className='text-3xl font-bold mt-16 mb-12'>R$ 18,00/mês</p>
            <Button size="lg"
              className='w-full'>
              Assinar
            </Button>
          </div>

          <div className='relative p-6 py-10 rounded-xl border-red border-[1px] text-text overflow-hidden'>
            <div className="w-[180px] h-[180px] absolute right-0 top-0 rounded-full blur-[50px] -z-10 bg-red"></div>
            <div className="w-[180px] h-[180px] absolute -left-5 bottom-[-60px] rounded-full blur-[50px] -z-10 bg-red"></div>
            <div className='mb-8'>
              <h4 className='text-[28px]'>Semestral</h4>
              <small className='text-md'>Diferente</small>
            </div>
            <div className='border-l-2 border-l-white/45 p-4 flex flex-col gap-8'>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Livre para assistir qualquer vídeo gratuitamente (não alugados).</p>
              </div>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Avaliar vídeos como cliente</p>
              </div>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Sem anúncios</p>
              </div>
              <div className="flex gap-4 opacity-35">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Enviar novo vídeo ou filme</p>
              </div>
            </div>
            <p className='text-3xl font-bold mt-16 mb-12'>R$ 113,40/semestral</p>
            <Button size="lg"
              className='w-full'
              variant="red">
              Assinar
            </Button>
          </div>

          <div className='relative p-6 py-10 rounded-xl border-redPalid border-[1px] text-text overflow-hidden'>
            <div className="w-[180px] h-[180px] absolute right-0 top-0 rounded-full blur-[50px] -z-10 bg-redPalid"></div>
            <div className="w-[180px] h-[180px] absolute -left-5 bottom-[-60px] rounded-full blur-[50px] -z-10 bg-redPalid"></div>
            <div className='mb-8'>
              <h4 className='text-[28px]'>Anual</h4>
              <small className='text-md'>Único</small>
            </div>
            <div className='border-l-2 border-l-white/45 p-4 flex flex-col gap-8'>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Livre para assistir qualquer vídeo gratuitamente (não alugados).</p>
              </div>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Avaliar vídeos como cliente</p>
              </div>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Sem anúncios</p>
              </div>
              <div className="flex gap-4">
                <div>
                  <FaRegCircleCheck className='text-[28px]' />
                </div>
                <p className='text-[14px] text-text'>Enviar novo vídeo ou filme</p>
              </div>
            </div>
            <p className='text-3xl font-bold mt-16 mb-12'>R$ 226,80/anual</p>
            <Button size="lg"
              className='w-full'
              variant="redPalid">
              Assinar
            </Button>
          </div>
        </div>
      </section>
    </>
    )
}
export default Assinatura;
