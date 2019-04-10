import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../Home/Home.scss'

const ErrorPage = () => {
    return (
        <div>
            <div className="home">
                <div className="home-content">
                    <h1 className="animated heartBeat delay-0.2s bounce">404 not found!</h1>
                    <p>The page you are accessing is not available!</p><br></br>

                    <Button as={Link} to="/" className="btn" color='olive'>
                        <Icon name="compass" />Click here to go back Home
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;