import React, {Component} from 'react'
import Session from "./Session";
import Actions from "./Actions";
import Private from "./Private";

class Content extends Component {
    render() {
        return (
            <div className="content mt-5">

                <div className="container">

                    <div className="row">

                        <div className="col-md-4 offset-md-4">

                            <h4 className="mb-4">Login</h4>
                            <form>
                                <div className="form-group my-2">
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter email"/>
                                </div>
                                <div className="form-group my-2">
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password"/>
                                </div>
                                <div className="form-check my-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-outline-secondary">Submit</button>
                            </form>

                        </div>

                    </div>

                    <div className="row mt-5">

                        <div className="col-md-4">
                            <Session/>
                        </div>

                        <div className="col-md-4">
                            <Actions/>
                        </div>

                        <div className="col-md-4">
                            <Private/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;