import ProductCard from "../../components/product-card/product-card.component"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/shop.context"

import './shop.styles.scss'

const Shop = () => {
const {products} = useContext(ProductsContext)
return (
    <div className="product-container">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
)
}

export default Shop