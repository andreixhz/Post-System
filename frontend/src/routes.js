import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function Routes() {
    return (
        <BrowserRouter className>
            <div className="center fd">
                <div className="container">
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Routes;