import React, {Component} from 'react'
import auth from "../auth/auth"

class Nav extends Component {

    handleLogout = () => {
        auth.logout();
        const {from} = {from: {pathname: "/"}};
        this.props.history.replace(from);
    };

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">Authentication example</a>
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

export default Nav;