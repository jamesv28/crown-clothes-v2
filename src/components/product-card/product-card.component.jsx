import Button from '../button/button.component'

import './product-card.styles.scss'

const ProductCard = ({product}) => {
    const {id, name, imageUrl, price} = product
    return (
        <div className="product-card-container" key={id}>
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted'>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard