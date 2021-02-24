import React, { Component } from "react";


import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';

//import Welcome from "./Welcome/Welcome";
import About from "./About/About.jsx";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
//import Projects from "./Projects/Projects";

import Welcome1 from "./Welcome1/Welcome1";
import Projects1 from "./Projects1/Projects1";
import Footer1 from "./../components/Footer1";



class Portfolio extends Component {
  
  componentDidMount(){
    
  }

  render() {
    
    const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
    return (    
          <BindKeyboardSwipeableViews >            
            <Welcome1 />
            <About />
            <Education />
            <Experience />
            <Projects1 />
            <Footer1/>
          </BindKeyboardSwipeableViews>
    );
  }
}

export default Portfolio;
