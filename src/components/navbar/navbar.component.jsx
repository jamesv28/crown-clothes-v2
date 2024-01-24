import { createContext, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom' 
import SvgImage from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.contexts'
import {CartContext} from '../../contexts/cart.context'
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './navbar.styles.scss'

const Navbar = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = createContext(CartContext)
    return (
        <>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                  <img src={SvgImage} className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>
                                Sign Out
                            </span>
                        ) : (
                             <Link className='nav-link' to='/auth'>
                                Sign In
                            </Link>
                        )

                    }
                    <CartIcon />
                </div>
                {isCartOpen ? <CartDropdown /> : null}
            </div>
            <Outlet />
        </>
    )
}

export default Navbar