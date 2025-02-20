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
  { name: "Bolsas", img: bolsa, description: "Versáteis e espaçosas, ideais para o dia a dia" },
  { name: "Shoulder bags", img: shoulderBag, description: "Bolsinha compacta e estilosa." },
  { name: "Carteiras", img: carteira, description: "Organização para seus itens essenciais." },
  { name: "Clutchs", img: clutch, description: "Elegantes e compactas, perfeitas para qualquer ocasião" },
  { name: "Porta Óculos", img: portaOculos, description: "Proteção para seus óculos"},
  { name: "Moedeiras", img: moedeira, description: "Ideais para manter suas moedas à mão" },
  { name: "Necesseries", img: necesserie, description: "Práticas e espaçosas para organizar seus itens pessoais" },
  { name: "Estojos", img: estojo, description: "Perfeitos para lápis, maquiagens e pequenos acessórios" },
];

export default function ProductSection() {
    return (
        <div className='mx-10 sm:mx-15 md:mx-25 lg:mx-30 p-8'>
            <h1 id="produtos" className='text-5xl font-bold py-10 lg:px-20 scroll-mt-25'>Nossos produtos</h1>
            <div className='py-10 md:mx-10 lg:mx-30'>
            <CardGrid products={PRODUCTS}/>
            </div>
        </div>
    )
}