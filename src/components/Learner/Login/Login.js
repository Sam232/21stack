import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      validation: {        
        emailError: "",
        passwordError: "",
        error: ""
      }
    };

    this.email = React.createRef();
    this.password = React.createRef();
  }

  authenticateUser = e => {
    e.preventDefault();

    const email = this.email.current.value;
    const password = this.password.current.value;

    if(!email){
      return this.setState({
        validation: {
          ...this.state.validation,
          emailError: "Email Address Is Required"
        }
      });
    }

    if(!password){
      return this.setState({
        validation: {
          ...this.state.validation,
          emailError: "",
          passwordError: "Password Is Required"
        }
      });
    }

    console.log(email)

  }

  render(){
    const { emailError, passwordError, error } = this.state.validation;
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
                <h4 className="log-title text-center"><span className="i fas fa-lock"></span> Log In</h4>
                <form onSubmit={this.authenticateUser.bind(this)}>
                  <div className="form-group">
                    <div className="text-danger">{emailError}</div>
                    <input type="email" className="form-control" placeholder="Email Address" ref={this.email}/>  
                  </div>
                  <div class="form-group">
                    <div className="text-danger">{passwordError}</div>
                    <input type="password" className="form-control" placeholder="Password" ref={this.password} />
                  </div>
                  <div className="log-line">
                    <div className="pull-left">
                      <div className="checkbox checkbox-primary space-bottom">
                        <label className="hide"><input type="checkbox" /></label>
                        <input type="checkbox" ref={this.rememberMe} />
                        <label htmlFor="checkbox1"><span>Remember Me</span></label>
                      </div>
                    </div>
                    <div className="pull-right">
                      <button type="submit" id="log-submit" className="btn btn-md btn-common btn-log">Log In</button>
                      <div id="msgSubmit" className="h3 text-center hidden"></div>
                      <div className="clearfix"></div>
                    </div>
                    <p><a href="#" className="forgot-password">Forgot your Password?</a></p>
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