import React, { Component } from 'react'
import io from 'socket.io-client'
import './Feed.scss'
import '../../components/StatusContainer/StatusContainer.scss'
import { Feed, TextArea, Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import StatusContainer from '../../components/StatusContainer/StatusContainer';

const socket = io('https://churt-backend.herokuapp.com/');

socket.on('api/status/get', (data) => {
    const main = document.createElement('div');
    const div = document.getElementById('from-backend');
    main.innerHTML = `
                <div class="feed-message">
                <p><strong>Anonymous</strong><span>${data.date}</span> </p>
                <p>${data.body}
                    <span>
                    <i id="update" class="fas fa-pen-fancy"></i>&nbsp; &nbsp;
                    <i id="delete" class="fas fa-trash-alt"></i>
                    </span>
                </p>
                </div></br>
                `
    div.insertBefore(main, div.childNodes[0]);
});


class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null, status: null
        }
    }
    onClick = (e) => {
        e.preventDefault();

        const body = document.getElementById("message").value;
        socket.emit('api/status/create', {
            body
        });
    }
    componentDidMount() {
        document.getElementById('message').focus();
        axios.get("https://churt-backend.herokuapp.com/status").then(
            res => {
                this.setState({ status: res.data.status })

            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="feed">
                <h2>What do you feel today?</h2>
                <div>
                    <Form onSubmit={this.onClick}>
                        <TextArea placeholder='Add a status' id="message" required />
                        <br></br><br></br>
                        <Button color="olive">Send</Button>
                    </Form>
                </div>
                <br></br>

                <Feed id="from-backend" className="animated fadeInUp">
                    {this.state.status ? (this.state.status.map(r => (
                        <StatusContainer data={r} key={r.id} />
                    ))) : <p>Nothing to show here!</p>}
                </Feed>
            </div>
        )
    }
}

export default FeedPage
