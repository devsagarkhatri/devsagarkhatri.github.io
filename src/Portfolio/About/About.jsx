import React, { Component } from "react";
import "./about.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="aboutFull main_wrap row">
        <div className="col-sm-4 bg-light">Hello</div>
        <div className="col-sm-8 bg-dark">World</div>
      </div>
    );
  }
}

export default About;
