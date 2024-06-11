import React from 'react';

const Assinatura: React.FC = () => {
    return (
        <div>
            <div className="square">
                <p className="title">Assinatura</p>
                <div className="row">
                    <div className="card">
                        <div className="card__border"></div>
                        <div className="card_title__container">
                            <span className="card_title">Mensal</span>
                            <p className="card_paragraph"></p>
                        </div>

                        <hr className="line" />
                        <div style={{ display: 'flex' }}>
                            <div>
                                <div className="line-v"></div>
                            </div>
                            <ul className="card__list">
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>

                                    <span className="list_text">Acesso grátis a todos os filmes.</span>
                                    <div className="ball-bottom"></div>
                                    <div className="ball-top"></div>
                                </li>
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="list_text">Qualidade de imagem de até 720p.</span>
                                </li>
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="list_text">Anúncios.</span>
                                </li>
                                <p className="price">R$ 18,00/mês</p>
                                <label className="container">
                                    <input defaultChecked type="checkbox" />
                                    <div className="checkmark"></div>
                                </label>
                            </ul>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card__border"></div>
                        <div className="card_title__container">
                            <span className="card_title">Semestral</span>
                            <p className="card_paragraph"></p>
                        </div>
                        <hr className="line" />
                        <div style={{ display: 'flex' }}>
                            <div>
                                <div className="line-v"></div>
                            </div>
                            <ul className="card__list">
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="list_text">Acesso grátis a todos os filmes.</span>
                                    <div className="ball-bottom2"></div>
                                    <div className="ball-top2"></div>
                                </li>
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="list_text">Qualidade HD.</span>
                                </li>
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="list_text">Sem anúncios.</span>
                                </li>
                                <p className="price">R$ 113,40/semestral</p>
                                <label className="container">
                                    <input defaultChecked type="checkbox" />
                                    <div className="checkmark"></div>
                                </label>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__border"></div>
                        <div className="card_title__container">
                            <span className="card_title">Anual</span>
                            <p className="card_paragraph"></p>
                        </div>
                        <hr className="line" />
                        <div style={{ display: 'flex' }}>
                            <div>
                                <div className="line-v"></div>
                            </div>
                            <ul className="card__list">
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="list_text">Acesso grátis a todos os filmes.</span>
                                    <div className="ball-bottom3"></div>
                                    <div className="ball-top3"></div>
                                </li>
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="list_text">Qualidade HD.</span>
                                </li>
                                <li className="card__list_item">
                                    <span className="check">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                            <path fillRule="evenodd"
                                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="list_text">Sem anúncios.</span>
                                </li>
                                <p className="price">R$ 226,80/ano</p>
                                <label className="container">
                                    <input defaultChecked type="checkbox" />
                                    <div className="checkmark"></div>
                                </label>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="rodape">
                    <button className="bt_return" onClick={() => window.history.back()} type="button">
                        <span>Voltar</span>
                    </button>
                    <div className="payment">
                        <a href="../../Moviein/moviein/src/pages/pagamento/pagamento.html" className="bt_payment" type="button">
                            <span>Continuar para pagamento</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assinatura;
