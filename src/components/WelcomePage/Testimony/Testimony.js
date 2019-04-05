import React from 'react';
import './Testimony.css';

const Testimony = () => {
  return(
    <div id="testimony">
        <div className="jumbotron row">
          <div className="col-md-12">
            <div className="row mx-auto">             
              <div className="col-12">
                <h2 className="text-center text-dark">Testimonials</h2>
              </div>
              <div className="col-12">
                <p className="lead text-center text-secondary">What our students are saying</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="card testimonyCard pushCard">      
                  <img className="img-fluid card-image d-none d-sm-block" src="https://wdef.com/wp-content/uploads/2018/11/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man-3.jpg" alt=""/>
                  <img className="img-fluid card-image imgPhone d-none d-block d-sm-none" src="https://wdef.com/wp-content/uploads/2018/11/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man-3.jpg" alt=""/>
                  <div className="card-block container">
                    <h4 className="card-title text-secondary mt-1">John Doe</h4>
                    <p className="card-text text-secondary">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem recusandae quas quasi animi temporibus ducimus itaque dolores, fuga assumenda totam officia est consectetur at vitae reprehenderit necessitatibus repellat. Sequi!"</p>
                    <div className="row mx-auto">
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-twitter text-dark"></i></span></a>
                      </div>
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-linkedin text-dark"></i></span></a>
                      </div>
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-facebook text-dark"></i></span></a>
                      </div>
                    </div>
                    <div className="mt-3"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card testimonyCard pushCard"> 
                  <img className="img-fluid card-image d-none d-sm-block" src="https://www.psychology.org.au/getmedia/e9cc848c-7097-4ac9-acce-ee1202bf958d/Training-careers-Studying-psychology-Undergrad-study-1000x500.jpg?width=1000&height=500&ext=.jpg%20alt=" alt=""/> 
                  <img className="img-fluid card-image imgPhone d-none d-block d-sm-none" src="https://www.psychology.org.au/getmedia/e9cc848c-7097-4ac9-acce-ee1202bf958d/Training-careers-Studying-psychology-Undergrad-study-1000x500.jpg?width=1000&height=500&ext=.jpg%20alt=" alt=""/> 
                  <div className="card-block container">                    
                    <h4 className="card-title text-secondary mt-1">Joseph Doe</h4>
                    <p className="card-text text-secondary">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem recusandae quas quasi animi temporibus ducimus itaque dolores, fuga assumenda totam officia est consectetur at vitae reprehenderit necessitatibus repellat. Sequi!"</p>
                    <div className="row mx-auto">
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-twitter text-dark"></i></span></a>
                      </div>
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-linkedin text-dark"></i></span></a>
                      </div>
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-facebook text-dark"></i></span></a>
                      </div>
                    </div>
                    <div className="mt-3"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card testimonyCard pushCard">
                  <img className="img-fluid card-image d-none d-sm-block" src="https://s16815.pcdn.co/wp-content/uploads/2017/06/iStock-609683672-studying.jpg" alt=""/>
                  <img className="img-fluid card-image imgPhone d-none d-block d-sm-none" src="https://s16815.pcdn.co/wp-content/uploads/2017/06/iStock-609683672-studying.jpg" alt=""/>
                  <div className="card-block container">                    
                    <h4 className="card-title text-secondary mt-1">Jane Doe</h4>
                    <p className="card-text text-secondary">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem recusandae quas quasi animi temporibus ducimus itaque dolores, fuga assumenda totam officia est consectetur at vitae reprehenderit necessitatibus repellat. Sequi!"</p>
                    <div className="row mx-auto">
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-twitter text-dark"></i></span></a>
                      </div>
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-linkedin text-dark"></i></span></a>
                      </div>
                      <div className="col-4">
                        <a href="#"><span><i className="fab fa-facebook text-dark"></i></span></a>
                      </div>
                    </div>
                    <div className="mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Testimony;