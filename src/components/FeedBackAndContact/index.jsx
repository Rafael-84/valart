
import { Link } from "react-router-dom"


export function FeedbackAndContact() {

    const numeroTel = "5511969305119";
    const urlWhatsApp = `https://wa.me/${numeroTel}`;

    return (
        <main>
            <section className="flex items-center justify-center w-full h-96 bg-bgEscolher bg-cover bg-no-repeat  mt-10 mb-28 md:flex md:items-center md:justify-center md:mt-24 md:h-72" >
                <div className="flex  items-center justify-center w-full h-72 mx-1 ">                   
                    <div className="flex flex-col justify-center items-center gap-4 w-11/12 mt-6">
                        <p className="text-corHeader font-bold text-lg">Por que escolher ValART?</p>
                        <span className=" text-corHeader font-medium  mb-4 "> Escolher a Valart é optar por qualidade e inovação em serviços de gesso. Nossa equipe experiente oferece acabamentos impecáveis e designs personalizados para reformas residenciais e comerciais. Além de forro de gesso acartonado e drywall em São Bernardo do Campo e região, disponibilizamos pintura, instalação elétrica e isolamento térmico. Priorizamos a satisfação do cliente e utilizamos materiais sustentáveis. Transforme seu espaço com a Valart!</span>
                    </div>
                </div>
            </section>            
            <section className=" p-2 my-8 bg-bgContato bg-cover bg-no-repeat opacity-90" >
                <div className="flex flex-col items-center mx-3 my-5 gap-7">
                    <p className="text-corHeader font-bold text-lg">Entre em Contato Conosco</p>
                    <span className="text-corHeader font-medium text-center ">Temos certeza, que apreciará a qualidade dos nossos serviços. Estamos à sua disposição, para entender suas necessidades e lhe atender com rapidez e qualidade.</span>
                    <Link to={urlWhatsApp} className="p-2 bg-rose-700 rounded-md text-white font-bold hover:bg-rose-600 transition-colors " >Solicite um Orçamento</Link>
                </div>
            </section>
        </main>
    )
}