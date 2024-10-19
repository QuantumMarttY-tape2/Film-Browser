import React, { useEffect, useState } from "react";
import axios from "axios";
import Movieformat from "./Movieformat";

// Fetch dataset from online database.

const Movies = ({ nameKey, yearKey, movieId }) => {
    const [movie, setMovie] = useState([]);

    // If the movie ID is present, we search using movie ID.
    async function fetchMoviesById() {
        const dataset = (
            await axios.get(`http://www.omdbapi.com/?apikey=5a06fc1&i=${movieId}`)
        );

        setMovie(dataset.data.Search);
    }
        
    // Otherwise, search movie by its title.
    async function fetchMoviesByName() {
        const dataset = (
            await axios.get(`http://www.omdbapi.com/?apikey=5a06fc1&s=${nameKey}&y=${yearKey}`)
        );
        
        setMovie(dataset.data.Search);
    }

    // console.log(!!movieId)

    useEffect(() => {
        if (!!movieId) {
            fetchMoviesById()
        }
        else {
            fetchMoviesByName()
        }
    }, [])

    // console.log(movie)

    if (movie.length > 4) {
        return (
            <>
                {movie
                .slice(0,4)
                .map(mov => (<Movieformat movie={mov} key={mov.imdbID}/>) )}
            </>
        );
    }
    else {
        return (
            <>
                {movie
                .map(mov => (<Movieformat movie={mov} key={mov.imdbID}/>) )}
            </>
        );
    }
}

export default Movies;