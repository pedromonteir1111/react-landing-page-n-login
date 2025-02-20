import paperPlane from "../assets/aviaodepapel.svg"

export default function ContactSection() {
    return (
        <>
            <div className="mx-10 sm:mx-15 md:mx-25 lg:mx-30 p-8">
                <h1 id="contato" className='text-5xl font-bold py-10 lg:px-20 scroll-mt-25'>Entre em contato</h1>
                <div className='flex flex-col lg:flex-row items-center px-10'>  
                    <div className='lg:px-30 text-xl flex-grow'>
                        <p className='text-2xl font-semibold text-center lg:text-left'>Levamos nosso artesanato até você! </p> 
                        <p className='text-lg lg:text-xl text-justify'> <br />Além de marcar presença em feiras de artesanato, também enviamos nossos produtos para todo o Brasil. Cada peça é feita com carinho e atenção aos detalhes, garantindo sempre qualidade para você.
                            <br /><br />
                            Entre em contato pelo WhatsApp para fazer seu pedido ou tirar dúvidas. Teremos o maior prazer em atendê-lo!
                        </p>
                    </div>
                    
                    <img className='w-400 lg:ml-20 object-contain' src={paperPlane} />
                </div>
            </div>
        </>
    )
}