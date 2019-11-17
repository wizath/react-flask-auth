import React, {Component} from 'react'
import Session from "./Session";
import {Link} from "react-router-dom";
import axios from "axios";
import config from "../config";

class Private extends Component {

    accessPrivate = async () => {
        const response = await axios(`${config.apiUrl}/api/protected`, {
                method: "get",
                withCredentials: true,
            });

        document.getElementById('result').innerText = response.data.timestamp;
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h4>Private</h4>
                    <button type="button" className="btn btn-primary my-2">
                        <Link className="link" to="/">Go Public</Link>
                    </button>
                    <button type="button" className="btn btn-primary mx-2" onClick={this.accessPrivate}>Access</button>
                    <hr/>
                    <p id="result">Result: 0</p>
                    <Session/>
                </div>
            </div>
        );
    }
}

export default Private;