import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
  state = {
    isOpen: true
  };

  render(){
    return(
      <footer id="footer">
        <div className="footerContainer">
          <div className="row container">
            <div className="col-4">
              <div className="row">
                <div className="col-12 mt-4">
                  <p className="text-white">Share:</p>
                  <div className="inline-block">
                    {}
                    <span><a href="#"><img src="" alt=""/></a></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-white">Follow Us:</p>
                  <div className="inline-block">
                    <a href="#"><span><i className="fab fa-facebook" style={{color: "#007BFF", margin: "5px", fontSize: "28px"}}></i></span></a>
                    <a href="#"><span><i className="fab fa-linkedin" style={{color: "#007BFF", margin: "5px", fontSize: "30px"}}></i></span></a>
                    <a href="#"><span><i className="fab fa-youtube" style={{color: "#FE0C1A", margin: "5px", fontSize: "30px"}}></i></span></a>
                    <a href="#"><span><i className="fab fa-twitter" style={{color: "#007BFF", margin: "5px", fontSize: "30px"}}></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 push-md-3 mt-3">
              <div className="row">
                <div className="col-4">
                  <p className="text-secondary font-weight-bold">ABOUT</p>
                  <div>
                    <h6 className="mt-4"><a href="#about" className="text-white">About Us</a></h6>
                    <h6 className="mt-4"><a href="#about" className="text-white">Mission</a></h6>
                    <h6 className="mt-4"><a href="#about" className="text-white">Vision</a></h6>
                  </div>
                </div>
                <div className="col-4">
                  <p className="text-secondary font-weight-bold">GET IN TOUCH</p>
                  <div>
                    <h6 className="mt-4"><a href="#contact" className="text-white">Contact Us</a></h6>
                    <h6 className="mt-4"><a href="#contact" className="text-white">Report Issue</a></h6>
                    <h6 className="mt-4"><a href="#contact" className="text-white">Feedback &amp; Suggestions</a></h6>
                  </div>
                </div>
                <div className="col-4">
                  <p className="text-secondary font-weight-bold">LEGAL</p>
                  <div>
                    <h6 className="mt-4"><a href="https://app.termly.io/document/terms-of-use-for-website/82ca816e-a83e-4daf-a47a-f044580bd8af" target="_blank" className="text-white">Copyright Us</a></h6>
                    <h6 className="mt-4"><a href="https://app.termly.io/document/terms-of-use-for-website/82ca816e-a83e-4daf-a47a-f044580bd8af" target="_blank" className="text-white">Privacy</a></h6>
                    <h6 className="mt-4"><a href="https://app.termly.io/document/terms-of-use-for-website/82ca816e-a83e-4daf-a47a-f044580bd8af" target="_blank" className="text-white">Terms and Conditions</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="moveFooterCopyright">
            <p className="text-white text-center">21ststack.com &reg; is a registered trademark.</p>
            <hr style={{backgroundColor: "#676767"}}/>
            <p className="text-white text-center">Copyright &copy; {new Date().getFullYear()} 21ststack.com</p>
          </div>
        </div>        
      </footer>
    );
  }
}

export default Footer;