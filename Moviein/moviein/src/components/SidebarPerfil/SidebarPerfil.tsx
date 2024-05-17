import React from "react";
import film from '../../assets/filme.png';
import { Outlet, useNavigate } from "react-router-dom";

type MenuItemPerfilType = {
    path: string
    titulo: string
}

const SidebarPerfil: React.FC = () => {
    const nav = useNavigate();

    const MenuItemPerfil: React.FC<MenuItemPerfilType> = (i) => {
        const active = window.location.pathname === i.path;
        const activeBg = active ? "bg-primary/20 text-primary" : "text-white";
        return (
            <div className={`p-4 cursor-pointer pr-8 ${activeBg}`} onClick={() => nav(i.path)}>
                <p className="text-right">{i.titulo}</p>
            </div>
        )
    }

    return (
        <>
            <img src={film} alt="filmes" className="w-screen h-[60px] object-cover" />
            <div className="flex">
                <div className="w-[30%] bg-[#00000070] h-[calc(100vh-60px)]">

                    <MenuItemPerfil
                        path="/a/perfil/dadosPrincipais"
                        titulo="Dados principais" />

                    <MenuItemPerfil
                        path="/a/perfil/meusVideos"
                        titulo="Meus vídeos" />

                </div>
                <div className="w-[70%] h[calc(100vh-60px)]">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default SidebarPerfil;