import React, { useState } from 'react';
import escudo from "assets/protect.png";
import { InputOTP, InputOTPGroup, InputOTPSlot } from 'components/ui/input-otp';
import { useLocation, useParams } from 'react-router-dom';
const VerificacaoDoisFatores: React.FC = () => {
  const [digitos, setDigitos] = useState<string>("");
  const { state } = useLocation()
  const { code } = state as { code: string }
  const digitoInputRef: React.RefObject<HTMLInputElement>[] = Array(4).fill(0).map(() => React.createRef());

  return (
    <div className="bg-purple-600 min-h-screen flex justify-center items-center">
      <div className="container bg-background p-8 rounded-lg text-center">
        <div className="icone w-24 h-24 flex justify-center items-center bg-purple-600 rounded-full mx-auto mb-3">
          <img src={escudo} alt="" className="w-16 h-16" />
        </div>
        <h4 className="text-lg font-semibold mb-6 text-text">Código de Verificação:</h4>
        <form>
          <div className="grupoInputs flex justify-center mb-6 text-gray-800">
            {}

            <InputOTP onChange={setDigitos} maxLength={5} containerClassName={"opacity-100 border-1"}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>

          </div>
          {}

          <button className={`w-3/4 py-3 text-lg font-medium rounded-lg bg-purple-700 text-white ${digitos.length !== 0 ? 'opacity-100 cursor-pointer hover:bg-purple-600' : 'opacity-50 cursor-not-allowed'}`} disabled={digitos.length !== 0}>
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificacaoDoisFatores;




