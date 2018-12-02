import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import LayoutRoute from '../../components/LayoutRoute';
// import Example from '../Example/Loadable';
import ThemePage from '../BootstrapTheme/Loadable';
import HomePage from '../HomePage/Loadable';
import MoviePage from '../MoviePage/Loadable';
import PersonPage from '../PersonPage/Loadable';
import NotFound from '../NotFound/Loadable';
import DefaultPage from '../../components/Loader';

class App extends Component {
    render() {
        return (
            <Switch>
                <LayoutRoute exact path="/" component={HomePage} />
                <Redirect from="/movie" to="/"/>
                <Redirect from="/person" to="/" />
                <LayoutRoute path="/movie/:movie_id" component={MoviePage} />
                <LayoutRoute path="/person/:person_id" component={PersonPage} />
                <Route path="/theme" component={ThemePage} />
                <Route path="/example" component={DefaultPage} />
                <Route path="" component={NotFound} />
            </Switch>
        );
    }
}

export default App;
