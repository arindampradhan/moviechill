import React from 'react';
import './style.scss';
import getImage from '../../utils/images';
import AgeIcon from '../UI'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

function ListItem({data}) {
    return (
        <div className="row list-item-a">
            <div className="col-12 col-sm-4 col-md-3">
                <img src={data.backdrop_path ? getImage.backdrop(data.backdrop_path): getImage.random()} className="img-fluid" alt={data.original_title}/>
            </div>
            <div className="col-12 col-sm-8 col-md-9">
                    <Link to={`/movie/${data.id}`}><h4>{data.title}</h4></Link>
                    <span className="text-warning font-weight-normal">{data.vote_average} Rating&nbsp;</span>
                    <span>{data.title} - {new Date(data.release_date).getFullYear() || 'N/A'}</span>
                    <span>
                        &nbsp;&nbsp;
                        {data.adult ? <AgeIcon age={16} /> : <AgeIcon age={13} />}
                    </span>
                <p>{data.overview}</p>
            </div>
        </div>
    )
}

ListItem.propTypes = {
    data: PropTypes.shape({
        backdrop_path: PropTypes.string,
        original_title: PropTypes.string,
        title: PropTypes.string,
        vote_average: PropTypes.any,
        release_date: PropTypes.string,
        adult: PropTypes.bool.isRequired
    })
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
