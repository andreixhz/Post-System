import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login';


function Routes() {
    return (
        <BrowserRouter className>
            <div className="center fd">
                <div className="container">
                    <Route path="/" component={Login}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Routes;