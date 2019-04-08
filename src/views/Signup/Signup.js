import React, { Component } from 'react';
import SignupLogin from '../../components/SignupLogin/SignupLogin'

class Signup extends Component {
    handleClose = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <SignupLogin aspect="signup" handleClose={this.handleClose} open={false} />
            </div>
        )
    }
}

export default Signup
