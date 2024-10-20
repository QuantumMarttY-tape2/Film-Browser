import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movieformat from "../components/ui/Movieformat";
import blackhole from "../assets/blackhole.jpeg"

const Catalog = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState();
    const [movieName, setMovieName] = useState([]);
    const [searchKey, setSearchKey] = useState([]);

    // The search function that gives particular actions "search" properties.
    function onSearch() {
        fetchMovies(movieName);
    }

    // Fetch movies from database. Put a loading state while the webpage is pulling results.
    async function fetchMovies(nameKey) {
        setLoading(true);
        const searchResult = await axios.get(`http://www.omdbapi.com/?apikey=5a06fc1&s=${nameKey}`)

        // If there are result from search, process search result.
        if (searchResult.Response !== "False") {
            setFilms(searchResult.data.Search);
        }
        // If there are not, load a image to suggest no result.
        else {
            setFilms(false);
        }
        setLoading(false);
    }

    // Movie filter.
    function filterMovies(filter) {
        if (filter === "MOST_RECENT") {
            setFilms(
            films.slice().sort((a, b) => 
                // The "||0" part is to make sure that the "Year" element exists in "films".
                (+a.Year.slice(0,4) || 0) - (+b.Year.slice(0,4) || 0)))
        }
        else if (filter === "OLDEST") {
            setFilms(
            films.slice().sort((b, a) => 
                (+b.Year.slice(0,4) || 0) - (+a.Year.slice(0,4) || 0)))
        }
    }

    // Show effects.
    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <>
            <div className="catalog__body">
                <main id="catalog__main">
                    <section>
                        <div className="catalog__container">
                            
                            {/* Search bar. Stays hidden unless manual search yields results. */}
                            <div className="catalog__row">
                                {/* Input: key word of the movie. Press the search icon or press Enter key to proceed. */}
                                <input
                                    className="catalog__search-bar"
                                    type="text"
                                    placeholder="Search Movie..."
                                    value={movieName}
                                    onChange={(event) => {setMovieName(event.target.value); setSearchKey(`${event.target.value}`)}}
                                    onKeyPress={(event) => {event.key === 'Enter' && onSearch()}}
                                />
                                <button className="catalog__btn" onClick={() => onSearch()}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>

                            {/* Sorter. Stays hidden unless manual search yields results. */}
                            {
                                !!films &&
                                <div className="row">
                                    <div className="catalog__header">
                                        <div className='catalog__search'>
                                            <p>Search result for: {searchKey}</p>
                                        </div>
                                        <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)}>
                                            <option value="DEFAULT" disabled>Sort</option>
                                            <option value="MOST_RECENT">Newest</option>
                                            <option value="OLDEST">Oldest</option>
                                        </select>
                                    </div>
                                </div>
                            }
                            

                            {/* Loading screen then show search results. */}
                            <div className="movies">
                                {
                                    loading
                                    ? (
                                        new Array(10).fill(0).map((_, index) => (
                                        <div className="post" key={index}>
                                            <div className="post__title">
                                                <div className="post__title--skeleton"></div>
                                            </div>
                                            <div className="post__body">
                                                <p className="post__body--skeleton"></p>
                                            </div>
                                        </div>)))
                                    : ( ((!films) && (
                                        <div className="nothing__container">
                                            <img src={blackhole} alt="" />
                                            <h2>There is nothing here, except nothingness.</h2>
                                        </div>
                                        )) || (films.map(mov => (<Movieformat movie={mov} key={mov.imdbID}/>)))
                                    )
                                }
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}





export default Catalog;