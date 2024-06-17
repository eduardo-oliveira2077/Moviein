import React from 'react';

const Error404: React.FC = () => {
  return (
    <div className="square bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <p className="title text-6xl">Erro 404</p>
      <p className="text text-lg">Página não encontrada, reinicie</p>
    </div>
  );
};

export default Error404;