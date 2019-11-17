import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <hr/>

                    <div className="row">

                        <div className="col-sm-4 offset-sm-2">
                            <p>© 2019 by wizlabs.pl</p>
                        </div>

                        <div className="col-sm-1 offset-sm-4">
                            <a href="/github">GitHub</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;