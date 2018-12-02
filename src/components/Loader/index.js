import React from 'react';
import './style.scss';
import Logo from '../Logo'

function LoaderPage() {
    return (
        <div className="container">
            <div className="padding-t-200"> </div>
            <div className="animated zoomIn text-center">
                <Logo/>
            </div>
        </div>
    )
}

export default LoaderPage;
