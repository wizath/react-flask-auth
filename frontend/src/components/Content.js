import React, {Component} from 'react'
import Session from "./Session";
import Actions from "./Actions";
import Private from "./Private";
import Login from "./Login";

class Content extends Component {
    render() {
        return (
            <div className="content mt-5">

                <div className="container">

                    <div className="row">

                        <div className="col-md-4 offset-md-4">
                            <Login/>
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