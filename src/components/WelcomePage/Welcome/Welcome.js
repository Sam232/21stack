import React, { Component } from 'react';
import $ from 'jquery';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Testimony from '../Testimony/Testimony';
import AboutUs from '../AboutUs/AboutUs';
import JoinUs from '../JoinUs/JoinUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import './Welcome.css';

class Welcome extends Component {
  constructor(){
    super();
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => this.scrollFunction();
    this.slideUp($);

    var win = $(window);

    var allMods = $(".contactSlideUp");

    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible"); 
      } 
    });

    win.scroll(function(event) {
      
      allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in"); 
        } 
      });
      
    });
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }

  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  slideUp = ($) => {
    $.fn.visible = function(partial) {    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;    
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
  }

  render(){
    return(
      <div className="wrapper">
        <div id="content">
          <Navbar />
          <Header />
          <div className="container-fluid">
            <AboutUs />
          </div>
          <JoinUs />
          <div className="container-fluid">
            <Testimony />  
          </div>
          <ContactUs />    
          <Footer /> 

          <button onClick={this.topFunction} id="topBtn" title="Go to top"><span className="i fas fa-arrow-up"></span></button>    
        </div>
      </div>
    );
  }
}

export default Welcome;
