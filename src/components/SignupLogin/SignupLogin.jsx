import React from 'react';
import { Modal, Form, Button, Icon, Grid, Segment, Checkbox, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './SignupLogin.scss'

const SignupLogin = (props) => {
    return (
        <div>
            <Modal open={true} size='small' className="user-modal animated fadeInDown">
                <Modal.Content>
                    <h2 className="member"> {props.aspect === "login" ? "Login" : "Signup"}<Icon className="close-btn" name="x" onClick={props.handleClose} /><br></br></h2>
                </Modal.Content>
                <Segment className="segment">
                    <Modal.Content>
                        <Grid columns={2} stackable>
                            <Grid.Column className="modal-social-btns" verticalAlign="middle">
                                <Button color='facebook' fluid className="btn">
                                    <Icon name='facebook' />Sign in with Facebook
                                </Button>
                                <Button color='twitter' fluid className="btn">
                                    <Icon name='twitter' />Sign in with Twitter
                                </Button>
                                <Button color='google plus' fluid className="btn">
                                    <Icon name='google' />Sign in with Google
                                </Button>
                            </Grid.Column>
                            <Grid.Column verticalAlign="middle">
                                <Form>
                                    <br></br>
                                    {props.aspect === "login" ? null :
                                        (
                                            <Form.Input icon='user' label='Username' iconPosition='left' placeholder='Username' required />
                                        )
                                    }
                                    <br></br>
                                    <Form.Input icon='mail' label='Email' iconPosition='left' placeholder='Email' required /><br></br>
                                    <Form.Input icon='lock' label='Password' iconPosition='left' placeholder='Password' type='password' required /><br></br>
                                    {props.aspect === "login" ? null : (
                                        <Form.Input icon='lock' label='Confirm Password' iconPosition='left' placeholder='Confirm Password' type='password' required />
                                    )}
                                    <br></br>
                                    {props.aspect === "login" ? null : (
                                        <Form.Field>
                                            <Checkbox label='I agree to the Terms and Conditions' required />
                                        </Form.Field>
                                    )}
                                    {props.aspect === "login" ? null : <br></br>}

                                    <Button content={props.aspect === "login" ? "Login" : "Signup"} fluid color='olive' /><br></br>
                                    {props.aspect === "login" ? (
                                        <Form.Field>
                                            <p className="member">Are you new to the app? <Menu.Item as={Link} to="/signup">Register</Menu.Item></p>
                                        </Form.Field>

                                    ) : (
                                            <Form.Field>
                                                <p>I am already a member? <Menu.Item as={Link} to="/login">login</Menu.Item></p>
                                            </Form.Field>

                                        )
                                    }<br></br>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </Modal.Content>
                </Segment>
            </Modal>
        </div>
    )
}

export default SignupLogin;