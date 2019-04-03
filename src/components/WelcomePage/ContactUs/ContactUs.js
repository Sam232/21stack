import React, { Component } from 'react';
import classnames from 'classnames';
import './ContactUs.css';

class ContactUs extends Component{
  constructor(){
    super(); 
    this.state = {
      validation: {
        error: "",
        fullNameError: "",
        subjectError: "",
        emailError: "",      
        messageError: ""
      }
    };

    this.fullName = React.createRef();
    this.subject = React.createRef();
    this.email = React.createRef();
    this.message = React.createRef();
  }

  submitMessage = e => {
    e.preventDefault();

    const fullName = this.fullName.current.value;
    const subject = this.subject.current.value;
    const email = this.email.current.value;
    const message = this.message.current.value;

    if(!fullName){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "Full Name Is Required"
        }        
      });
    }

    if(fullName.split(" ")[0].length < 2){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "First Name Characters Should Not Be Less Than 2"
        }        
      });
    }

    if(!fullName.split(" ")[1]){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "Last Name Is Required"
        }        
      });
    }

    if(fullName.split(" ")[1].length < 2){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "Last Name Characters Should Not Be Less Than 2"
        }        
      });
    }

    if(!subject){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          subjectError: "Subject Is Required"
        }
      });
    }

    if(!email){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          subjectError: "",
          emailError: "Email Is Required"
        }
      });
    }

    if(!message){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          subjectError: "",
          emailError: "",
          messageError: "Message Is Required"
        }
      });
    }

    console.log(this.state)
  }

  render(){
    const { fullNameError, subjectError, emailError, messageError, error } = this.state.validation;

    return(
      <div id="contact">
        
      </div>
    );
  }

}

export default ContactUs;