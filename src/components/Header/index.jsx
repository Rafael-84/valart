import React from "react";
import { Link } from "react-router-dom"
import logo from '../../assets/header/logo-valart.png'


export function Header() {

    const numeroTel = "5511969305119";
    const urlWhatsApp = `https://wa.me/${numeroTel}`;
    

    return(
        <header>
            <nav className="h-16 w-full p-8 flex justify-between items-center bg-bgFundoHeader bg-cover  bg-no-repeat bg-opacity-95">
                <div> <img src={logo} width={250} height={250} alt="Logo da empresa valART" className=" w-[100px] h-auto md:w-[250px] md:h-[250px] md:relative md:top-[50px] z-50 "/></div>
                <div className="flex items-center justify-center gap-4 p-1">
                    <Link to="/" className="text-sm text-indigo-700 font-bold hover:text-rose-600 transition-colors ">Home</Link>
                    <Link to="/servicos" className="text-sm text-indigo-700 font-bold hover:text-rose-600 transition-colors  ">Serviços</Link>
                    <Link to={urlWhatsApp} target="_blank" className="hidden md:flex md:p-1 md:bg-rose-700 md:rounded md:text-white md:font-bold md:hover:bg-rose-600 md:transition-colors">Contato</Link>
                </div>
            </nav>
        </header>
    )
}