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
                    <Login/>
                </div>
            </div>
        );
    }
}

export default Content;