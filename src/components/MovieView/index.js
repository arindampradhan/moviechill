import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getImage from '../../utils/images';
import {formatNumber} from '../../utils/formatters'

const MovieRowDiv = styled.div`
    background:  ${props => `url(${props.poster_path ? getImage.poster(props.poster_path) : getImage.random()})`};;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    transition-timing-function: ease;
`

function MovieView({ backdrop_path, original_title, title, tagline, production_companies, production_countries, ...props}) {
    return (
        <>
        <MovieRowDiv className="MovieView" poster_path={backdrop_path}>
        <div className="container-fluid classy">
            <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7 padding-t-175 padding-b-30">
                    <div className="d-none d-md-block d-lg-block">
                        <h1 className="heading-text-overlay">{original_title || title || 'N/A'}</h1>
                    </div>
                    <div className="review-text">
                        {tagline ? `"${tagline}"` : null}
                        <br/>
                        {title? (
                            <span>
                                &nbsp;--- {title}
                            </span>                            
                        ) : null}
                    </div>
                </div>
                <div className="col-12 col-lg-5 padding-t-150">
                    <ul className="text-white font-weight-bold" style={{listStyleType: 'none'}}>
                        <li>IMDB: <a  href={`https://www.imdb.com/title/${props.imdb}`}>https://www.imdb.com/title/{props.imdb}</a></li>
                        <li>Runtime: <span className="font-weight-normal">{props.runtime} mins</span></li>
                        <li>Release Date: <span className="font-weight-normal">{props.release_date}</span></li>
                        <li>Homepage: <a href={props.homepage}>{props.homepage}</a></li>
                        <li>Budget:  {props.budget ?'$':null }<span className="font-weight-normal">{formatNumber(props.budget)}</span></li>
                        <li>Revenue: {props.revenue ?'$':null }<span className="font-weight-normal">{formatNumber(props.revenue)}</span></li>
                        <li>Production Companies: &nbsp;
                            {production_companies && production_companies.length ? 
                                production_companies.map((item) => (<span className="font-weight-normal">{item.name}, </span>)): 
                                null
                            }
                        </li>
                        <li>Production Countries: &nbsp;
                            {production_countries && production_countries.length ?
                                production_countries.map((item) => (<span className="font-weight-normal">{item.name}, </span>)) :
                            null}
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </MovieRowDiv>
        </>
    )
}

MovieView.propTypes = {
    backdrop_path: PropTypes.string, 
    original_title: PropTypes.string, 
    title: PropTypes.string, 
    tagline: PropTypes.string, 
    production_companies: PropTypes.array, 
    production_countries: PropTypes.array,
    imdb: PropTypes.string,
    runtime: PropTypes.any,
    release_date: PropTypes.string,
    homepage: PropTypes.string,
    budget: PropTypes.any,
    revenue: PropTypes.number
}

MovieView.defaultProps = {
    original_title: 'N/A',
    title: 'N/A',
    tagline: '',
    production_companies: [],
    production_countries: [],
    imdb: 'N/A',
    runtime: 'N/A',
    release_date: 'N/A',
    homepage: 'N/A',
    budget: null,
    revenue: null
}


export default MovieView;
