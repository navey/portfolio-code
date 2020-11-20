import React from 'react';
import axios from 'axios';

import { TextField, Button } from '@material-ui/core';

import '../naveyStyle.css';


class ContactMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sendEmail : {
                name: '',
                email: '',
                message: ''
            },
            sent: false
        };
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displaySentMessage = this.displaySentMessage.bind(this); 
    }

    changeName(e){
        var emailProp = {...this.state.sendEmail};
        emailProp["name"] = e.target.value;
        this.setState({sendEmail : emailProp});
    }

    changeEmail(e){
        var emailProp = {...this.state.sendEmail};
        emailProp["email"] = e.target.value;
        this.setState({sendEmail : emailProp});
    }

    changeMessage(e){
        var emailProp = {...this.state.sendEmail};
        emailProp["message"] = e.target.value;
        this.setState({sendEmail : emailProp});
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.sendEmail.name.length === 0 || this.state.sendEmail.email.length === 0 || this.state.sendEmail.message.length === 0){
            return;
        }
        axios.post('/send', this.state.sendEmail)
        .then(() => {
            console.log("Email Sent.");
            this.setState({sent: true});
        })
        .catch(error => console.log(error));
    }

    displaySentMessage(){
        return(
            <h1 className='contact-label'>Message has been sent.</h1>
        );
    }

    render(){
        return (
            <div className='contact-main' id="contact">
                <h1 className='contact-label'>Contact Me (Currently in development)</h1>
                <form>
                    <TextField
                        id="name-input"
                        label="Name"
                        style={{ margin: 8 }}
                        placeholder="Name"
                        fullWidth
                        margin="normal"
                        onChange={(e) => this.changeName(e)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br/><br/>
                    <TextField
                        id="email-input"
                        label="Email Address"
                        style={{ margin: 8 }}
                        placeholder="Email Address"
                        fullWidth
                        margin="normal"
                        onChange={(e) => this.changeEmail(e)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br/><br/>
                    <TextField
                        id="message-input"
                        label="Message"
                        style={{ margin: 8 }}
                        multiline
                        fullWidth
                        onChange={(e) => this.changeMessage(e)}
                        rowsMax={8}
                    />
                    <br/><br/>
                    <Button variant="contained" onClick={(e) => this.handleSubmit(e)}>Submit</Button>
                    {this.state.sent ? this.displaySentMessage() : ""}
                </form>
            </div>
        )
    }
}
export default ContactMe;