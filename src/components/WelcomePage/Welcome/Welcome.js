import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Services from '../Services/Services';
import VideoPreview from '../VideoPreview/VideoPreview';
import Testimony from '../Testimony/Testimony';
import AboutUs from '../AboutUs/AboutUs';
import JoinUs from '../JoinUs/JoinUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

const Welcome = () => {
  return (
    <div className="wrapper">
      <div id="content">
        <Navbar />
        <Header />
        <div className="container-fluid">
          <AboutUs />
        </div>
        <JoinUs />
        <div className="container-fluid">
          <Services />
          <VideoPreview />
          <Testimony />          
          <ContactUs /> 
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
