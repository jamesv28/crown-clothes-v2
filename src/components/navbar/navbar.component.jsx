import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import SvgImage from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  NavbarContaienr,
  LogoContainer,
  NavLinksContaienr,
  NavLink,
} from "./navbar.styles";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavbarContaienr>
        <LogoContainer to="/" className="logo-container">
          <img src={SvgImage} className="logo" />
        </LogoContainer>
        <NavLinksContaienr>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContaienr>
        {isCartOpen && <CartDropdown />}
      </NavbarContaienr>
      <Outlet />
    </>
  );
};

export default Navbar;
