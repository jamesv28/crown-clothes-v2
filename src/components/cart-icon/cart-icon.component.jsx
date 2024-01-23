import SvgImage from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
    return (
        <div className="cart-icon-container">
            <img src={SvgImage} alt='' className='shopping-icon'/>
            <span className='item-count'>10</span>
        </div>
    )
}

export default CartIcon