import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./pay.css"

    const Pagamento: React.FC = () => {
      const nav=useNavigate()
      const pagarButtonRef = useRef<HTMLButtonElement | null>(null);
      const cvvInputRef = useRef<HTMLInputElement | null>(null);
      const cartaoInputRef = useRef<HTMLInputElement | null>(null);
      const nomeInputRef = useRef<HTMLInputElement | null>(null);
    
      useEffect(() => {
        const pagarButton = pagarButtonRef.current;
        const cvvInput = cvvInputRef.current;
        const cartaoInput = cartaoInputRef.current;
        const nomeInput = nomeInputRef.current;
      
        console.log('pagarButton:', pagarButton);
        console.log('cvvInput:', cvvInput);
        console.log('cartaoInput:', cartaoInput);
        console.log('nomeInput:', nomeInput);

        const handlePagarClick = () => {
          window.location.href = '../pagamento/confirma.html';
        };
    
        const handleCVVInput = (e: Event) => {
          const input = e.target as HTMLInputElement;
          input.value = input.value.replace(/[^0-9]/g, '');
          if (input.value.length > 3) {
            input.value = input.value.slice(0, 3);
          }
        };
    
        const handleCartaoInput = (e: Event) => {
          const input = e.target as HTMLInputElement;
          input.value = input.value.replace(/[^0-9- --]/g, '');
          if (input.value.length > 19) {
            input.value = input.value.slice(0, 19);
          }
        };
    
        const handleNomeInput = (e: Event) => {
          const input = e.target as HTMLInputElement;
          input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
        };
    
        if (pagarButton) {
          pagarButton.addEventListener('click', handlePagarClick);
        }
    
        if (cvvInput) {
          cvvInput.addEventListener('input', handleCVVInput);
        }
    
        if (cartaoInput) {
          cartaoInput.addEventListener('input', handleCartaoInput);
        }
    
        if (nomeInput) {
          nomeInput.addEventListener('input', handleNomeInput);
        }
    
        // Cleanup listeners on component unmount
        return () => {
          if (pagarButton) {
            pagarButton.removeEventListener('click', handlePagarClick);
          }
          if (cvvInput) {
            cvvInput.removeEventListener('input', handleCVVInput);
          }
          if (cartaoInput) {
            cartaoInput.removeEventListener('input', handleCartaoInput);
          }
          if (nomeInput) {
            nomeInput.removeEventListener('input', handleNomeInput);
          }
        };
      }, []);

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
            <button type="button" className="voltar" onClick={()=>nav(-1)}>
              Voltar
            </button>
          </form>
        </div>
      </body>
    </html>
  );
};

export default Pagamento;