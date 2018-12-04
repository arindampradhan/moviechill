import React from 'react';

function NotFound({history}) {
    return (
        <div className="container-fluid">
            <div className="text-center">
                <h1 className="text-primary padding-t-200">Not Found</h1>
                <button className="btn btn-outline-secondary btn-lg" onClick={history.goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default NotFound;
