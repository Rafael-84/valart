
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FeedbackAndContact } from "../../components/FeedBackAndContact";
import logo from '../../assets/header/logo-valart.png';
import imgHome from '../../assets/main/imgHome.jpg';

import { FaWhatsapp } from "react-icons/fa";



export function Home() {

    const numeroTel = "5511969305119";
    const urlWhatsApp = `https://wa.me/${numeroTel}`;

    return (
        <main className="bg-corHeader">
            <Header />
            <section className="w-full flex items-center justify-center flex-col bg-fundo bg-bgMain bg-cover bg-no-repeat   md:h-[calc(560px-80px)]  ">
                <div className="flex flex-col items-center justify-center h-full md:w-full xl:w-11/12">
                    <div className="flex relative  justify-center items-center ">
                        <img src={logo} alt="Logo da empresa valART" className=" w-32 h-32  md:mb-2 " />
                    </div>
                    <div className="flex flex-col justify-center items-center 4k:w-7/12 text-start md:w-3/4  md:ml-[-220px] lg:w-1/2 xl:w-1/2  4k:ml-0">
                        <p className="text-indigo-800 w-11/12  mx-auto text-center  font-medium md:w-3/4 md:ml-auto md:text-center 4k:w-2/6">
                            Dê vida aos seus espaços com a Valart! Especializada em gesso, nossa equipe transforma ambientes com elegância e inovação. Entre em contato e descubra como podemos criar o projeto dos seus sonhos. Sua transformação começa aqui!</p>

                        <Link to={urlWhatsApp} target="-blank" className="mx-auto my-10 mx-auto bg-rose-700 p-2 rounded-md text-white font-bold hover:bg-rose-600 transition-colors md:ml-64 md:mt-[60px] lg:ml-52 xl:ml-72 2xl:ml-80 4k:mr-80">Entrar em Contato</Link>
                    </div>
                    <img src={imgHome} alt="teste" className="hidden md:flex md:absolute md:w-auto md:h-[317px] md:right-14 md:top-[270px] md:rounded-sm md:opacity-95 md:shadow-lg md:shadow-indigo-300  lg:right-44 xl:right-[350px] 2xl:right-96 4k:right-[800px] " />
                </div>
                <Link to={urlWhatsApp} target="_blank" ><FaWhatsapp alt="Botão flutuante que abrirá o contato da empresa no WhatsApp" className="hidden md:flex md:fixed md:left-20 md:top-[530px] xl:top-[75%] 4k:top-[930px] animate-bounce z-10 hover:shadow-slate-700 " size={80} color="#0cb132"  /></Link>
            </section>
            <section className="flex items-center justify-center flex-col bg-corHeader">
                <h1 className="text-center my-8 font-bold text-lg text-rose-700 md:mt-28 md:mb-5  ">Nossos Serviços</h1>
                <div className="flex items-center justify-center flex-col my-9 gap-4 md:mx-10 md:gap-16 md:mb-20 md:w-11/12 md:gap-10 lg:flex-row xl:w-3/4 4k:w-1/2">
                    <div className="w-11/12 h-full bg-fundo flex items-center justify-center flex-col gap-4 p-4 md:h-[365px] md:gap-8 lg:h-[400px] lg:gap-7  4k:w-1/2">
                        <h2 className="font-bold text-indigo-800 mt-2" >Em Gesso</h2>
                        <p className="mx-2 text-indigo-900 text-sm font-medium" >A Valart é especialista em serviços de gesso, oferecendo soluções como forro de gesso acartonado, drywall, sancas e molduras decorativas. Atuamos em reformas residenciais e comerciais, garantindo acabamentos de alta qualidade e estética impecável. Também realizamos instalação e manutenção de drywall, proporcionando conforto e praticidade aos seus ambientes.</p>
                        <Link to="/servicos" className="p-2 bg-rose-700 rounded-md text-white font-bold hover:bg-rose-600 transition-colors ">Saiba Mais</Link>
                    </div>
                    <div className="w-11/12 h-full bg-fundo flex items-center justify-center flex-col gap-4 p-4 md:h-[365px] md:gap-10 lg:h-[400px] lg:gap-8 4k:w-1/2 ">
                        <h2 className="font-bold text-indigo-800 mt-2">Construção</h2>
                        <p className="mx-2  text-indigo-900 text-sm font-medium" >A Valart é a sua parceira ideal em construção e reforma, especializada em transformar espaços com qualidade e eficiência. Nossa equipe experiente garante acabamentos impecáveis em projetos residenciais e comerciais, sempre priorizando a estética e a funcionalidade. Confie na Valart para renovar seu ambiente com estilo e precisão!</p>
                        <Link to="/servicos" className="p-2 bg-rose-700 rounded-md text-white font-bold hover:bg-rose-600 transition-colors ">Saiba Mais</Link>
                    </div>
                    <div className="w-11/12 h-full bg-fundo flex items-center justify-center flex-col gap-4 p-4 md:h-[365px] lg:h-[400px] lg:gap-2  4k:w-1/2 ">
                        <h2 className="font-bold text-indigo-800 my-2">Manutenção</h2>
                        <p className="mx-2  text-indigo-900 text-sm font-medium" >A Valart é sua parceira ideal para manutenção de espaços, oferecendo serviços especializados que garantem a durabilidade das instalações. Nossa equipe, com experiência em drywall e gesso, realiza manutenção preventiva e corretiva, assegurando acabamentos impecáveis e funcionalidade em ambientes residenciais e comerciais. Confie na Valart para manter seu espaço renovado e em perfeitas condições!</p>
                        <Link to="/servicos" className="p-2 bg-rose-700 rounded-md text-white font-bold hover:bg-rose-600 transition-colors ">Saiba Mais</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-2">
                    <p className="mx-3 text-center text-indigo-900 my-10 md:mb-8 ">Na Valart, realizamos serviços completos, desde a construção até o acabamento, com gessos de diversas opções para transformar seus sonhos em realidade! </p>
                    <span className="  mx-3 text-center text-indigo-900 font-bold">Temos a melhor solução para a sua construção, atendendo desde a sua residência até a sua empresa, garantindo qualidade e inovação em cada projeto com a Valart!</span>
                </div>
            </section>
            <FeedbackAndContact />
            <Footer />
        </main>
    )
}
