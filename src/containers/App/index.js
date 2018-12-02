import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Example from '../Example/Loadable';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Example} />
                <Route path="/features" component={Example} />
                <Route path="" component={Example} />
            </Switch>
        );
    }
}

export default App;
