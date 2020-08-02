import React from 'react';
import axios from 'axios';

import { TextField, Button } from '@material-ui/core';

import '../naveyStyle.css';


class ContactMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    changeName(e){
        this.setState({name: e.target.value});
    }

    changeEmail(e){
        this.setState({email: e.target.value});
    }

    changeMessage(e){
        this.setState({message: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <div className='contact-main'>
                <h1 className='contact-label'>Contact Me (Currently in development)</h1>
                <form>
                    <TextField
                        id="name-input"
                        label="Name"
                        style={{ margin: 8 }}
                        placeholder="Name"
                        fullWidth
                        margin="normal"
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
                        rowsMax={8}
                    />
                    <br/><br/>
                    <Button variant="contained">Submit</Button>
                </form>
            </div>
        )
    }
}
export default ContactMe;