import { Outlet, Link } from 'react-router-dom' 
import SvgImage from '../../assets/crown.svg'
import './navbar.styles.scss'

const Navbar = () => {
    return (
        <>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                  <img src={SvgImage} className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>Shop</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar