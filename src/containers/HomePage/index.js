import {observer} from 'mobx-react';
import ExampleComp from '../../components/Example';
import React, { Component } from 'react'

@observer(["home"])
class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home page</h1>
      </div>
    )
  }
}

export default HomePage;
