import React, { Component } from 'react';
import classnames from 'classnames';
import ReactTelInput from 'react-telephone-input';
import 'react-telephone-input/lib/withStyles';
import './ContactUs.css';

class ContactUs extends Component{
  constructor(){
    super(); 
    this.state = {
      phoneNumber: "",
      validation: {
        error: "",
        fullNameError: "",
        subjectError: "",
        phoneNumberError: "",
        emailError: "",     
        messageError: ""
      }
    };

    this.fullName = React.createRef();
    this.subject = React.createRef();
    this.email = React.createRef();
    this.message = React.createRef();
  }

  setPhoneNumber = phoneNumber => this.setState({
    ...this.state,
    phoneNumber
  });

  submitMessage = e => {
    e.preventDefault();

    const fullName = this.fullName.current.value;
    const subject = this.subject.current.value;
    const email = this.email.current.value;
    const message = this.message.current.value;
    const { phoneNumber } = this.state;

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

    if(!email){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "Email Is Required"
        }
      });
    }

    if(!phoneNumber){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          phoneNumberError: "Phone Number Is Required"
        }
      });
    }

    if(!phoneNumber.length <= 3){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          phoneNumberError: "Phone Number Length Should Be Greater Than 3"
        }
      });
    }

    if(!subject){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          phoneNumberError: "",
          subjectError: "Subject Is Required"
        }
      });
    }    

    if(!message){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          phoneNumberError: "",
          subjectError: "",
          messageError: "Message Is Required"
        }
      });
    }
    
    this.setState({
      validation: {
        ...this.state.validation,
        fullNameError: "",
        emailError: "",
        phoneNumberError: "",
        subjectError: "",
        messageError: ""
      }
    });

    console.log(this.state)
  }

  render(){
    const { fullNameError, subjectError, emailError, phoneNumberError, messageError, error } = this.state.validation;

    return(
      <div id="contact">
        <div className="imageContainer">
          <div className="container">
            <p className="text-primary font-weight-bold moveContact">LET'S TALK</p>
            <h1 className="display-6 text-white contact">Contact Us</h1>
              <div className="row">
                <div className="mx-auto col-md-6">
                  <div className="card contactSlideUp">
                    <form onSubmit={this.submitMessage} style={{margin: "60px"}}>
                      <div className="form-group">
                        <input type="text" name="fullName" placeholder="Full Name" className={classnames("form-control", {
                          "is-invalid": fullNameError
                        })} ref={this.fullName}/>
                        <div className="invalid-feedback text-left">{fullNameError}</div>
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address" className={classnames("form-control", {
                          "is-invalid": emailError
                        })} ref={this.email}/>
                        <div className="invalid-feedback text-left">{emailError}</div>
                      </div>
                      <ReactTelInput defaultValue={"us"} onChange={this.setPhoneNumber} classNames="inputSize" flagsImagePath="/img/flags.png" />
                      <div className="text-danger text-left phoneError">{phoneNumberError}</div>
                      <div className="moveDown">
                        <div className="form-group">
                          <input type="text" name="subject" placeholder="Subject" className={classnames("form-control", {
                            "is-invalid": subjectError
                          })} ref={this.subject}/>
                          <div className="invalid-feedback text-left">{subjectError}</div>
                        </div>
                        <div className="form-group">
                          <textarea type="text" name="message" placeholder="Message" rows="7" className={classnames("form-control", {
                            "is-invalid": messageError
                          })} ref={this.message} ref={this.message}></textarea>
                          <div className="invalid-feedback text-left">{messageError}</div>
                        </div>
                        <div className="form-group">
                          <input type="submit" value="SEND" className="btn btn-primary btn-block form-control" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="contactDetails">
                    <div className="row mx-auto">
                      <div className="col-4">
                        <span><i className="fas fa-map-marker-alt text-primary"></i></span>
                        <p className="contactBottom font-weight-bold text-white">ADDRESS:</p>
                        <p className="contactBottom text-white">U.S.A | EMEA</p>
                      </div>
                      <div className="col-4">
                        <span><i className="fas fa-phone text-primary"></i></span>
                        <p className="contactBottom font-weight-bold text-white">PHONE:</p>
                        <p className="contactBottom text-white">+1.703.634.9208</p>
                      </div>
                      <div className="col-4">
                        <span><i className="fas fa-envelope text-primary"></i></span>
                        <p className="contactBottom font-weight-bold text-white">EMAIL:</p>
                        <p className="contactBottom text-white d-none d-sm-block">support@softnet.cloud</p>
                        <p className="contactBottom text-white d-none d-block d-sm-none">support@<br/>softnet.cloud</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
          </div>         
        </div>
      </div>
    );
  }

}

export default ContactUs;