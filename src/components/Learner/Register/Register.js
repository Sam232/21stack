import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      validation: { 
        fullNameError: "",       
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        error: ""
      }
    };

    this.fullName = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.confirmPassword = React.createRef();
  }

  authenticateUser = e => {
    e.preventDefault();

    const fullName = this.fullName.current.value; 
    const email = this.email.current.value;
    const password = this.password.current.value;
    const confirmPassword = this.confirmPassword.current.value;

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

    if(!password){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          passwordError: "Password Is Required"
        }
      });
    }

    if(password.length < 8){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          passwordError: "Password Length Should Be Greater Than 7"
        }
      });
    }

    if(!confirmPassword){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          passwordError: "",
          confirmPasswordError: "Confirm Password Is Required"
        }
      });
    }

    if(confirmPassword.length < 8){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          passwordError: "Confirm Password Length Should Be Greater Than 7"
        }
      });
    }

    if(password !== confirmPassword){
      return this.setState({
        validation: {
          ...this.state.validation,
          fullNameError: "",
          emailError: "",
          passwordError: "",
          confirmPasswordError: "Passwords Must Match"
        }
      });
    }

    console.log(email)

  }

  render(){
    const { fullNameError, emailError, passwordError, confirmPasswordError, error } = this.state.validation;
    console.log(emailError)
    return(
      <div>
        <nav className="navbar navbar-toggleable-sm navbar-light bg-black">
          <div className="container">
            <a className="navbar-brand" href="/"><span><i className="fa fa-code"></i>21stack</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar4" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbar4">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/"><i className="fas fa-home"></i> Go to home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="page-image">
          <div className="row">
            <div className="col-11 col-md-4 ml-auto mr-auto" style={{marginTop: "40px"}}>
              <div id="login-form">
                <h4 className="log-title text-center"><span className="i fas fa-pencil-alt"></span> Register</h4>
                <form onSubmit={this.authenticateUser.bind(this)}>                  
                  <div className="form-group">
                    <div className="text-danger">{fullNameError}</div>
                    <input type="text" className="form-control" placeholder="Full Name" ref={this.fullName} />
                  </div>
                  <div className="form-group">
                    <div className="text-danger">{emailError}</div>
                    <input type="email" className="form-control" placeholder="Email Address" ref={this.email}/>  
                  </div>
                  <div className="form-group">
                    <div className="text-danger">{passwordError}</div>
                    <input type="password" className="form-control" placeholder="Password" ref={this.password} />
                  </div>
                  <div className="form-group">
                    <div className="text-danger">{confirmPasswordError}</div>
                    <input type="password" className="form-control" placeholder="Confirm Password" ref={this.confirmPassword} />
                  </div>
                  <div className="log-line">
                    <div className="pull-right">
                      <button type="submit" id="log-submit" className="btn btn-md btn-common btn-log">Register</button>
                      <div id="msgSubmit" className="h3 text-center hidden"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div> 
                </form>             
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Login;