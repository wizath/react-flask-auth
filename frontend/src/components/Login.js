import React, {Component} from 'react'
import auth from '../auth/auth'

class Login extends Component {

    state = {
        error: null
    };

    handleChange = (e) => {
        this.setState({
                [e.target.name]: e.target.value
            }
        )
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            let response = await auth.login(this.state.username, this.state.password);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div>
                <h4 className="mb-4">Login</h4>
                <form>
                    <div className="form-group my-2">
                        <input type="username"
                               name="username"
                               className="form-control"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group my-2">
                        <input type="password"
                               name="password"
                               className="form-control"
                               id="exampleInputPassword1"
                               placeholder="Password"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-check my-2">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary"
                            onClick={this.handleFormSubmit}>Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;