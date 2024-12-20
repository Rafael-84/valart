import { Link } from 'react-router-dom'
import logoMain from '../../assets/header/logo-valart-main.png';

import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function Footer() {

    const instagram = "https://www.instagram.com/valart_servicos/"
    const numeroTel = "5511969305119";
    const urlWhatsApp = `https://wa.me/${numeroTel}`;

    const insta = "@valart_loja";
    const telefone = "(11)96930-5119";
    const email = "contatovalart@gmail.com";
    const ano = new Date().getFullYear();
    

    return (
        <footer className="flex flex-col items-center bg-fundo mt-24  ">
            <div className="flex flex-col gap-5 mt-5 md:flex md:flex-row md:items-center md:justify-between  md:w-full lg:w-10/12 4k:w-1/2">
                <div className='my-4 md:ml-16 '>
                    <h2 className="text-center font-bold text-lg text-rose-700 mb-7 ">Contato</h2>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-center my-2 mb-7 text-indigo-800 font-medium md:text-base"><HiOutlineMail size={20}/><p>{email}</p></div>
                    <div className="flex items-center justify-center gap-2  text-sm text-center text-indigo-800 font-medium md:text-base"><FaPhone size={20} /><Link title="WhatssApp" to={urlWhatsApp} target='_blank' className='hover:text-rose-700 '>Telefone: {telefone} </Link></div>
                </div>
                <div className='my-4 md:mr-16'>
                    <h2 className="text-center font-bold text-lg text-rose-700  "> Nossas Redes Sociais</h2>
                    <div className="flex items-center justify-center gap-2 text-sm text-center my-2 mt-7 text-indigo-800 font-medium  md:text-base"><FaInstagram  size={20} /><Link title="Instagram" to={instagram} target='_blank' className='hover:text-rose-700 ' >{insta}</Link></div>
                </div>
            </div>
            <div className="flex justify-center items-center "><img width={128} height={130} src={logoMain} title="Logo valART" alt="Logo da empresa valART" className=" w-32 h-32  " /></div>
            <span className="text-sm text-center text-indigo-800 font-medium mb-5 mx-1 relative bottom-6 " >ValART Copyright ©{ano} | Todos os direitos Reservados </span>
            
        </footer>
    )
}