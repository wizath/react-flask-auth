import React, {Component} from 'react'

class Private extends Component {
    render() {
        return (
            <div>
                <h4 className="mb-4">Private</h4>
                <button type="button" className="btn btn-primary">Access</button>
                <hr/>
                <p>Result: 0</p>
            </div>
        );
    }
}

export default Private;