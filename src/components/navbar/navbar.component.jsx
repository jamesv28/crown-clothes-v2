import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom' 
import SvgImage from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.contexts'
import {signOutUser} from '../../utils/firebase/firebase.utils'

import './navbar.styles.scss'

const Navbar = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

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
                            <span className='nav-link' onClick={signOutHandler}>Sign Out</span>
                        ) : (
                             <Link className='nav-link' to='/auth'>Sign In</Link>
                        )

                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar