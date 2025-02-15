import { useState } from 'react'
import logo from './assets/images/logo-branco.png'
import bolsa1 from './assets/images/mmbolsa1.png'
import bolsa2 from './assets/images/mmbolsa2.png'
import bolsa3 from './assets/images/mmbolsa3.png'
import bolsa4 from './assets/images/mmbolsa4.png'
import bolsa5 from './assets/images/mmbolsa5.png'
import Carousel from './components/Carousel'

const IMAGES = [bolsa1, bolsa2, bolsa3, bolsa4, bolsa5]

function App() {
  return (
    <>
      <div className="relative top-0 left-0 aspect-21/9"> 
        <Carousel images={IMAGES}/>
        <div className="absolute inset-0 bg-black/40"></div>
        <img src={logo} className='absolute object-scale-down top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20vw] min-w-[200px] max-w-[400px]'/>
      </div>
    </>
  )
}

export default App
