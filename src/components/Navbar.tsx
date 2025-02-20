import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import blackLogo from "../assets/images/Carimbo MM arabesco 8x7,5-1.png"
import whiteLogo from "../assets/images/logo-branco.png"

export default function Navbar(){

    const { user, logout } = useAuth();
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login");
    };

    const [isMenuExpanded, setIsMenuExpanded] = useState(false)

    function toggleMenu() {
        setIsMenuExpanded(!isMenuExpanded)
    }

    const [hasScrolled, setHasScrolled] = useState(false)
    const [sectionIndex, setSectionIndex] = useState(0)

    function changeNav() {

        // parametros pra definir onde cada "area" da landing page comeca
        // isso permite manter o sublinhado quando a tela estiver em cima da area correspondente
        const height1 = 500
        const height2 = 1200
        const height3 = 2000

        setHasScrolled(window.scrollY > 90 ? true : false) // mudar a navbar de transparente para solido

        if(window.scrollY < height1) {
            setSectionIndex(0)
        } else if(window.scrollY >= height1 && window.scrollY < height2) {
            setSectionIndex(1)
        } else if(window.scrollY >= height2 && window.scrollY < height3) {
            setSectionIndex(2)
        } else {
            setSectionIndex(3)
        }
    }

    window.addEventListener('scroll', changeNav)

    return (  
        <nav className={`fixed top-0 left-0 w-full z-50 py-2 px-8 transition-all duration-300 ${hasScrolled || isMenuExpanded ? "bg-yellow-300 shadow-md" : "text-white"}`}>
            <div className="flex justify-between items-center">
                <div className="flex space-x-20 items-center"> 
                    <img src={hasScrolled || isMenuExpanded ? blackLogo : whiteLogo} alt="logo" className="w-20"/>
        
                    <ul className="hidden md:flex space-x-10 text-2xl font-semibold">
                        <li className={`relative cursor-pointer after:absolute after:h-[5px] after:rounded-xl after:bg-linear-to-r after:from-cyan-400 after:to-pink-500 
                        after:w-0 after:left-0 after:bottom-[-12px] after:transition-all after:duration-300 
                        ${ sectionIndex == 1 ? "after:w-full" : "hover:after:w-full"}`}>
                            <a href="#produtos">Nossos produtos</a>
                        </li>
                        <li className={`relative cursor-pointer after:absolute after:h-[5px] after:rounded-xl after:bg-linear-to-r after:from-cyan-400 after:to-pink-500 
                        after:w-0 after:left-0 after:bottom-[-12px] after:transition-all after:duration-300 
                        ${ sectionIndex == 2 ? "after:w-full" : "hover:after:w-full"}`}>
                            <a href="#historia">Nossa história</a>
                        </li>
                        <li className={`relative cursor-pointer after:absolute after:h-[5px] after:rounded-xl after:bg-linear-to-r after:from-cyan-400 after:to-pink-500 
                        after:w-0 after:left-0 after:bottom-[-12px] after:transition-all after:duration-300 
                        ${ sectionIndex == 3 ? "after:w-full" : "hover:after:w-full"}`}>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
                
                <div className="flex items-center">
                    
                    {user ? (
                        <div className="flex items-center space-x-4 text-xl font-semibold px-3">
                            <h1>Olá, {user.name}</h1>
                            <button onClick={logout} className="cursor-pointer underline text-lg font-normal"> sair</button>
                        </div>
                        ) : 
                        <button className={`hidden md:block cursor-pointer text-white font-semibold px-13 border-2 py-2 rounded-xl transition hover:bg-gradient-to-tr hover:from-cyan-400 hover:to-pink-500 
                            ${hasScrolled || isMenuExpanded ? "bg-zinc-700 border-zinc-700 shadow-lg hover:border-white" : "text-white"}`} onClick={goToLogin}>
                            Login
                        </button>}
                    
                    <button onClick={toggleMenu} className="md:hidden">
                        <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="10" fill={`${hasScrolled || isMenuExpanded ? "black" : "white"}`}></rect>
                            <rect y="30" width="100" height="10" fill={`${hasScrolled || isMenuExpanded ? "black" : "white"}`}></rect>
                            <rect y="60" width="100" height="10" fill={`${hasScrolled || isMenuExpanded ? "black" : "white"}`}></rect>
                        </svg>
                    </button>
                </div>                          
            </div> 

            {isMenuExpanded ? (
                <ul className="flex flex-col divide-y divide-gray-800 text-2xl transition-all duration-300 ease-in-out">
                    <li className="p-3"><a href="#produtos">Nossos produtos</a></li>
                    <li className="p-3"><a href="#historia">Nossa história</a></li>
                    <li className="p-3"><a href="#contato">Contato</a></li>
                    <button className="p-3 cursor-pointer text-white font-semibold px-13 border-2 py-2 rounded-xl transition bg-zinc-700 border-zinc-700 shadow-md" onClick={goToLogin}>Login</button>
                </ul> 
            ): null}         
        </nav>       
    )
}