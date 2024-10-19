import React from 'react';
import WebLogo from "../assets/map-of-mathematics.jpeg"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className='footer__logo'>
                            <img src={WebLogo} className='footer__logo--img' alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/catalog" className="footer__link">Movies</Link>
                        <Link to="/watchlist" className="footer__link">Watchlist</Link>
                    </div>
                    <div className="footer__copyright">
                        &copy; <span className="blue">Wonderland 1600</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;