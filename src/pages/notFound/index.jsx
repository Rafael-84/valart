import { Link } from "react-router-dom";
import logoHeader from '../../assets/header/logo-valart-header.png';

export function NotFound() {

    return (
        <main>
            <section className="flex items-center justify-center bg-bgMain bg-cover bg-no-repeat bg-opacity-75 w-full h-screen">
                <header>
                    <nav className=" w-full flex justify-between items-center flex-col p-8  ">
                        <div> <Link to="/"><img src={logoHeader} width={250} height={252} title="Logo valART" alt="Logo da empresa valART" className=" w-24 h-auto md:w-44 md:h-44 md:relative md:top-[50px] z-50 " /></Link></div>
                        <div className="flex items-center justify-center flex-col mt-12 ">
                            <h1 className="text-4xl text-rose-700 font-bold">Error</h1>
                            <span className="text-4xl text-indigo-700 font-bold">404!</span>
                        </div>
                        <h2 className="mt-5 mb-11 text-2xl text-indigo-800 font-medium">Essa página não existe</h2>
                        <p className="mb-5 text-xl text-indigo-800 italic ">encontramos esses links!</p>
                        <div className="flex  items-center justify-center gap-4 p-1">
                            <Link title="Home" to="/" className="text-sm text-indigo-700 text-xl font-bold hover:text-rose-600 transition-colors ">Home</Link>
                            <Link title="Serviços" to="/servicos" className="text-sm text-indigo-700 text-xl font-bold hover:text-rose-600 transition-colors  ">Serviços</Link>

                        </div>
                    </nav>
                </header>
            </section>
        </main>
    )
}
