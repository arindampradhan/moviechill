import React from 'react';

function NotFound({history}) {
    return (
        <div className="container padding-t-200 text-center">
            <h1 className="text-primary">Not Found</h1>
            <button className="btn btn-outline-secondary btn-lg" onClick={history.goBack}>Go Back</button>
        </div>
    )
}

export default NotFound;
