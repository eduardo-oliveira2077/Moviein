import React from 'react';

const Assinatura: React.FC = () => {
    return (
        <div>
            <div className="bg-[#191825] mx-[100px] my-12 pb-5 rounded-lg">
                <p className="py-5 text-white">Assinatura</p>
                <div className="flex">
                    <div className="relative flex flex-col gap-4 p-4 m-5 w-80 bg-[#191825] border border-[#FBF5FC30]">
                        <div className="absolute inset-0 z-[-10] rounded-lg bg-gradient-to-t from-white via-gray-400 to-transparent"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <span className="text-white">Mensal</span>
                            <p className="mt-1 text-sm text-gray-300 w-2/3"></p>
                        </div>
                        <hr className="w-full h-[1px] bg-[#29293a] border-none" />
                        <div className="flex">
                            <div className="w-[1px] h-48 bg-white opacity-30"></div>
                            <ul className="flex flex-col gap-2 ml-4">
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Acesso grátis a todos os filmes.</span>
                                    <div className="absolute bottom-[-20px] left-[-20px] w-30 h-30 bg-[#865DFF] rounded-full blur-[60px]"></div>
                                    <div className="absolute top-[-20px] right-[-20px] w-30 h-30 bg-[#865DFF] rounded-full blur-[60px]"></div>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Qualidade de imagem de até 720p.</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Anúncios.</span>
                                </li>
                                <p className="text-lg text-white mb-2">R$ 18,00/mês</p>
                                <label className="relative flex items-center ml-[240px] cursor-pointer text-[15px] select-none">
                                    <input defaultChecked type="checkbox" className="absolute opacity-0 h-0 w-0 cursor-pointer" />
                                    <div className="w-6 h-6 rounded-full bg-[#ffeded38] transition-all ease duration-200 opacity-40 checked:bg-[#865DFF] checked:opacity-90"></div>
                                    <span className="absolute left-[0.61em] top-[0.43em] w-[0.25em] h-[0.5em] border-[0_0.15em_0.15em_0] border-white transform rotate-45"></span>
                                </label>
                            </ul>
                        </div>
                    </div>

                    {/* Semestral */}
                    <div className="relative flex flex-col gap-4 p-4 m-5 w-80 bg-[#191825] border border-[#FBF5FC30]">
                        <div className="absolute inset-0 z-[-10] rounded-lg bg-gradient-to-t from-white via-gray-400 to-transparent"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <span className="text-white">Semestral</span>
                            <p className="mt-1 text-sm text-gray-300 w-2/3"></p>
                        </div>
                        <hr className="w-full h-[1px] bg-[#29293a] border-none" />
                        <div className="flex">
                            <div className="w-[1px] h-48 bg-white opacity-30"></div>
                            <ul className="flex flex-col gap-2 ml-4">
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Acesso grátis a todos os filmes.</span>
                                    <div className="absolute bottom-[-20px] left-[-20px] w-30 h-30 bg-[#C20439] rounded-full blur-[60px]"></div>
                                    <div className="absolute top-[-20px] right-[-20px] w-30 h-30 bg-[#C20439] rounded-full blur-[60px]"></div>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Qualidade de imagem de até 1080p.</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Sem anúncios.</span>
                                </li>
                                <p className="text-lg text-white mb-2">R$ 95,00/semestre</p>
                                <label className="relative flex items-center ml-[240px] cursor-pointer text-[15px] select-none">
                                    <input defaultChecked type="checkbox" className="absolute opacity-0 h-0 w-0 cursor-pointer" />
                                    <div className="w-6 h-6 rounded-full bg-[#ffeded38] transition-all ease duration-200 opacity-40 checked:bg-[#C20439] checked:opacity-90"></div>
                                    <span className="absolute left-[0.61em] top-[0.43em] w-[0.25em] h-[0.5em] border-[0_0.15em_0.15em_0] border-white transform rotate-45"></span>
                                </label>
                            </ul>
                        </div>
                    </div>

                    {/* Anual */}
                    <div className="relative flex flex-col gap-4 p-4 m-5 w-80 bg-[#191825] border border-[#FBF5FC30]">
                        <div className="absolute inset-0 z-[-10] rounded-lg bg-gradient-to-t from-white via-gray-400 to-transparent"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <span className="text-white">Anual</span>
                            <p className="mt-1 text-sm text-gray-300 w-2/3"></p>
                        </div>
                        <hr className="w-full h-[1px] bg-[#29293a] border-none" />
                        <div className="flex">
                            <div className="w-[1px] h-48 bg-white opacity-30"></div>
                            <ul className="flex flex-col gap-2 ml-4">
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Acesso grátis a todos os filmes.</span>
                                    <div className="absolute bottom-[-20px] left-[-20px] w-30 h-30 bg-[#FF9677] rounded-full blur-[60px]"></div>
                                    <div className="absolute top-[-20px] right-[-20px] w-30 h-30 bg-[#FF9677] rounded-full blur-[60px]"></div>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Qualidade de imagem de até 4K.</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex justify-center items-center w-4 h-4 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-black">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white mb-2">Sem anúncios.</span>
                                </li>
                                <p className="text-lg text-white mb-2">R$ 150,00/ano</p>
                                <label className="relative flex items-center ml-[240px] cursor-pointer text-[15px] select-none">
                                    <input defaultChecked type="checkbox" className="absolute opacity-0 h-0 w-0 cursor-pointer" />
                                    <div className="w-6 h-6 rounded-full bg-[#ffeded38] transition-all ease duration-200 opacity-40 checked:bg-[#FF9677] checked:opacity-90"></div>
                                    <span className="absolute left-[0.61em] top-[0.43em] w-[0.25em] h-[0.5em] border-[0_0.15em_0.15em_0] border-white transform rotate-45"></span>
                                </label>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assinatura;
