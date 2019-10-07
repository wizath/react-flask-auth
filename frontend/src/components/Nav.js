import React, {Component} from 'react'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">Authentication example</a>
                    <a className="nav-link" href="/login">Login<span className="sr-only">(current)</span></a>
                </div>
            </nav>
        );
    }
}

export default Nav;