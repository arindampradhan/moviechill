import React from 'react';
import './style.scss';
import {Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="page-footer font-small pt-4">
            {/* Footer Links */}
            <div className="container text-center text-md-left">
                {/* Grid row */}
                <div className="row">
                    {/* Grid column */}
                    <div className="col-md-4 mx-auto">
                        {/* Content */}
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">About Moviechill</h5>
                        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    {/* Grid column */}
                    <hr className="clearfix w-100 d-md-none" />
                    {/* Grid column */}
                    <div className="col-md-2 mx-auto">
                        {/* Links */}
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Movies</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/movie/459243">Pihalla</Link>
                            </li>
                            <li>
                                <Link to="/movie/335983">Venom</Link>
                            </li>
                            <li>
                                <Link to="/movie/375588">Robin Hood</Link>
                            </li>
                            <li>
                                <Link to="/movie/360920">The Grinch</Link>
                            </li>
                            <li>
                                <Link to="/movie/424694">Bohemian Rhapsody</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                    <hr className="clearfix w-100 d-md-none" />
                    {/* Grid column */}
                    <div className="col-md-2 mx-auto">
                        {/* Links */}
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Actors</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/person/17838">Rami Malek</Link>
                            </li>
                            <li>
                                <Link to="/person/1452045">Ben Hardy</Link>
                            </li>
                            <li>
                                <Link to="/person/2524">Tom Hardy</Link>
                            </li>
                            <li>
                                <Link to="/person/37632">Eddie Redmayne</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                    <hr className="clearfix w-100 d-md-none" />
                    {/* Grid column */}
                    <div className="col-md-2 mx-auto">
                        {/* Links */}
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Discover</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/discover/popular">Popular</Link>
                            </li>
                            <li>
                                <Link to="/discover/r_rated/">R Rated</Link>
                            </li>
                            <li>
                                <Link to="/discover/best_drama/">Best Drama</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            {/* Footer Links */}
            <hr />
            {/* Copyright */}
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> Moviechill.com</a>
            </div>
            {/* Copyright */}
        </footer>
    )
}

export default Footer;
