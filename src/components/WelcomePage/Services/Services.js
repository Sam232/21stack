import React from 'react';
import './Services.css';

const Services = () => {
  return(
    <div id="service">
        <div className="jumbotron row">
          <div className="col-md-12">
            <div className="row">             
              <h2 className="text-center text-dark">Our Services</h2>
            </div>
            <div className="row" >
              <div className="col-md-4 col-sm-6">
                <div class="card">      
                  <img className="img-fluid card-image2" src="https://www.softnet.cloud/assets/uploads/final/sl_consulting.png" alt=""/>
                  <div class="card-block container">
                    <h3 class="card-title">Consultation</h3>
                    <p class="card-text text-secondary">We provide AWS-Based Technology Solutions to help our customers design, architect, build, migrate, and manage their infrastructure on AWS. We implement automation using DevOps Tools and provide Software Solutions that are either hosted on, or integrated with, the AWS platform.</p>
                    <a href="#" class="btn card-btn btn-link"><span><i className="fas fa-arrow-circle-right"></i></span> Let's Talk</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card">      
                  <div class="card-block container">
                    <img className="img-fluid card-image" src="https://www.softnet.cloud/assets/uploads/final/sl_education.png" alt=""/>
                    <h3 class="card-title">Education</h3>
                    <p class="card-text text-secondary">We are committed to working closely with Universities, Colleges and Non-Profit Organizations to invite innovation and technology know-how to bridge the gap between what students are being taught and what they need to know to hit the ground running in the corporate world.</p>
                    <a href="#" class="btn card-btn btn-link"><span><i className="fas fa-arrow-circle-right"></i></span> Let's Talk</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card">                      
                  <div class="card-block container">
                    <img className="img-fluid card-image" src="https://www.softnet.cloud/assets/uploads/final/sl_training.png" alt=""/>
                    <h3 class="card-title">Training</h3>
                    <p class="card-text text-secondary">We provide training resources to companies and organizations that wish to empower their employees to manage their AWS-Based Technology solutions in-house. We work closely with Application Development Teams to create and automate their CI/CD Pipeline using DevOps Tools.</p>
                    <a href="#" class="btn card-btn btn-link"><span><i className="fas fa-arrow-circle-right"></i></span> Let's Talk</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Services;