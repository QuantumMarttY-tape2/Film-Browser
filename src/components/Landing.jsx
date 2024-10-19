import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <section id="landing">
            <div className="header__container">
                <div className="header__description">
                    <h1>Movies in <span className='blue'>Wonderland</span>.</h1>
                    <h2>Movies are everywhere in <span className='blue'>Wonderland</span>, find them and watch them.</h2>
                    <Link to="/catalog">
                        <button className="btn">Find Movies in Rabbit Holes</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Landing;