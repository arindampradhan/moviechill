import {observer} from 'mobx-react';
import React, { Component } from 'react'
import _ from 'lodash';
import CarouselA from '../../components/CarouselA';
import ListA from '../../components/ListA';
import '../../styles/pages/home.scss';
import { TogglerView, DiscoverDiv } from '../../components/UI'
import {Link} from 'react-router-dom'
import MovieDetail from '../../components/MovieDetail';

@observer(["home"])
class HomePage extends Component {
  state = {
    trending: 'a',
    discover: 'a', 
    popular: 'a', 
    top_rated: 'a'
  }

  componentDidMount() {
    const {home} = this.props
    home.getTrendingAndPopular()
    home.discoverMovie()
  }

  discover = (type) => {
    const { home } = this.props
    home.discoverMovie(type)
  }

  handleSearch = (e) => {
    const { home } = this.props

    _.debounce(() => {
      home.searchMovie(e.target.value)
    },1000)
  }

  render() {
    const {discover, popular, top_rated, trending} = this.props.home;
    const random_movie = discover[_.random(0, discover.length)]
    return (
      <div className="container-fluid">
        {random_movie ? (
          <div className="container-fluid">
            <MovieDetail {...random_movie} />
          </div>
        ) : null}
        
        {/* Top Rated */}
        <div className="container-fluid padding-t-10">
          <CarouselA dataList={discover} arrows={false} hoverAllowed={false}/> 
        </div>
        <div className="gap-30"></div>
        {/* Trending */}
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="section-title">Trending</h5>
            </div>
            <div className="col text-right">
              <TogglerView 
                onCarousel={() => this.setState({trending: 'a'})}
                onList={() => this.setState({ trending: 'b' })}
                />
            </div>
          </div>
          {this.state.trending === 'a' ? <CarouselA dataList={trending} /> : <ListA dataList={trending} />}
        </div>
        <div className="gap-30"></div>

        {/* popular */}
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="section-title">Popular</h5>
            </div>
            <div className="col text-right">
              <TogglerView
                onCarousel={() => this.setState({ trending: 'a' })}
                onList={() => this.setState({ trending: 'b' })}
              />
            </div>
          </div>
          {this.state.popular === 'a' ? <CarouselA dataList={popular} /> : <ListA dataList={popular} />}
        </div>
        <div className="gap-30"></div>

        {/* Top Rated */}
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="section-title">Top Rated</h5>
            </div>
            <div className="col text-right">
              <TogglerView
                onCarousel={() => this.setState({ trending: 'a' })}
                onList={() => this.setState({ trending: 'b' })}
              />
            </div>
          </div>
          {this.state.top_rated === 'a' ? <CarouselA dataList={top_rated} /> : <ListA dataList={top_rated} />}
        </div>
        <div className="gap-30"></div>
        <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="section-title">Categories</h5>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-4 col-md-2">
                <Link to="/discover/theatres/">
                  <DiscoverDiv gradient="linear-gradient(to bottom, #fd5183, #f04275)">theatres</DiscoverDiv>
                </Link>
              </div>
              <div className="col-4 col-md-2">
                  <Link to="/discover/science_fiction/">
                <DiscoverDiv gradient="linear-gradient(to bottom, #ffc852, #eeb843)" >science_fiction</DiscoverDiv>
                </Link>
              </div>
              <div className="col-4 col-md-2">
                <Link to="/discover/dramas/">
                  <DiscoverDiv gradient="linear-gradient(to bottom, #81a7fc, #6e96ef)" >dramas</DiscoverDiv>
                </Link>
              </div>
              <div className="col-4 col-md-2">
                  <Link to="/discover/r_rated/">
                <DiscoverDiv gradient="linear-gradient(to bottom, #bf64ff, #ab50eb)" >R rated</DiscoverDiv>
                </Link>
              </div>
              <div className="col-4 col-md-2">
                  <Link to="/discover/best_drama/">
                <DiscoverDiv gradient="linear-gradient(to bottom, #bf64ff, #ab50eb)" >best_drama</DiscoverDiv>
                </Link>
              </div>
              <div className="col-4 col-md-2">
                <Link to="/discover/kids/">
                  <DiscoverDiv gradient="linear-gradient(to bottom, #bf64ff, #fd5183)" >kids</DiscoverDiv>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
