import {observer} from 'mobx-react';
import React, { Component } from 'react'
import _ from 'lodash';
import CarouselA from '../../components/CarouselA';
import ListA from '../../components/ListA';
import '../../styles/pages/home.scss';
import { TogglerView, DiscoverDiv } from '../../components/UI'
import {Link} from 'react-router-dom'
import MovieDetail from '../../components/MovieDetail';
import Categories from '../../components/Categories'
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
    const { discover, popular, top_rated, trending, random_movie} = this.props.home;
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
          {this.state.trending === 'a' ? <CarouselA dataList={trending} /> : <ListA length={5} dataList={trending.slice(0,5)} />}
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
                onCarousel={() => this.setState({ popular: 'a' })}
                onList={() => this.setState({ popular: 'b' })}
              />
            </div>
          </div>
          {this.state.popular === 'a' ? <CarouselA dataList={popular} /> : <ListA length={5} dataList={popular.slice(0, 10)} />}
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
                onCarousel={() => this.setState({ top_rated: 'a' })}
                onList={() => this.setState({ top_rated: 'b' })}
              />
            </div>
          </div>
          {this.state.top_rated === 'a' ? <CarouselA dataList={top_rated} /> : <ListA length={10} dataList={top_rated.slice(0, 10)} />}
        </div>
        <div className="gap-30"></div>
        <div className="container">
          <Categories/>
        </div>
      </div>
    )
  }
}

export default HomePage;
