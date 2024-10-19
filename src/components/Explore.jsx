import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>Go to your <span className="blue">Easter Egg</span> basket.</h2>
                <Link to="/watchlist">
                    <button className="btn">Check your findings</button>
                </Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;