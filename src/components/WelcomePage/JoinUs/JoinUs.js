import React, { Component } from 'react';
import classnames from 'classnames';
import './JoinUs.css';

class JoinUs extends Component{
  state = {
    fullName: "",
    email: "",
    validation: {
      fullNameError: "",
      emailError: "",
      error: ""
    }
  };

  onChange = e => this.setState({
    ...this.state,
    [e.target.name]: e.target.value
  });

  submitNewUser = e => {
    e.preventDefault();

    const { fullName, email } = this.state;

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
          emailError: "Email Address Is Required"
        }
      });
    }

    console.log(this.state)

  }

  render(){
    const { fullName, email } = this.state;
    const { fullNameError, emailError } = this.state.validation;

    return(
      <div className="joinUsImage">        
        <div className="container d-none d-sm-block d-sm-none d-md-block">
          <h1 className="display-5 text-white " style={{paddingTop: "240px"}}>Join our waiting list. Be the first to know about it.</h1>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, pulvinar dapibus leo</p>
          <form className="form-row " onSubmit={this.submitNewUser}>
            <div className="form-group col">
              <input className={classnames("form-control", {
                "is-invalid": fullNameError
              })} type="text" name="fullName" placeholder="Full Name" value={fullName} onChange={this.onChange} />
              <div className="invalid-feedback text-left">{fullNameError}</div>
            </div>
            <div className="form-group col">
              <input className={classnames("form-control", {
                "is-invalid": emailError
              })} type="email" name="email" placeholder="Email Address" value={email} onChange={this.onChange} />
              <div className="invalid-feedback text-left">{emailError}</div>
            </div>
            <div className="form-group col">
              <input type="submit" name="Join" className="form-control btn btn-primary" />
            </div>
          </form>
          <p className="text-white">We will never spam or give this address away.</p>
        </div>
        <div className="container d-block d-sm-none">
          <h1 className="display-5 text-white " style={{paddingTop: "25px"}}>Join our waiting list. Be the first to know about it.</h1>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, pulvinar dapibus leo</p>
          <form onSubmit={this.submitNewUser}>
            <div className="col-12">
              <div className="form-group col-12">
                <input className={classnames("form-control", {
                  "is-invalid": fullNameError
                })} type="text" name="fullName" placeholder="Full Name" value={fullName} onChange={this.onChange} />
                <div className="invalid-feedback text-left">{fullNameError}</div>
              </div>
              <div className="form-group col-12">
                <input className={classnames("form-control", {
                  "is-invalid": emailError
                })} type="email" name="email" placeholder="Email Address" value={email} onChange={this.onChange} />
                <div className="invalid-feedback text-left">{emailError}</div>
              </div>
              <div className="form-group col-12">
                <input type="submit" name="Join" className="form-control btn btn-primary" />
              </div>
            </div>
          </form>
          <p className="text-white">We will never spam or give this address away.</p>
        </div>
      </div>      
    );
  }
}

export default JoinUs;