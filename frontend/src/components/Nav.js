import React, {Component} from 'react'
import auth from "../auth/auth"
import {Redirect, withRouter} from "react-router-dom"

class Nav extends Component {

    handleLogout = (event) => {
        event.preventDefault();
        auth.logout();
        const {from} = {from: {pathname: "/"}};
        this.props.history.push(from);
    };

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">Authentication example</a>
                    {
                        auth.isLogged() ?
                            <a className="nav-link" href="/logout" onClick={this.handleLogout}>Logout</a> :
                            <a className="nav-link" href="/login">Login</a>
                    }
                </div>
            </nav>
        );
    }
}

export default withRouter(Nav);