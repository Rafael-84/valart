import React from "react";
import { Link } from "react-router-dom"
import logo from '../../assets/header/logo-valart.png'


export function Header() {

    const numeroTel = "5511969305119";
    const urlWhatsApp = `https://wa.me/${numeroTel}`;
    

    return(
        <header>
            <nav className="h-20 w-full flex justify-between items-center bg-corHeader ">
                <Link className="mx-8" to="/"> <img src={logo} alt="Logo da empresa valART" className=" w-auto h-auto md:w-auto h-auto"/></Link>
                <ul className="flex items-center justify-center gap-4 mx-8 p-1">
                    <li><Link to="/" className="text-sm text-indigo-700 font-bold hover:text-rose-600 transition-colors ">Home</Link></li>
                    <li><Link to="/servicos" className="text-sm text-indigo-700 font-bold hover:text-rose-600 transition-colors  ">Serviços</Link></li>
                    <li><Link to={urlWhatsApp} target="_blank" className="hidden md:flex md:p-1 md:bg-rose-700 md:rounded md:text-white md:font-bold md:hover:bg-rose-600 md:transition-colors">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}