
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FeedbackAndContact } from "../../components/FeedBackAndContact";
import imgHome from '../../assets/main/imgServices.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import imagemSLide1 from '../../assets/imgSlide/imgSlide1.jpg';
import imagemSLide2 from '../../assets/imgSlide/imgSlide2.jpg';
import imagemSLide3 from '../../assets/imgSlide/imgSlide3.jpg';
import imagemSLide4 from '../../assets/imgSlide/imgSlide4.jpg';
import imagemSLide5 from '../../assets/imgSlide/imgSlide5.jpg';
import imagemSLide6 from '../../assets/imgSlide/imgSlide6.jpg';
import imagemSLide7 from '../../assets/imgSlide/imgSlide7.jpg';
import imagemSLide8 from '../../assets/imgSlide/imgSlide8.jpg';
import imagemSLide9 from '../../assets/imgSlide/imgSlide9.jpg';

import imagemSLide10 from '../../assets/imgSlide/imgSlide11.jpg';
import imagemSLide11 from '../../assets/imgSlide/imgSlide12.jpg';
import imagemSLide12 from '../../assets/imgSlide/imgSlide13.jpg';
import imagemSLide13 from '../../assets/imgSlide/imgSlide14.jpg';
import imagemSLide14 from '../../assets/imgSlide/imgSlide15.jpg';
import imagemSLide15 from '../../assets/imgSlide/imgSlide16.jpg';
import imagemSLide16 from '../../assets/imgSlide/imgSlide17.jpg';
import imagemSLide17 from '../../assets/imgSlide/imgSlide18.jpg';
import imagemSLide18 from '../../assets/imgSlide/imgSlide19.jpg';
import imagemSLide19 from '../../assets/imgSlide/imgSlide20.jpg';
import imagemSLide20 from '../../assets/imgSlide/imgSlide21.jpg';
import imagemSLide21 from '../../assets/imgSlide/imgSlide22.jpg';
import imagemSLide22 from '../../assets/imgSlide/imgSlide23.jpg';
import imagemSLide23 from '../../assets/imgSlide/imgSlide24.jpg';
import imagemSLide24 from '../../assets/imgSlide/imgSlide25.jpg';
import imagemSLide25 from '../../assets/imgSlide/imgSlide26.jpg';
import imagemSLide26 from '../../assets/imgSlide/imgSlide27.jpg';
import imagemSLide27 from '../../assets/imgSlide/imgSlide28.jpg';
import imagemSLide28 from '../../assets/imgSlide/imgSlide29.jpg';

export function Servicos() {

  const numeroTel = "5511969305119";
  const urlWhatsApp = `https://wa.me/${numeroTel}`;
  const instagram = "https://www.instagram.com/valart_loja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const data = [
    { id: 1, Image: imagemSLide1, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 2, Image: imagemSLide2, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 3, Image: imagemSLide3, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 4, Image: imagemSLide4, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 5, Image: imagemSLide5, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 6, Image: imagemSLide6, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 7, Image: imagemSLide7, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 8, Image: imagemSLide8, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 9, Image: imagemSLide9, name: 'Fotos de alguns trabalhos realizados pela valART.' },    

    { id: 10, Image: imagemSLide10, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 11, Image: imagemSLide11, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 12, Image: imagemSLide12, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 13, Image: imagemSLide13, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 14, Image: imagemSLide14, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 15, Image: imagemSLide15, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 16, Image: imagemSLide16, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 17, Image: imagemSLide17, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 18, Image: imagemSLide18, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 19, Image: imagemSLide19, name: 'Fotos de alguns trabalhos realizados pela valART.' },

    { id: 20, Image: imagemSLide20, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 21, Image: imagemSLide21, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 22, Image: imagemSLide22, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 23, Image: imagemSLide23, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 24, Image: imagemSLide24, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 25, Image: imagemSLide25, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 26, Image: imagemSLide26, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 27, Image: imagemSLide27, name: 'Fotos de alguns trabalhos realizados pela valART.' },
    { id: 28, Image: imagemSLide28, name: 'Fotos de alguns trabalhos realizados pela valART.' },
  ]

  return (
    <main>
      <Header />
      <section className="w-full flex justify-center h-full">
        <div className=" w-full h-full flex items-center justify-center bg-bgMain bg-fundo bg-cover bg-no-repeat bg-opacity-75">
          <div className="hidden md:flex md:relative md:justify-center md:items-center md:left-20 md:top-32 lg:left-44 lg:top-28 xl:left-96 xl:top-24 2xl:left-[450px] 4k:left-[950px]">
            <img src={imgHome} alt="Homem utilizando uma ferramenta realizando um trabalho na parede" className="shadow-lg shadow-indigo-300 md:w-[240px] md:h-[280px] md:rounded-sm lg:w-[250px] lg:h-[290px] lg:h-[260px]" />
          </div>

          <div className="w-full h-4/5 flex items-center justify-center flex-col md:flex md:items-center md:justify-center md:relative md:right-5  ">
            <h2 className="text-center my-8 md:mr-32 font-medium  text-rose-800 w-11/12 md:w-full ">A Valart oferece uma ampla gama de serviços de gesso, como forro de gesso acartonado, drywall, sancas e tetos decorativos. Nossa equipe garante acabamentos de alta qualidade e designs personalizados para reformas residenciais e comerciais. Também realizamos pintura, instalação e manutenção elétrica. Transforme seus ambientes com elegância e funcionalidade com a Valart! </h2>
            <p className="text-indigo-800 font-bold text-lg" >Alguns de nossos serviços</p>
            <ul className="flex items-center justify-between w-9/12 mt-5 gap-5 text-indigo-800 font-medium md:w-auto ">
              <ol className="list-disc md:w-full md:mr-[70px]">
                <li>Forros de gesso</li>
                <li>Sancas de gesso</li>
                <li>Drayeall</li>
                <li>Gesso 3D</li>
              </ol>
              <ol className="list-disc md:w-full " >
                <li>Forros de gesso</li>
                <li>Sancas de gesso</li>
                <li>Drayeall</li>
                <li>Gesso 3D</li>
              </ol>
            </ul>
            <Link to={urlWhatsApp} target="_blank" className="my-10 mx-auto bg-rose-700 p-2 rounded-md text-white font-bold hover:bg-rose-600 transition-colors ">Entrar em Contato</Link>
          </div>
        </div>
        <Link to={urlWhatsApp} target="-blank" ><FaWhatsapp className="hidden md:flex md:fixed md:right-20 md:top-[530px] 4k:top-[930px] animate-bounce z-10 " size={80} color="#0cb132"  /></Link>
      </section>
      <section>
        <h2 className="text-center  font-bold text-lg text-rose-700 mt-10 mb-5 md:mt-36 md:mb-10 lg:mb-0  " >Alguns de nossos trabalhos</h2>
          <Swiper className="w-full h-auto md:flex md:items-center md:justify-center md:relative md:top-[-28px]  md:w-11/12 md:h-[600px] lg:w-11/12 lg:h-[680px] xl:w-10/12 xl:h-[850px] xl:top-[-95px] 2xl:w-9/12  4k:h-auto 4k:w-1/2 4k:top-[45px] " spaceBetween={30} centeredSlides={true} slidesPerView={1} autoplay={{ delay: 4000, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Autoplay, Pagination]} >

          {data.map((item) => (
            <SwiperSlide key={item.id} >
              <div className="flex items-center justify-center w-full md:p-2 lg:p-14 xl:p-40 4k:p-0">
                <img src={item.Image} alt={item.name} className="w-auto h-auto md:w-full md:h-[600px] md:mx-2 lg:h-[680px] xl:w-full xl:h-auto 2xl:w-full 2xl:h-auto  4k:h-auto 4k:w-auto select-none" />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        <div className="flex items-center justify-center  ">
          <Link to={instagram} className=" flex items-center justify-center mx-auto text-indigo-800 mt-5 hover:text-rose-700 md:gap-2 4k:mt-40">
            <FaInstagram  size={30} />
            <span className=" italic font-medium text-lg text-xs text-center  md:text-base">Acesse nossas redes socias para mais detalhes.</span>
          </Link>
      </div>
      </section>
      
        
      

      <FeedbackAndContact />
      <Footer />

    </main>
  )
}