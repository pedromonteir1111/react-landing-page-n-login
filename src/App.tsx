import { Product } from './types/Product'
import imgPlaceholder from "./assets/landscape-placeholder-svgrepo-com.svg"
import logo from './assets/images/logo-branco.png'
import bolsa1 from './assets/images/mmbolsa1.png'
import bolsa2 from './assets/images/mmbolsa2.png'
import bolsa3 from './assets/images/mmbolsa3.png'
import bolsa4 from './assets/images/mmbolsa4.png'
import bolsa5 from './assets/images/mmbolsa5.png'
import Carousel from './components/Carousel'
import CardGrid from './components/CardGrid'
import Navbar from './components/Navbar'

const SLIDER_IMAGES = [bolsa1, bolsa2, bolsa3, bolsa4, bolsa5]

const PRODUCTS: Product[] = [
  { name: "Carteirinha", img: imgPlaceholder, description: "banana banana banana banana banana banana banana banana banana" },
  { name: "Necessaire", img: imgPlaceholder, description: "Necessaire compacta e estilosa." },
  { name: "Porta-moedas", img: imgPlaceholder, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat non ex a lobortis. Praesent placerat scelerisque risus gravida tempor. Fusce commodo feugiat sem, quis imperdiet nisi aliquet vel." },
  { name: "Porta-moedas", img: imgPlaceholder, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat non ex a lobortis. Praesent placerat scelerisque risus gravida tempor. Fusce commodo feugiat sem, quis imperdiet nisi aliquet vel." },
  { name: "Porta-moedas", img: imgPlaceholder, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat non ex a lobortis. Praesent placerat scelerisque risus gravida tempor. Fusce commodo feugiat sem, quis imperdiet nisi aliquet vel." },
  { name: "Porta-moedas", img: imgPlaceholder, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat non ex a lobortis. Praesent placerat scelerisque risus gravida tempor. Fusce commodo feugiat sem, quis imperdiet nisi aliquet vel." },
  { name: "Porta-moedas", img: imgPlaceholder, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat non ex a lobortis. Praesent placerat scelerisque risus gravida tempor. Fusce commodo feugiat sem, quis imperdiet nisi aliquet vel." },
  { name: "Porta-moedas", img: imgPlaceholder, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat non ex a lobortis. Praesent placerat scelerisque risus gravida tempor. Fusce commodo feugiat sem, quis imperdiet nisi aliquet vel." },
];

function App() {
  return (
    <>
      <Navbar/>

      {/*parte de cima (logo e carousel)*/}
      <div className="relative top-0 left-0 aspect-21/9"> 
        <Carousel images={SLIDER_IMAGES}/>
        <div className="absolute inset-0 bg-black/40"></div>
        <img src={logo} className='absolute object-scale-down top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20vw] min-w-[200px] max-w-[400px]'/>
      </div>

      {/*nossos produtos*/}
      <div className='mx-10 sm:mx-15 md:mx-25 lg:mx-30 p-8'>
        <h1 id="produtos" className='text-5xl font-extrabold py-10 lg:px-20 scroll-mt-25'>Nossos produtos</h1>
        <div className='py-10 md:mx-10 lg:mx-30'>
          <CardGrid products={PRODUCTS}/>
        </div>
      </div>

      {/*Sobre nos*/}
      <div className='my-10 lg:mx-30 p-10 lg:rounded-4xl bg-yellow-300 '>
        <h1 id="historia" className='text-5xl font-extrabold py-10 lg:px-20 scroll-mt-25'>Nossa história</h1>

        <div className='flex flex-col lg:flex-row items-center p-10'>
          <img className='w-100 lg:ml-20 object-contain' src={imgPlaceholder} />
          <div className='py-10 lg:px-30 text-xl flex-grow'>
            <p className='text-2xl font-bold text-center lg:text-left'>Duas irmãs gêmeas, pernambucanas, com os nomes "maria" e "melo" iguais... </p> 
            <p className='text-lg lg:text-xl text-justify'> <br />...e também iguais na cara, gosto, cabelo, roupa e o amor por artesanato. Nem sempre foi tecido, começamos em 2002 com pintura em madeira. Desenvolvemos um estilo próprio com cores vibrantes e e contorno aquarelado. Buscando inovar, em 2007 introduzimos o tecido em nossas peças, e é nosso foco desde de 2012. Até agora, foram 16 participações na Fenearte, a maior feira de artesanato da América Latina!</p>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
