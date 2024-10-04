import { Link } from 'react-router-dom'
import logo from '../../assets/header/logo-valart.png'

import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export function Footer() {

    const instagram = "https://www.instagram.com/valart_loja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    const numeroTel = "5511969305119";
    const urlWhatsApp = `https://wa.me/${numeroTel}`;

    const insta = "@valart_loja"
    const telefone = "(11)96930-5119"

    return (
        <footer className="flex flex-col items-center bg-fundo mt-16  ">
            <ul className="flex flex-col gap-5 mt-5 md:flex md:flex-row md:items-center md:justify-between md:w-full lg:w-10/12 4k:w-1/2">
                <nav className='md:ml-16'>
                    <li className="text-center"><h2 className="text-center font-bold text-lg text-rose-700 ">Contato</h2></li>
                    <li className="text-sm text-center my-2 text-indigo-800 font-medium md:text-base"><p>Email: email.exemplo@email.com</p></li>
                    <li className="flex items-center justify-center gap-2  text-sm text-center text-indigo-800 font-medium md:text-base"><FaPhone size={20} /><Link to={urlWhatsApp} target="_blank" className='hover:text-rose-700 '>Telefone: {telefone} </Link></li>
                </nav>
                <nav className='md:mr-16'>
                    <li className="text-center"><h2 className="text-center font-bold text-lg text-rose-700  "> Nossas Redes Sociais</h2></li>
                    <li className="flex items-center justify-center gap-2 text-sm text-center my-2 text-indigo-800 font-medium   md:text-base"><FaInstagram  size={20} /><Link to={instagram} target='_blank' className='hover:text-rose-700 ' >{insta}</Link></li>
                </nav>
            </ul>
            <div className="flex justify-center items-center "><img src={logo} alt="Logo da empresa valART" className=" w-32 h-32  " /></div>
            <span className="text-sm text-center text-indigo-800 font-medium mb-5 mx-1 relative bottom-6 " >ValART Copyright ©2024 | Todos os direitos Reservados </span>
        </footer>
    )
}