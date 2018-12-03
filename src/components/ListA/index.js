import React from 'react';
import './style.scss';
import getImage from '../../utils/images';
import AgeIcon from '../UI'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types';
    // {
    //     "vote_count": 261,
    //     "id": 454293,
    //     "video": false,
    //     "vote_average": 6.3,
    //     "title": "Night School",
    //     "popularity": 99.931,
    //     "poster_path": "/1NSMAaBPSbWv7sGmF8oLGMNb8Qm.jpg",
    //     "original_language": "en",
    //     "original_title": "Night School",
    //     "genre_ids": [
    //         35
    //     ],
    //     "backdrop_path": "/jJBimY3DXIaIaL4NeGHfR0U0rSh.jpg",
    //     "adult": false,
    //     "overview": "Teddy Walker is a successful salesman whose life takes an unexpected turn when he accidentally blows up his place of employment. Forced to attend night school to get his GED, Teddy soon finds himself dealing with a group of misfit students, his former high school nemesis and a feisty teacher who doesn't think he's too bright.",
    //     "release_date": "2018-09-27"
    // }
function ListItem({data}) {
    return (
        <div className="row list-item-a">
        <div className="col-4 col-md-3">
                <img src={getImage.backdrop(data.backdrop_path)} className="img-fluid" alt={data.original_title}></img>
        </div>
        <div className="col-8 col-md-9">
                <Link to={`/movie/${data.id}`}><h4>{data.title}</h4></Link>
                <span className="text-warning font-weight-normal">{data.vote_average} Rating&nbsp;</span>
                <span>{data.title} - {new Date(data.release_date).getFullYear()}</span>
                <span>
                    &nbsp;&nbsp;
                                {data.adult ? <AgeIcon age={16} /> : <AgeIcon age={13} />}
                </span>
            <p>{data.overview}</p>
        </div>
        </div>
    )
}

function ListA({dataList}) {
    return (
        <div className="ListA animated fadeIn">
            <div className="row">
                <div className="col-12">
                    {dataList.map((item) => (<ListItem data={item} />))}
                </div>
            </div>
        </div>
    )
}

ListA.propTypes = {
    dataList: PropTypes.array,
}

ListA.defaultProps = {
    dataList: [],
}

export default ListA;
