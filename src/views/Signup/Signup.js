import React, { Component } from 'react';
import { Modal, Form, Button, Icon, Grid, Segment, Checkbox, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './Signup.scss'

class Signup extends Component {
    handleClose = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <Modal open="true" size='small' className="user-modal animated fadeInDown delay-0.1s">
                    <Modal.Content>
                        <h2 className="member"> Signup<Icon className="close-btn" name="x" onClick={this.handleClose} /><br></br></h2>
                    </Modal.Content>
                    <Segment className="segment">
                        <Modal.Content>
                            <Grid columns={2} stackable>
                                <Grid.Column className="modal-img">
                                </Grid.Column>
                                <Grid.Column>
                                    <Form>
                                        <br></br>
                                        <Form.Input icon='user' label='Username' iconPosition='left' placeholder='Username' /><br></br>
                                        <Form.Input icon='mail' label='Email' iconPosition='left' placeholder='Email' /><br></br>
                                        <Form.Input icon='lock' label='Password' iconPosition='left' placeholder='Password' type='password' /><br></br>
                                        <Form.Input icon='lock' label='Confirm Password' iconPosition='left' placeholder='Confirm Password' type='password' />
                                        <br></br>
                                        <Form.Field>
                                            <Checkbox label='I agree to the Terms and Conditions' />
                                        </Form.Field><br></br>
                                        <Button content='Register' fluid /><br></br>
                                        <Form.Field>
                                            <p className="member">I am already a member? <Menu.Item as={Link} to="/login">login</Menu.Item></p>
                                        </Form.Field><br></br>
                                    </Form>
                                </Grid.Column>
                            </Grid>
                        </Modal.Content>
                    </Segment>
                </Modal>
            </div>
        )
    }
}

export default Signup
