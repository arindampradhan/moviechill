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

function MovieView({ backdrop_path, original_title, title, tagline, production_companies, production_countries, ...props}) {
    console.log(backdrop_path)
    return (
        <div className="">
        <MovieRowDiv className="MovieView" poster_path={backdrop_path}>
        <div className="container-fluid classy">
            <div className="container ">
            <div className="row">
                <div className="col-12 col-lg-7 padding-t-175 padding-b-30">
                    <div className="d-none d-md-block d-lg-block">
                        <h1 className="heading-text-overlay">{original_title}</h1>
                    </div>
                    <div className="review-text">
                        "{tagline}"
                        <br/>
                        ----{title}
                    </div>
                </div>
                    <div className="col-12 col-lg-5 padding-t-150">
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
