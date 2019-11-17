import React, {Component} from 'react'
import Session from "./Session";
import {Link} from 'react-router-dom'

class Public extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h4>Public</h4>
                    <button type="button" className="btn btn-primary my-2"><Link className="link" to="/private">Go Private</Link>
                    </button>
                    <Session/>
                </div>
            </div>
        );
    }
}

export default Public;