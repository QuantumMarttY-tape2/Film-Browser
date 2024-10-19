import React from "react";
import { Link } from "react-router-dom";
import WebLogo from "../assets/map-of-mathematics.jpeg"

const Nav = () => {
    return(
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={WebLogo} alt="" className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className='nav__link'>
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/catalog" className='nav__link'>
                            Movies
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/watchlist" className='nav__link'>
                            Watchlist
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;