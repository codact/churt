import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Home.scss'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-content">
                    <h1 className="animated heartBeat delay-0.2s bounce">Churt</h1>
                    <p>Get your thoughts out there!</p><br></br>
                    <Button as={Link} to="/signup" className="btn" color='olive' >
                        <Icon name="signup" />Signup</Button> &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button as={Link} to="/login" className="btn" color='olive'>
                        <Icon name="sign-in" />Login
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button as={Link} to="/feed" className="btn" color='olive'>
                        <Icon name="compass" />Explore
                    </Button>
                </div>
            </div>
        )
    }
}

export default Home
