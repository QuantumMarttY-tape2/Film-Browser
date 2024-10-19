import React, { useEffect, useState } from "react";
import axios from "axios";
import Movieformat from "./Movieformat";

// Fetch dataset from online database.

const Movies = ({ nameKey, yearKey }) => {
    const [movie, setMovie] = useState([])

    async function fetchMovies() {
        const dataset = (
            await axios.get(`http://www.omdbapi.com/?apikey=5a06fc1&s=${nameKey}&y=${yearKey}`)
        );
        setMovie(dataset.data.Search);
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    console.log(movie)

    return (
        <>
            {movie
            .slice(0,4)
            .map(mov => (<Movieformat movie={mov} key={mov.imdbID}/>) )}
        </>
    );
}

export default Movies;