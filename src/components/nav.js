import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav className='navContainer'>
            <div className='headerLeftDiv'>
                <h2>Ferrari</h2>
                <img className="ferrariLogo" alt='logo' src='https://www.carlogos.org/car-logos/ferrari-logo-750x1100.png'></img>
            </div>
            <div className='linksDiv'>
                <Link className='navLink'to="/">Home</Link>
                <Link className='navLink' to="shop">Shop</Link>
                <Link className='navLink' to="about">About</Link>
                <button className='cartButton'><img src='https://img.icons8.com/dotty/45/000000/shopping-cart.png' alt='cart' className='cartLogo'></img><span className='cartCount'>0</span></button>
            </div>
        </nav>
    )
}

export default Nav;