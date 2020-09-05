import React, { Component } from "react";
import "./footer.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import logo from "./images/Picture3.png";
import git from "./images/github_icon.png";
import web from "./images/website_icon.png";
import linkedin from "./images/linkedin_icon.png";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="half_wrap row">
        <div className="col-sm-3 ">
          <img
            src={logo}
            height="40px"
            style={{ marginBottom: "1vh", marginTop: "6vh" }}
          />

          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-2">
              <img src={git} height="30px" />
            </div>

            <div className="col-sm-2">
              <img src={linkedin} height="30px" />
            </div>
            <div className="col-sm-2">
              <img src={web} height="30px" />
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
        <div className="col-sm-1 "></div>
        <div className="col-sm-3 "></div>
        <div className="col-sm-5 "></div>
      </div>
    );
  }
}

export default Footer;
