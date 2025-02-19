import instaIcon from "../assets/images/icons8-instagram-48.png"
import whatsIcon from "../assets/images/icons8-whatsapp-48.png"


export default function Footer() {
    return (
        <footer className="relative bg-yellow-300 py-20 px-100
        after:absolute after:h-[2px] after:bg-gray-400 after:w-[40%] after:left-1/2 after:-translate-x-1/2 after:bottom-[40px]">
            <div className="flex items-center justify-evenly">
                <a href="https://www.instagram.com/mariameloatelie2/" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5581999346970" target="_blank" rel="noopener noreferrer">
                    <img src={whatsIcon} alt="" />
                </a>
            </div>  
        </footer>
    )
}