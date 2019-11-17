import React, {Component} from 'react'

class Actions extends Component {
    render() {
        return (
            <div>
                <h4 className="mb-4">Actions</h4>

                <button type="button" className="btn btn-primary my-2">Refresh</button>
                <br/>
                <button type="button" className="btn btn-primary my-2">Logout</button>
                <br/>
                <button type="button" className="btn btn-primary my-2">Invalidate</button>
            </div>
        );
    }
}

export default Actions;