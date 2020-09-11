import React, { Component } from "react";
import "./about.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="aboutFull main_wrap row">
        <div className="col-sm-4 bg-about">
          <div
            className="LI-profile-badge"
            data-version="v1"
            data-size="large"
            data-locale="en_US"
            data-type="vertical"
            data-theme="dark"
            data-vanity="sagarkhatri"
          >
            <a
              className="LI-simple-link"
              href="https://in.linkedin.com/in/sagarkhatri?trk=profile-badge"
            >
              Sagar Khatri
            </a>
          </div>
        </div>
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
