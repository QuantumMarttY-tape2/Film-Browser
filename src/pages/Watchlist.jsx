import React from "react";
import EmptyCart from "../assets/empty_cart.svg"
import { Link } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Watchlist = ({watchlist, removeItem}) => {
    return (
        <div id="catalog__body">
            <main id="catalog__main">
                <div className="catalog__container">
                    <div className="row">
                        <div className="movie__selected--top">

                            {/* Watchlist title. */}
                            <h2 className="cart__title">
                                <span className="blue">Your Watchlist</span>
                            </h2>
                        </div>

                        <div className="watchlist">

                            {/* Header. */}
                            <div className="watchlist__header">
                                <span className="watchlist__poster">Movie</span>
                                <span className="watchlist__type">Length</span>
                                <span className="watchlist__complete">Completion</span>
                            </div>

                            {/* Body. */}
                            <div className="watchlist__body">
                                {
                                    watchlist.map(movie =>{
                                        return (
                                            <div className="watchlist__item" key={movie.imdbID}>

                                                {/* Poster, title, and removal button. */}
                                                <div className="watchlist__poster">
                                                    <img src={movie.Poster} className="watchlist__poster--img"/>
                                                    
                                                    <div className="watchlist__poster--info">
                                                        <span className="watchlist__poster--title">
                                                            {movie.Title}
                                                        </span>
                                                        <button className="watchlist__poster--remove" onClick={() => removeItem(movie)}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                                {/* Movie length. */}
                                                <div className="watchlist__poster--info">
                                                    <span className="watchlist__poster--title">
                                                        {movie.Runtime}
                                                    </span>
                                                </div>

                                                {/* Play button and complete button. */}
                                                <div className="watchlist__buttons">
                                                    <button className="watchlist__poster--remove watch__button" onClick={() => removeItem(movie)}>
                                                        <FontAwesomeIcon icon={faCirclePlay} className="watch__icon" />
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* Only render this section if there are no movie in watchlist. */}
                            {watchlist.length === 0 && <div className="watchlist__empty">
                                <img src={EmptyCart} alt="" className="watchlist__empty--img" />
                                <h2>You do not have any movies in your <span className="blue">basket</span>.</h2>
                                <Link to="/catalog">
                                    <button className="btn">Browse in Wonderland</button>
                                </Link>
                            </div>}
                        </div>
                        
                        {/* Only render this total section if there are products in cart. */}
                        {watchlist.length > 0 && <div className="total">
                            <button className="btn btn__checkout no-cursor" onClick={() => alert(`Have not got around to doing this.`)}>
                                Watch from Start
                            </button>
                        </div>}
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Watchlist;