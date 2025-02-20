import oldImg from "../assets/images/WhatsApp Image 2025-02-18 at 20.01.17.jpeg"

export default function AboutSection() {
    return (
        <div className='my-10 lg:mx-30 p-10 lg:rounded-4xl bg-yellow-300 shadow-lg'>
            <h1 id="historia" className='text-5xl font-bold py-10 lg:px-20 scroll-mt-25'>Nossa história</h1>

            <div className='flex flex-col lg:flex-row items-center p-10'>
                <img className='w-150 lg:ml-20 object-contain rounded-2xl shadow-md' src={oldImg} />
                
                <div className='py-10 lg:px-30 text-xl flex-grow'>
                    <p className='text-2xl font-semibold text-center lg:text-left'>Duas irmãs gêmeas, pernambucanas, com os nomes "maria" e "melo" iguais... </p> 
                    <p className='text-lg lg:text-xl text-justify'> <br />...e também iguais na cara, gosto, cabelo, roupa e o amor por artesanato. Nem sempre foi tecido, começamos em 2002 com pintura em madeira. Desenvolvemos um estilo próprio com cores vibrantes e e contorno aquarelado. Buscando inovar, em 2007 introduzimos o tecido em nossas peças, e é nosso foco desde de 2012. Até agora, foram 16 participações na Fenearte, a maior feira de artesanato da América Latina!</p>
                </div>
            </div>
            
        </div>
    )
}