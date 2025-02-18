import { useEffect, useState } from "react"

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const [index, setIndex] = useState(0);

    function nextImage() {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage()
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {images.map((image, i) => (
                <img key={i} src={image}
                    className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                        i === index ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
        </div>
    );
}