import React from 'react';
import Nav from "./components/Nav";
import Footer from './components/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from "./components/Login";
import Private from "./components/Private";
import Public from "./components/Public";
import AuthRoute from "./auth/AuthRoute";

const App = () => (
    <BrowserRouter>
        <Nav/>
        <div className="container content mt-5">
            <Route path="/" exact component={Public}/>
            <AuthRoute path="/private" component={Private}/>
            <Route path="/login" component={Login}/>
        </div>
        <Footer/>
    </BrowserRouter>
);

export default App;
