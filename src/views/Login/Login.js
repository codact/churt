import React, { Component } from 'react';
import SignupLogin from '../../components/SignupLogin/SignupLogin'

class Login extends Component {
    handleClose = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <SignupLogin aspect="login" handleClose={this.handleClose} open={false} />
            </div>
        )
    }
}

export default Login
