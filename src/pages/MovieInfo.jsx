import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import Movies from "../components/ui/Movies";
import axios from "axios";

const MovieInfo = ({addToWatchlist, watchlist}) => {
    const [movie, setMovie] = useState([]);

    // Get id of the current page.
    const { id } = useParams();

    // Import the movie information from the database.
    async function fetchMoviesById() {
        const dataset = (
            await axios.get(`http://www.omdbapi.com/?apikey=5a06fc1&i=${id}`)
        );

        setMovie(dataset.data);
        // console.log(dataset)
    }

    useEffect(() => {
        fetchMoviesById()
    }, [id])

    // Function that add movie to watchlist.
    function addMovieToWatchlist(movie) {
        addToWatchlist(movie)
    }

    function movieExistOnCart() {
        return watchlist.find(mov => mov.imdbID === id);
    }

    // console.log(movie)

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
                                   {movie.Title}
                                </h2>
                                
                                {/* Movie description. */}
                                <div className="movieinfo__summary">
                                    <h3 className="movieinfo__summary--title">
                                        <span className="blue">Description</span>
                                    </h3>
                                    <p className="movieinfo__summary--para">
                                        {movie.Plot}
                                    </p>
                                    <p className="movieinfo__summary--para">
                                        <span className="blue">IMDB Rating</span>: {movie.imdbRating}
                                    </p>
                                    <p className="movieinfo__summary--para">
                                        <span className="blue">Type</span>: {movie.Type}
                                    </p>
                                    <p className="movieinfo__summary--para">
                                        <span className="blue">Runtime</span>: {movie.Runtime}
                                    </p>
                                </div>

                                {/* Button that adds the movie to watchlist or remove it from. */}
                                {
                                    movieExistOnCart() ? (
                                        <Link to={`/watchlist`} className='movieinfo__link'>
                                            <button className="btn">Proceed to Watch</button>
                                        </Link>
                                    )
                                    : <button className="btn" onClick={() => addMovieToWatchlist(movie)}>Add to Watchlist</button>
                                }
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