import React, { Component } from "react";
import "./about.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="aboutFull main_wrap row">
        <div className="col-sm-4 bg-light"></div>
        <div className="col-sm-8 bg-dark">
          <div className="backTextAb">About</div>
          <div className="z2">
            <div className="heading">About</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
