/**
 *
 * Router
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

// using render prop
export const LayoutRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <React.Fragment>
                <Header />
                    <div style={{minHeight: '100vh'}}>
                        <Component {...matchProps} />
                    </div>
                <Footer />
            </React.Fragment>
        )}
    />
);

LayoutRoute.defaultProps = {
    component: PropTypes.node.isRequired,
};

export default LayoutRoute;