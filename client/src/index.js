import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import AuthRoute from './auth/AuthRoute'

import Nav from './components/Nav'
import Login from './components/Login'
import Private from './components/Private'
import Public from './components/Public'


const App = () => (
	<BrowserRouter>
        <div className="container">
            <Nav/>
            <Route path="/" exact component={Public} />
            <AuthRoute path="/private" component={Private} />
            <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById('app'));
