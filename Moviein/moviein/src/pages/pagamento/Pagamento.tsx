import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



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
          window.location.href = 'https://sandbox.asaas.com/c/0azwtxohcx6pi0cq';
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
            <link rel="stylesheet" href="./pay.css" />
            <link rel="icon" href="../../../build/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Tela de Pagamento</title>
          </head>
          <body className="bg-gradient-to-b from-purple-700 to-black h-screen font-poppins">
            <div className="container mx-auto my-20 p-10 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-between">
              <img src="../../assets/logo.png" alt="Logo" className="Logo w-24" />
              <h2 className="text-white">Tela de Pagamento</h2>
              <form>
                <div className="form-group mb-5 max-w-md">
                  <label htmlFor="nome" className="block font-bold mb-1 text-white">
                    Nome do Titular:
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="nome completo"
                    required
                    className="input"
                  />
                </div>
                <div className="form-group mb-5 max-w-md">
                  <label htmlFor="cartao" className="block font-bold mb-1 text-white">
                    Número do Cartão:
                  </label>
                  <input
                    type="text"
                    id="cartao"
                    name="cartao"
                    placeholder="**** **** **** ****"
                    required
                    className="input"
                  />
                </div>
                <div className="form-group mb-5 max-w-md">
                  <label htmlFor="validade" className="block font-bold mb-1 text-white">
                    Data de Validade:
                  </label>
                  <input
                    type="date"
                    id="validade"
                    name="validade"
                    placeholder="MM/AA"
                    required
                    className="input"
                  />
                </div>
                <div className="form-group mb-5 max-w-md">
                  <label htmlFor="cvv" className="block font-bold mb-1 text-white">
                    CVV:
                  </label>
                  <input
                    type="number"
                    id="cvv"
                    name="cvv"
                    placeholder="***"
                    required
                    className="input"
                  />
                </div>
                <input type="submit" id="pagar" value="Pagar" className="btn-submit" />
                <button type="button" className="btn-voltar" onClick={()=>nav(-1)}>
                  Voltar
                </button>
              </form>
            </div>
          </body>
        </html>
      );
    };
export default Pagamento;