import React, { useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from 'components/ui/select';
import { twMerge } from 'tailwind-merge';
import { Button } from 'components/ui/button';
import ApiService from 'api/ApiService';
import { useToast } from 'components/ui/use-toast';

type tipoType = "MONTHLY" | "YEARLY" | "SEMIANNUALLY";
type assinaturaType = "Cliente" | "Critico" | "Criador";

const Api = new ApiService();
const Assinatura: React.FC = () => {
  const [tipo, setTipo] = useState<tipoType>("MONTHLY");
  const [anual, setAnual] = useState<boolean>(true);
  const [assinatura, setAssinatura] = useState<assinaturaType>("Cliente");
  const [load, setLoad] = useState<boolean>(false);
  const { toast } = useToast();

  async function AssinarPlano() {
    setLoad(true);
    await Api.Post<null>({
      path: "api/assinatura/Registrar",
      data: {
        periodo: tipo,
        assinatura: assinatura
      },
      errorTitle: "Falha ao registrar assinatura.",
      thenCallback: (t) => {
        setLoad(false);
        toast({
          title: "Assinatura criada com sucesso!",
          className: "bg-success text-black"
        })
      }
    })
  }

  return (
    <div className='bg-gradient-to-br flex justify-center items-center w-full h-screen from-primary to-red'>
      <div className='container'>
        <div className='bg-background p-6 rounded-lg'>
          <section className='container mx-auto'>
            <div className='mb-6'>
              <h2 className='font-bold text-2xl mt-4 mb-4'>Planos de Assinatura</h2>
              <div className='grid grid-cols-2 gap-12 justify-between items-center w-full'>
                <Select onValueChange={(d: tipoType) => setTipo(d)} defaultValue={tipo}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="MONTHLY">Mensal</SelectItem>
                      <SelectItem value="SEMIANNUALLY">Semestral</SelectItem>
                      <SelectItem value="YEARLY">Anual</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <div className='flex gap-3 items-center justify-end'>
                  <Label htmlFor='Anual'>Mensal</Label>
                  <Switch id="Anual" checked={anual} onCheckedChange={() => setAnual(!anual)} />
                  <Label htmlFor='Anual'>Anual</Label>
                </div> */}
              </div>
            </div>
            <div className='grid md:grid-cols-3 gap-[20px] mb-3'>

              {/* ASSINATURAS */}
              <div onClick={() => setAssinatura("Cliente")}
                className={twMerge("relative p-6 rounded-xl border-primary border-[1px] text-text overflow-hidden cursor-pointer", assinatura !== "Cliente" && "opacity-50")}>
                <div className="w-[180px] h-[180px] absolute -right-12 -top-12 rounded-full blur-[50px] bg-primary"></div>
                <div className="w-[180px] h-[180px] absolute -left-12 -bottom-12 rounded-full blur-[50px] -10 bg-primary"></div>
                <div className='relative z-10'>
                  <div className='mb-4'>
                    <h4 className='text-[22px]'>Cliente</h4>
                    <small className='text-md font-bold'>Casual</small>
                  </div>
                  <div className='border-l-2 border-l-white/45 p-4 flex flex-col gap-8'>
                    <div className="flex gap-4">
                      <div>
                        <FaRegCircleCheck className='text-[28px]' />
                      </div>
                      <p className='text-[14px] text-text'>Livre para assistir qualquer vídeo gratuitamente (não alugados).</p>
                    </div>
                    <div className="flex gap-4 opacity-35">
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
                  <p className='text-2xl font-bold mt-8 mb-6'>R$ 18,00/mês</p>
                </div>
              </div>



              {/* CRÍTICO */}
              <div onClick={() => setAssinatura("Critico")}
                className={twMerge("relative p-6 rounded-xl border-red border-[1px] text-text overflow-hidden cursor-pointer", assinatura !== "Critico" && "opacity-50")}>
                <div className="w-[180px] h-[180px] absolute -right-12 -top-12 rounded-full blur-[50px] bg-red"></div>
                <div className="w-[180px] h-[180px] absolute -left-12 -bottom-12 rounded-full blur-[50px] -10 bg-red"></div>
                <div className='relative z-10'>
                  <div className='mb-4'>
                    <h4 className='text-[22px]'>Crítico</h4>
                    <small className='text-md font-bold'>Diferente</small>
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
                  <p className='text-2xl font-bold mt-8 mb-6'>R$ 18,00/mês</p>

                </div>
              </div>



              {/* CRIADOR */}
              <div onClick={() => setAssinatura("Criador")}
                className={twMerge("relative p-6 rounded-xl border-text border-[1px] text-text overflow-hidden cursor-pointer", assinatura !== "Criador" && "opacity-50")}>
                <div className="w-[180px] h-[180px] absolute -right-12 -top-12 rounded-full blur-[50px] bg-text"></div>
                <div className="w-[180px] h-[180px] absolute -left-12 -bottom-12 rounded-full blur-[50px] -10 bg-text"></div>
                <div className='relative z-10'>
                  <div className='mb-4'>
                    <h4 className='text-[22px]'>Criador</h4>
                    <small className='text-md font-bold'>Especial</small>
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
                  <p className='text-2xl font-bold mt-8 mb-6'>R$ 18,00/mês</p>
                </div>
              </div>



            </div>
            <div className='flex justify-end'>
              <Button onClick={() => AssinarPlano()}>
                Assinar plano
              </Button>
            </div>
          </section>
        </div>
      </div >
    </div >
  )
}
export default Assinatura;
