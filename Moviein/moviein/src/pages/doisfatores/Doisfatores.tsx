import React from 'react';

const Doisfatores = () => {
    return (
        <>
        <div className="bg-purple-700 min-h-screen flex justify-center items-center">
        <div className="container">
          <div className="icone bg-purple-800 rounded-full w-24 h-24 flex justify-center items-center mx-auto mb-3">
            <img src="assets/protect.png" alt="" className="w-16 h-16" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Código de verificação</h4>
          <form>
            <div className="grupoInputs flex justify-center">
              <input type="number" id="digito1" className="inputdigito w-16 h-16 text-2xl bg-gray-200 mx-1" maxLength={1} />
              <input type="number" id="digito2" className="inputdigito w-16 h-16 text-2xl bg-gray-200 mx-1" maxLength={1} />
              <input type="number" id="digito3" className="inputdigito w-16 h-16 text-2xl bg-gray-200 mx-1" maxLength={1} />
              <input type="number" id="digito4" className="inputdigito w-16 h-16 text-2xl bg-gray-200 mx-1" maxLength={1} />
            </div>
            <button className="ativo bg-purple-800 text-white w-full py-3 rounded-md text-lg font-medium mt-5 disabled:opacity-50" disabled>Verificar</button>
          </form>
        </div>
      </div>
        </>
    )
}

export default Doisfatores;