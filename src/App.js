import React, { Component } from "react";
import "./App.css";
import "./components/menu.css";

import cogoToast from "cogo-toast";
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
    active: false,
    slide: 0,
    ismsg: true,
  };

  handleToggle() {
    this.setState({ active: !this.state.active });
  }

  componentDidMount() {
    if (this.state.ismsg) {
      // cogoToast.loading(
      //   "Use ⬅️ and ➡️ keys to navigate! Best viewed at 90% zoom.",
      //   {
      //     hideAfter: 5,
      //     position: "top-center",
      //   }
      // );
      // this.setState({ ismsg: false });
    }
  }

  slideChange(data) {
    this.setState({ slide: data });
    console.log("slide: ", this.state.slide);
  }

  handleIndexChange(index, indexLatest) {
    var s = indexLatest;
    this.setState({ slide: s });
    console.log(s);
  }

  render() {
    const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
    return (
      <div className="App">
        <div className={this.state.active === true ? "mainclick" : "main"}>
          <BindKeyboardSwipeableViews
            enableMouseEvents={true}
            index={this.state.slide}
            onChangeIndex={(index) => {
              this.setState({ slide: index });
            }}
          >
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
                onClick={() => this.handleToggle()}
                className={
                  this.state.active === true
                    ? "hamburger-menu active"
                    : "hamburger-menu"
                }
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
                    <li
                      className="menu_li"
                      onClick={(event) => {
                        this.setState({ slide: parseInt("0") });
                      }}
                    >
                      <a href="#home">Home</a>
                    </li>
                    <br />
                    <li
                      className="menu_li"
                      onClick={(event) => {
                        this.setState({ slide: parseInt("1") });
                      }}
                    >
                      <a href="#about">About</a>
                    </li>
                    <br />
                    <li
                      className="menu_li"
                      onClick={(event) => {
                        this.setState({ slide: parseInt("2") });
                      }}
                    >
                      <a href="#education">Education</a>
                    </li>
                    <br />
                    <li
                      className="menu_li"
                      onClick={(event) => {
                        this.setState({ slide: parseInt("3") });
                      }}
                    >
                      <a href="#experience">Experience</a>
                    </li>
                    <br />
                    <li
                      className="menu_li"
                      onClick={(event) => {
                        this.setState({ slide: parseInt("4") });
                      }}
                    >
                      <a href="#projects">Projects</a>
                    </li>
                    <br />
                    <li
                      className="menu_li"
                      onClick={(event) => {
                        this.setState({ slide: parseInt("5") });
                      }}
                    >
                      <a href="#contact">Contact</a>
                    </li>
                    <br />
                    <li
                      className="menu_li"
                      onClick={(event) => {
                        this.setState({ slide: this.state.slide });
                      }}
                    >
                      <a href="#">Close</a>
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
