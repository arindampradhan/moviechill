import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import LayoutRoute from '../../components/LayoutRoute';
import Example from '../Example/Loadable';
import ThemePage from '../BootstrapTheme/Loadable';
import HomePage from '../HomePage/Loadable';
import MoviePage from '../MoviePage/Loadable';
import PersonPage from '../PersonPage/Loadable';
import DiscoverPage from '../DiscoverPage/Loadable';
import NotFound from '../NotFound/Loadable';
import DefaultPage from '../../components/Loader';

class App extends Component {
    render() {
        return (
            <Switch>
                <LayoutRoute exact path="/" component={HomePage} />
                <Redirect exact from="/movie" to="/"/>
                <Redirect exact from="/person" to="/" />
                <Redirect exact from="/discover" to="/" />
                <Route path="/about" component={Example} />
                <LayoutRoute path="/movie/:movie_id" component={MoviePage} />
                <LayoutRoute path="/person/:person_id" component={PersonPage} />
                <LayoutRoute path="/discover/:type" component={DiscoverPage} />
                <Route path="/theme" component={ThemePage} />
                <Route path="/example" component={DefaultPage} />
                <Route path="" component={NotFound} />
            </Switch>
        );
    }
}

export default App;
