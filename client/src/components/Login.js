import React, { Component } from 'react'
import './css/Login.css'
import Auth from '../auth/Auth'

class Login extends Component {

    constructor() {
        super();
    }

    handleChange(e) {
        this.setState({
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();
        Auth.login(this.state.username, this.state.password)
        .then(result => {
            const { from } = this.props.location.state || { from: { pathname: "/" } };
            this.props.history.replace(from);
        })
        .catch(err =>{
            console.log(err);
        });
    }

    render() {
        return (
            <form className="form-signin">
                <div className="text-center">
                    <img className="mb-4 text-center" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                </div>
                <label htmlFor="inputEmail" className="sr-only">Username</label>
                <input type="text" name="username" id="inputUsername" className="form-control" placeholder="Username" required="" onChange={this.handleChange.bind(this)}/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={this.handleChange.bind(this)}/>
                <div className="checkbox">
                    <label className="ml-0">
                        <input type="checkbox" className="text-left mx-1" value="remember-me"/>
                        Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-outline-secondary btn-block" type="submit" onClick={this.handleFormSubmit.bind(this)}>Login</button>
            </form>
        );
    }
}

export default Login;