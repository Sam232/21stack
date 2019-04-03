import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return(
    <div id="about" style={{position: "relative"}}>
      <h1 className="display-6 text-center font-weight-bold mt-4">About Us</h1>
      <div className="row">        
        <div className="col-md-8">
          <h5 className="font-weight-bold">Mission</h5>
          <p>
          Softnet is a mission driven company that embrace innovation to provide high quality, state-of-the-art technology solutions to our clients. Our production-quality training and educational resources, empowers anyone with a desire to learn and understand the use of technology to solve today's basic human challenges.
          </p>
          <h5 className="font-weight-bold">Vision</h5>
          <p>
          To drive innovation and be a 1-stop-shop for groundbreaking cloud-based technology solutions and know-how. We envision a world where education is free to anyone with a desire to have a positive impact on society by overcoming the world's challenges, through the use of technology.
          </p>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Lu1Rcu_1UR0?rel=0"       allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;