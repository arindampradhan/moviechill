import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import { TogglerView, DiscoverDiv } from '../../components/UI'

function Categories() {
    return (
        <div className="row">
            <div className="col-12">
                <h5 className="section-title">Categories</h5>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-2">
                        <Link to="/discover/theatres/">
                            <DiscoverDiv gradient="linear-gradient(to bottom, #fd5183, #f04275)">theatres</DiscoverDiv>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                        <Link to="/discover/science_fiction/">
                            <DiscoverDiv gradient="linear-gradient(to bottom, #ffc852, #eeb843)" >science fiction</DiscoverDiv>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                        <Link to="/discover/dramas/">
                            <DiscoverDiv gradient="linear-gradient(to bottom, #81a7fc, #6e96ef)" >dramas</DiscoverDiv>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                        <Link to="/discover/r_rated/">
                            <DiscoverDiv gradient="linear-gradient(to bottom, #bf64ff, #ab50eb)" >R rated</DiscoverDiv>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                        <Link to="/discover/best_drama/">
                            <DiscoverDiv gradient="linear-gradient(to bottom, #bf64ff, #ab50eb)" >best drama</DiscoverDiv>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                        <Link to="/discover/kids/">
                            <DiscoverDiv gradient="linear-gradient(to bottom, #bf64ff, #fd5183)" >kids</DiscoverDiv>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
