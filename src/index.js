import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { configure } from "mobx";
import HomeStore from './containers/HomePage/HomeStore';
import MovieStore from './containers/MoviePage/MovieStore';
import PersonStore from './containers/PersonPage/PersonStore';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import { enableLogging } from 'mobx-logger';

import App from './containers/App';
// import * as serviceWorker from './serviceWorker';
import './styles/main.scss';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const homeStore = new HomeStore();
const movieStore = new MovieStore();
const personStore = new PersonStore();

configure({ 
    computedRequiresReaction: true,
    disableErrorBoundaries: process.env.NODE_ENV === 'production',
});

const stores = {
    // Key can be whatever you want
    routing: routingStore,
    home: homeStore,
    movie: movieStore,
    person: personStore,
    // ...other stores
};

const config = { 
    predicate: () => true ,
    action: true,
    // reaction: true,
    // transaction: true | false,
    // compute: true | false
};

enableLogging(config);


const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
