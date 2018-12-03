import React from 'react';
import './style.scss';
import PropTypes from 'prop-types'
import getImage from '../../utils/images';




function Story({movie}) {
    if(!movie) return null
    return (
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-6 ">
                <div className="Story">
                    <h1 className="heading-text text-warning">Story</h1>
                    <h5 className="heading-text text-warning">{movie.tagline}</h5>
                    <p className="text-white">{movie.overview}</p>
                </div>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-4">
                <img src={getImage.backdrop(movie.poster_path)} className="img-fluid" alt={movie.original_title}></img>
            </div>
            </div>
        </div>
    )
}

Story.PropTypes= {
    movie: PropTypes.object.isRequired
}

export default Story;
