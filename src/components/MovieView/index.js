import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import example from './example.json';
import getImage from '../../utils/images';
import { Label} from '../../components/UI'

const MovieRowDiv = styled.div`
    background:  ${props => `url(${getImage.poster(props.poster_path)})`};;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
`


// {
//     "adult": false,
//     "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
//     "belongs_to_collection": null,
//     "budget": 116000000,
//     "genres": [
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         }
//     ],
//     "homepage": "http://www.venom.movie/site/",
//     "id": 335983,
//     "imdb_id": "tt1270797",
//     "original_language": "en",
//     "original_title": "Venom",
//     "overview": "Eddie Brock is a reporter—investigating people who want to go unnoticed. But after he makes a terrible discovery at the Life Foundation, he begins to transform into ‘Venom’.  The Foundation has discovered creatures called symbiotes, and believes they’re the key to the next step in human evolution. Unwittingly bonded with one, Eddie discovers he has incredible new abilities—and a voice in his head that’s telling him to embrace the darkness.",
//     "popularity": 503.845,
//     "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
//     "production_companies": [
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2018-10-03",
//     "revenue": 508400000,
//     "runtime": 112,
//     "spoken_languages": [
//         {
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "The world has enough Superheroes.",
//     "title": "Venom",
//     "video": false,
//     "vote_average": 6.5,
//     "vote_count": 2654
// }
function MovieView({ backdrop_path, original_title, title, tagline, production_companies, production_countries, ...props}) {
    console.log(backdrop_path)
    return (
        <div className="">
        <MovieRowDiv className="MovieView" poster_path={backdrop_path}>
        <div className="container-fluid classy">
            <div className="container ">
            <div className="row">
                <div className="col-12 col-md-7 padding-t-175 padding-b-30">
                    <h1 className="heading-text-overlay">{original_title}</h1>
                    <div className="review-text">
                        "{tagline}"
                        <br/>
                        ----{title}
                    </div>
                </div>
                    <div className="col-md-5 padding-t-150">
                        <ul className="text-white font-weight-bold" style={{listStyleType: 'none'}}>
                        <li>IMDB: <a  href={`https://www.imdb.com/title/${props.imdb}`}>https://www.imdb.com/title/{props.imdb}</a></li>
                        <li>Runtime: <span className="font-weight-normal">{props.runtime} mins</span></li>
                        <li>Release Date: <span className="font-weight-normal">{props.release_date}</span></li>
                        <li>Homepage: <a href={props.homepage}>{props.homepage}</a></li>
                        <li>Budget: $<span className="font-weight-normal">{props.budget}</span></li>
                        <li>Revenue: $<span className="font-weight-normal">{props.revenue}</span></li>
                        <li>Production Companies: &nbsp;
                            {production_companies && production_companies.length ? 
                                production_companies.map((item) => (<span className="font-weight-normal">{item.name}, </span>)): 
                                null
                            }</li>
                    <li>Production Countries: &nbsp;
            {production_countries && production_countries.length ?
                                            production_countries.map((item) => (<span className="font-weight-normal">{item.name}, </span>)) :
                            null
                        }</li>                            
                    </ul>
                </div>
            </div>
            </div>
                </div>
        </MovieRowDiv>
        </div>
    )
}

export default MovieView;
