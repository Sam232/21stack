import React from 'react';
import './Header.css';

const Header = () => {
  return(
    <div className="videoContainer">
      <video className="video" autoPlay="autoplay">
        <source src="https://www.softnet.cloud/assets/uploads/final/sl_landing_video.mp4" type="video/mp4"/>
      </video> 
      <div className="container mt-5 text">
        <div className="d-none d-sm-block move">
          <h1 className="display-4 text-center text-light d-none d-sm-block move" style={{marginTop: "-200px"}}>We Provide AWS Consulting &amp; Technology Services</h1>
          <p className="lead text-center text-secondary  d-none d-sm-block">We design, architect, build, migrate and manage applications on AWS Cloud.
            Click away, and see which of our services suit your immediate needs.</p>
          <p className="lead mb-40 text-center  d-none d-sm-block">
            <a className="btn btn-primary btn-lg" href="#service" role="button">Get Started</a>
          </p>
        </div>
        <div className="d-block d-sm-none move">
          <h5 className="display-6 text-center text-white " style={{marginTop: "-190px"}}>We Provide AWS Consulting &amp; Technology Services</h5>       
          <p className="d-block d-sm-none text-center text-secondary">We design, architect, build, migrate and manage applications on AWS Cloud.
            Click away, and see which of our services suit your immediate needs.</p>        
          <p className="d-block d-sm-none mb-40 text-center">
            <a className="btn btn-primary btn-sm" href="#service" role="button">Get Started</a>
          </p>
        </div>       
      </div>      
    </div> 
  );
};

export default Header;