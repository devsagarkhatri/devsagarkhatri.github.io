import React, { Component } from "react";
import "./App.css";
import "./components/menu.css";

import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

import About from "./Portfolio/About/About.jsx";
import Education from "./Portfolio/Education/Education";
import Experience from "./Portfolio/Experience/Experience";
import Welcome1 from "./Portfolio/Welcome1/Welcome1";
import Projects1 from "./Portfolio/Projects1/Projects1";
import Footer1 from "./components/Footer/Footer1";
import logo from "./components/images/logoText1.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.slideChange = this.slideChange.bind(this);
  }

  state = {
    active: true,
    slide: 1,
    isBusy: false,
  };

  handleToggle() {
    this.setState({ active: !this.state.active });
  }

  componentDidMount() {
    // if(this.state.isBusy){
    //   setInterval(() => {
    //     this.setState({isBusy: false})
    //   }, 6000)
    // }
  }

  slideChange(data) {
    console.log("data : ", data);
    console.log("slide: ", this.state.slide);
    this.setState({ slide: data });
  }

  handleIndexChange(event) {
    var s = event.indexLatest;
    this.setState({ slide: s });
  }

  render() {
    const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
    return (
      <div className="App">
        <div className={this.state.active === true ? "mainclick" : "main"}>
          <BindKeyboardSwipeableViews enableMouseEvents={true}>
            <Welcome1 />
            <About />
            <Education />
            <Experience />
            <Projects1 />
            <Footer1 />
          </BindKeyboardSwipeableViews>
        </div>
        <div className="container-fluid">
          <div className="navbar">
            <div className="menu">
              <img src={logo} height="25px" alt={""} />
              <div
                className={
                  this.state.active === true
                    ? "hamburger-menu active"
                    : "hamburger-menu"
                }
                onClick={() => this.handleToggle()}
              >
                <div className="bar"></div>
                <div
                  className={
                    this.state.active === true ? "links" : "links hide"
                  }
                >
                  <ul
                    className={
                      this.state.active === true ? "menu_ul" : "menu_ul hide"
                    }
                  >
                    <li className="menu_li">
                      <a href="#home">Home</a>
                    </li>
                    <br />
                    <li className="menu_li">
                      <a href="#about">About</a>
                    </li>
                    <br />
                    <li className="menu_li">
                      <a href="#education">Education</a>
                    </li>
                    <br />
                    <li className="menu_li">
                      <a href="#experience">Experience</a>
                    </li>
                    <br />
                    <li className="menu_li">
                      <a href="#projects">Projects</a>
                    </li>
                    <br />
                    <li className="menu_li">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
