import React from 'react';
import './style.scss';
import styled from 'styled-components';
import getImage from '../../utils/images';
import {AgeIcon} from '../UI'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieRowDiv = styled.div`
    background:  ${props => `url(${getImage.poster(props.poster_path)})`};;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100px;
`
function MovieDetail({ title, original_title, overview, release_date, poster_path, vote_average, adult, backdrop_path, ...rest }) {
    return (
        <div className="MovieDetail container-fluid padding-0 animated fadeIn">
            <div className="container">
                <MovieRowDiv className="row" poster_path={backdrop_path || poster_path}>
                    <div className="classy-2">
                        <div className="col-12 col-md-6 padding-t-60">
                        <Link to={`/movie/${rest.id}`}><h1 className="margin-0">{title}</h1></Link>
                        <div className="font-weight-bold text-white padding-t-5 padding-b-15">
                            <span className="text-warning font-weight-normal">{vote_average} Rating&nbsp;</span>
                            <span>{title} - {new Date(release_date).getFullYear()}</span>
                            <span>
                                &nbsp;&nbsp;
                                {adult ? <AgeIcon age={16} /> : <AgeIcon age={13} />}
                            </span>
                        </div>
                        <p className="text-white">{overview}</p>
                    </div>
                    <div className="col-md-6">
                    </div>
                    </div>
                </MovieRowDiv>
            </div>
        </div>
    )
}

MovieDetail.propTypes = {
    title: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.any,
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string
}

export default MovieDetail;
