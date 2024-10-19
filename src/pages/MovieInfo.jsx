import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MovieInfo = ({ movie }) => {
    return (
        <div id="movieinfo__body">
            <main id="movieinfo__main">
                <div className="catalog__container">
                    <div className="row">

                        {/* Go back to search page. */}
                        <div className="movie__selected--top">
                            <Link to="/catalog" className='movieinfo__link'>
                                <FontAwesomeIcon icon={faArrowLeft} />Back
                            </Link>
                        </div>
                        
                        {/* Main block. */}
                        <div className="movieinfo__selected">

                            {/* Poster of the movie. */}
                            <figure className="movieinfo__selected--figure">
                                <img src={movie.Poster} alt="" className="movieinfo__selected--img" />
                            </figure>
                            
                            <div className="movieinfo__selected--description">
                                
                                {/* Movie title. */}
                                <h2 className="movieinfo__selected--title">
                                    {/* {book.title} */}Batman
                                </h2>
                                
                                {/* Movie description. */}
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Blah blah
                                    </p>
                                </div>

                                {/* Button that adds the movie to watchlist or remove it from. */}

                                <button className="btn">Add to Watchlist</button>
                                {/* {
                                    bookExistOnCart() ? (
                                        <Link to={`/`} className='book__link'>
                                            <button className="btn">Checkout</button>
                                        </Link>
                                    )
                                    : <button className="btn" onClick={() => addBookToCart(book)}>Add to cart</button>
                                } */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendation section. */}
                <div className="movieinfo__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended movieinfo
                            </h2>
                        </div>
                        <div className="movieinfo">
                            {/* {books
                                .filter(book => book.rating === 5 && +book.id !== +id)
                                .slice(0,4)
                                .map(book => <Book book={book} key={book.id} />)
                            } */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MovieInfo;