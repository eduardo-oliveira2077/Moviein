import React from 'react';

const Assinatura: React.FC = () => {
    return (
            <div className="bg-gradient-to-r from-[#191825] to-[#865DFF] min-h-screen text-[#FBF5FC]">
              <div className="bg-[#191825] mx-24 my-12 p-8 rounded-lg">
                <header className="text-left">
                  <p className="text-2xl font-bold">Assinatura</p>
                </header>
                <div className="flex justify-around mt-8">
                  <Card
                    title="Mensal"
                    price="R$ 18,00/mês"
                    features={[
                      "Acesso grátis a todos os filmes.",
                      "Qualidade de imagem de até 720p.",
                      "Anúncios.",
                    ]}
                    color="bg-[#865DFF]"
                  />
                  <Card
                    title="Semestral"
                    price="R$ 113,40/semestral"
                    features={[
                      "Acesso grátis a todos os filmes.",
                      "Qualidade HD.",
                      "Sem anúncios.",
                    ]}
                    color="bg-[#C20439]"
                  />
                  <Card
                    title="Anual"
                    price="R$ 226,80/ano"
                    features={[
                      "Acesso grátis a todos os filmes.",
                      "Qualidade HD.",
                      "Sem anúncios.",
                    ]}
                    color="bg-[#FBF5FC]"
                  />
                </div>
                <div className="mt-8 text-center">
                  <button className="bg-[#191825] text-[#FBF5FC] border border-[#FBF5FC] rounded-lg px-6 py-2">
                    Voltar
                  </button>
                </div>
              </div>
            </div>
          );
        };
        
        interface CardProps {
          title: string;
          price: string;
          features: string[];
          color: string;
        }
        
        const Card: React.FC<CardProps> = ({ title, price, features, color }) => {
          return (
            <div className="relative flex flex-col gap-4 p-4 bg-[#1b1b2f] border border-[#FBF5FC30] rounded-lg w-72">
              <div className="absolute inset-0 z-[-1] flex items-center justify-center">
                <div className={`w-32 h-32 ${color} rounded-full filter blur-2xl`} />
              </div>
              <div className="z-10">
                <h3 className="text-xl font-bold">{title}</h3>
                <ul className="mt-4 space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="flex items-center justify-center w-4 h-4 bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-3 h-3 text-black"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-lg font-semibold">{price}</p>
                <button className="mt-4 bg-[#865DFF] text-[#FBF5FC] rounded-lg px-6 py-2">
                  Assinar
                </button>
              </div>
            </div>
          );
        };

export default Assinatura;
