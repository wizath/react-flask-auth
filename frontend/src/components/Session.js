import React, {Component} from 'react'
import auth from '../auth/auth'

class Session extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valid: false,
            expires_in: 0,
            user_id: 0
        }
    };

    componentWillMount() {
        setInterval(this.updateSessionInfo, 500);
    }

    updateSessionInfo = () => {
        let old_state = this.state;
        console.log(auth.session);

        old_state.valid  = auth.session.valid;
        if (auth.session.valid) {
            old_state.expires_in = auth.expires_in  * 1000;
            old_state.user_id = auth.user_id;
        } else {
            old_state.expires_in = new Date();
            old_state.user_id = 0;
        }

        console.log(old_state);
        this.setState(old_state);
    };

    render() {
        return (
            <div>
                <h4 className="mb-4">Session Info</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Valid</td>
                        <td>{this.state.valid ? 'True' : 'False'}</td>
                    </tr>
                    <tr>
                        <td>Expiration</td>
                        <td>{new Date(this.state.expires_in).toLocaleString('en-GB')}</td>
                    </tr>
                    <tr>
                        <td>User ID</td>
                        <td>{this.state.user_id}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Session;