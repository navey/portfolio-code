import React from 'react';
import axios from 'axios';

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
            <form className='contact-main' method='POST' onSubmit={this.handleSubmit.bind(this)}>
                <label className='contact-label'>*Currently not working*</label>
                <br></br>
                <label className='contact-label'>Name</label>
                <br></br>
                <input type='text' className='contact-input' value={this.state.name} onChange={this.changeName.bind(this)}/>
                <br></br><br></br>
                <label className='contact-label'>Email</label>
                <br></br>
                <input type='text' className='contact-input' value={this.state.email} onChange={this.changeEmail.bind(this)}/>
                <br></br><br></br>
                <label className='contact-label'>Message</label>
                <br></br>
                <textarea className='contact-message' value={this.state.message} onChange={this.changeMessage.bind(this)}/>
                <br></br><br></br>

                <button type='submit' className='contact-submit'>Submit</button>
            </form>
        )
    }
}
export default ContactMe;