import {observer} from 'mobx-react';
import React, { Component } from 'react'
import _ from 'lodash'
import ListA from '../../components/ListA';
import '../../styles/pages/home.scss';
import { TogglerView, DiscoverDiv } from '../../components/UI'
import { Link } from 'react-router-dom'
import MovieDetail from '../../components/MovieDetail';
import Categories from '../../components/Categories'




@observer(["home"])
class DiscoverPage extends Component {
  componentDidMount() {
    const { home, match } = this.props
    if (match && match.params.type) {
      home.discoverMovie(match.params.type)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { home,match } = this.props
    const { match: match2 } = nextProps
    if (match.params.type !== match2.params.type) {
      home.discoverMovie(match2.params.type)
    }
  }

  render() {
    const { discover, random_movie} = this.props.home;
    const {match} = this.props
    return (
      <React.Fragment>
      <div className="container-fluid">
        {random_movie ? (
          <div className="container-fluid">
            <MovieDetail {...random_movie} />
          </div>
        ) : null}

      </div>
        <div className="container">
          <h1 className="text-uppercase">{match.params.type}</h1>
          <ListA dataList={discover} />
          <div className="gap-30"></div>
          <Categories />
        </div>

      </React.Fragment>
    )
  }
}

export default DiscoverPage;
