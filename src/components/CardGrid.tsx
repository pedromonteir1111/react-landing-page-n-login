import { Product } from "../types/Product"
import imgPlaceholder from "./assets/landscape-placeholder-svgrepo-com.svg"
import Card from "./Card"

interface CardGridProps {
    products: Product[]
}

export default function CardGrid({ products }: CardGridProps) {

    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
                <Card key={index} product={product} />
            ))}
        </div>
        </>
    )
}