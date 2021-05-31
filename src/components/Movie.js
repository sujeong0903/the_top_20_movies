import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import {Link} from "react-router-dom";


function Movie({index,id,year,title,poster,summary, genres, rating}){
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                index,
                year,
                title,
                poster,
                summary,
                genres,
                rating,
                id,
            }
        }}>
            <div className="movie"> 
                <div className="movie__poster">
                    <img src={poster} alt={title} title={title}/>
                </div>
                <em className="movie__index">{index+1}</em>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <span className="movie__year">{year}</span>
                    <div className="genre_area">
                    {genres.map((genre, index) => {
                        return <span key={index} className="info">{genre}</span>
                    })}
                    </div>
                    <p className="movie__summary">{summary}</p>
                    <span className="movie__rating">⭐️ {rating}</span>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {

    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number,
};

export default Movie;