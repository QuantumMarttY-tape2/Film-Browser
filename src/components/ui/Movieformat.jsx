import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Movieformat = ({ movie }) => {
    const [img, setImg] = useState();

    const mountedRef = useRef(true);
    
    // useEffect(() => {
    //     const image = new Image();
    //     image.src = movie.Poster;
    //     image.onload = () => {
    //         setTimeout(() => {
    //             if (mountedRef.current) {
    //                 setImg(image);
    //             }
    //         }, 300)
    //     };
    //     return () => {
    //         // When the component unmounts.
    //         mountedRef.current = false;
    //     }
    // })

    return (
        <div className="movie">
            <figure className="movie__img--wrapper">
                <img
                    src={movie.Poster}
                    alt="Poster not Avaliable"
                    className="movie__img"
                />
            </figure>
            <div className="movie__title">
                <Link to={`/catalog/${movie.imdbID}`} className='movie__title--link'>
                    {movie.Title}
                </Link>
            </div>
            {/* {
                img ? (<>
                    <Link to="/">
                        <figure className="movie__img--wrapper">
                            <img
                                src={movie.Poster}
                                alt=""
                                className="movie__img"
                            />
                        </figure>
                    </Link>
                    <div className="movie__title">
                        <Link to="/" className='movie__title--link'>
                            {movie.Title}
                        </Link>
                    </div>
                </>) : (<>
                    <div className="movie__img--skeleton"></div>
                <div className="skeleton movie__title--skeleton"></div>
                <div className="skeleton movie__rating--skeleton"></div>
                <div className="skeleton movie__price--skeleton"></div>
                </>) */}
            {/* } */}
        </div>      
    );
}

export default Movieformat;