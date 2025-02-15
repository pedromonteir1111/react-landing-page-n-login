import { useState } from "react"

type CarouselProps = {
    images:string[]
}

//TODO: the actual slider

export default function Carousel({images}:CarouselProps) {
    
    const [index, setCount] = useState(0)

    return (
        <>
        <div>
            <img src={images[index]}/>
        </div>
        </>
    )
}