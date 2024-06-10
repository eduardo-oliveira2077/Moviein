import React from 'react';
import ''
import 'pages/pagamento/Pagamento.js'
const Pagamento: React.FC = () => {
  const goBack = () => {
    // Implemente a lógica para voltar à página anterior
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="pay.css" />
        <link rel="icon" href="../../../build/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tela de Pagamento</title>
      </head>
      <body>
        <div className="animated-background"></div>
        <div className="container">
          <img alt="" className="Logo" src="../../assets/logo.png" />
          <h2>Tela de Pagamento</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nome">Nome do Titular:</label>
              <input type="text" id="nome" name="nome" placeholder="nome completo" required />
            </div>
            <div className="form-group">
              <label htmlFor="cartao">Número do Cartão:</label>
              <input type="text" id="cartao" name="cartao" placeholder="**** **** **** ****" required />
            </div>
            <div className="form-group">
              <label htmlFor="validade">Data de Validade:</label>
              <input type="date" id="validade" name="validade" placeholder="MM/AA" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="number" id="cvv" name="cvv" placeholder="***" required />
            </div>
            <input type="submit" id="pagar" value="Pagar" />
            <button type="button" className="voltar" onClick={goBack}>
              Voltar
            </button>
          </form>
        </div>
      </body>
    </html>
  );
};

export default Pagamento;