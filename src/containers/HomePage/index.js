import {observer} from 'mobx-react';
import React, { Component } from 'react'
import _ from 'lodash';
@observer(["home"])
class HomePage extends Component {
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
    return (
      <div className="container">
        <h1>Home page</h1>
      </div>
    )
  }
}

export default HomePage;
