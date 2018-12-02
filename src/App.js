import React, { Component } from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";
import api from './api';


import './App.css';

api.trendingAndPopular()

@observer
class App extends Component {
  @observable boxVisible = true;
  toggleBox = () => {
    this.boxVisible = !this.boxVisible;
  };
  render() {
    return (
      <div>
        <h2>MobX Demo</h2>
        <button onClick={this.toggleBox}>Toggle Box</button>
        {this.boxVisible && <div style={styles.box} />}
      </div>
    );
  }
}

const styles = {
  box: {
    margin: 10,
    height: 200,
    width: 200,
    backgroundColor: "red"
  }
};


export default App;
