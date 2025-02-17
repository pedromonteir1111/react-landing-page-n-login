import { Product } from "../types/Product"

interface CardProps {
    product: Product
}

export default function Card({ product }: CardProps) {

    return (
        <>
        <div className="border rounded-2xl shadow-lg overflow-hidden bg-white">
            <img src={product.img} className="w-full h-48 object-cover"/>
            <div className="p-4 text-center flex-1 flex flex-col justify-between">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
            </div>
        </div>
        
        </>
    )
}