import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss';

function Header() {
    return (
        <header className="header-panel container-fluid navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <div className="container">
            <Link className="navbar-brand mr-0 mr-md-2 text-success" to="/" href="/">
                <b>MOVIECHILL</b>
            </Link>
            <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">
                            Home</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link " to="/discover/popular">
                                Popular</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/discover/theatres">
                            Theatres</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to="/about/">
                            About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/theme/">
                            Theme</Link>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
    
                <li className="nav-item">
                        <Link className="nav-link text-white" to="/discover/kids/">
                            Kids</Link>
                </li>
            </ul>
            {/* <Link className="btn  d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="/docs/4.1/getting-started/download/">Kids</Link> */}
            </div>
        </header>
    )
}

export default Header;
