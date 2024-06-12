import React, { useState } from 'react';

const VerificacaoDoisFatores: React.FC = () => {
  const [digitos, setDigitos] = useState<number[]>(Array(4).fill(0));
  const digitoInputRef: React.RefObject<HTMLInputElement>[] = Array(4).fill(0).map(() => React.createRef());

  const handleInputChange = (index: number, value: string) => {
    const newDigitos = [...digitos];
    newDigitos[index] = parseInt(value);
    setDigitos(newDigitos);

    if (value.length > 0 && index < 3) {
      digitoInputRef[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && digitos[index] === 0 && index > 0) {
      digitoInputRef[index - 1].current?.focus();
    }
  };

  return (
    <div className="bg-purple-600 min-h-screen flex justify-center items-center">
      <div className="container bg-white p-8 rounded-lg text-center">
        <div className="icone w-24 h-24 flex justify-center items-center bg-purple-600 rounded-full mx-auto mb-3">
          <img src="assets/protect.png" alt="" className="w-16 h-16" />
        </div>
        <h4 className="text-lg font-semibold mb-6">Código de verificação</h4>
        <form>
          <div className="grupoInputs flex justify-center mb-6">
            {digitos.map((_, index) => (
              <input
                key={index}
                type="number"
                className="inputdigito w-16 h-16 mr-2 text-lg text-center bg-gray-200 focus:outline-none focus:border-purple-400"
                maxLength={1}
                value={digitos[index] === 0 ? '' : String(digitos[index])}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={digitoInputRef[index]}
              />
            ))}
          </div>
          <button className={`w-full py-3 text-lg font-medium rounded-lg bg-purple-700 text-white ${digitos.every(d => d !== 0) ? 'opacity-100 cursor-pointer hover:bg-purple-600' : 'opacity-50 cursor-not-allowed'}`} disabled={!digitos.every(d => d !== 0)}>
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificacaoDoisFatores;




