import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../auth/Auth'
import { withRouter } from 'react-router-dom'

class Nav extends Component {

    handleLogout() {
        Auth.logout()
            .then(result => {
                this.props.history.push('/');
            })
            .catch(error => {
                console.error(error); throw error;
            });
    }

    render() {

         const button = Auth.isLogged() ? (
                <button className="btn btn-outline-secondary my-2 my-sm-0 mx-1"
                        type="submit"
                        onClick={this.handleLogout.bind(this)}>
                    <a>Logout</a>
                </button>
            ) : (
                <button className="btn btn-outline-secondary my-2 my-sm-0 mx-1" type="submit">
                    <Link to="/login">Login</Link>
                </button>
            );

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link to="/" className="navbar-brand">Auth Example</Link>

                <div className="my-sm-0 ml-auto">

                    <button className="btn btn-outline-secondary my-2 my-sm-0 mx-1" type="submit">
                        <Link to="/private">Private</Link>
                    </button>

                    {button}
                </div>
            </nav>
        );
    }
}

export default withRouter(Nav);