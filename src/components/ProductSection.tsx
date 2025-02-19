import { Product } from "../types/Product";
import CardGrid from "./CardGrid";
import bolsa from "../assets/images/WhatsApp Image 2025-02-18 at 19.48.32.jpeg"
import shoulderBag from "../assets/images/WhatsApp Image 2025-02-18 at 19.49.15.jpeg"
import carteira from "../assets/images/WhatsApp Image 2025-02-18 at 19.49.50.jpeg"
import clutch from "../assets/images/WhatsApp Image 2025-02-18 at 19.51.13.jpeg"
import portaOculos from "../assets/images/WhatsApp Image 2025-02-18 at 19.51.44.jpeg"
import moedeira from "../assets/images/WhatsApp Image 2025-02-18 at 19.53.25.jpeg"
import necesserie from "../assets/images/WhatsApp Image 2025-02-18 at 19.53.59.jpeg"
import estojo from "../assets/images/WhatsApp Image 2025-02-18 at 19.54.52.jpeg"

const PRODUCTS: Product[] = [
  { name: "Bolsas", img: bolsa, description: "banana banana banana banana banana banana banana banana banana" },
  { name: "Shoulder bags", img: shoulderBag, description: "Necessaire compacta e estilosa." },
  { name: "Carteiras", img: carteira, description: "descrição" },
  { name: "Clutchs", img: clutch, description: "descrição" },
  { name: "Porta Óculos", img: portaOculos, description: "descrição" },
  { name: "Moedeiras", img: moedeira, description: "descrição" },
  { name: "Necesseries", img: necesserie, description: "descrição" },
  { name: "Estojos", img: estojo, description: "descrição" },
];

export default function ProductSection() {
    return (
        <div className='mx-10 sm:mx-15 md:mx-25 lg:mx-30 p-8'>
            <h1 id="produtos" className='text-5xl font-extrabold py-10 lg:px-20 scroll-mt-25'>Nossos produtos</h1>
            <div className='py-10 md:mx-10 lg:mx-30'>
            <CardGrid products={PRODUCTS}/>
            </div>
        </div>
    )
}