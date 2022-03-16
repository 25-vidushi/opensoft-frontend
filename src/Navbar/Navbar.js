import React from 'react';
import cartIcon from '../icons/cart-red.png';
import logo from '../icons/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="Navbar">
            {/* <Link to="/"><img src={logo} className="logo-img" alt="Logo" /></Link> */}
            <div className="nav-links">
                <input type="search" name="search" id="search" />
                <div className='nav-itm'><Link to="/" style={{textDecoration: "none", color: "#292942"}}><div>HOME</div></Link></div>
                <div className='nav-itm'><Link to="/Signin" style={{textDecoration: "none", color: "#292942"}}><div>SIGN IN</div></Link></div>
                <div className='nav-itm'><Link to="/Signup" style={{textDecoration: "none", color: "#292942"}}><div>SIGN UP</div></Link></div>
                <div><Link to="/Cart"><img src={cartIcon} className="cart-img" alt="Cart" /></Link></div>
            </div>
        </div>
     );
}
 
export default Navbar;