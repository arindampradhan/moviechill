import {observer} from 'mobx-react';
import React, { Component } from 'react'

@observer(["home"])
class DiscoverPage extends Component {
  componentDidMount() {
    debugger
    const { home, match } = this.props
    if (match && match.params.type) {
      home.discoverMovie(match.params.type)
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Discover page</h1>
      </div>
    )
  }
}

export default DiscoverPage;
