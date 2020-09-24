import React, { Component } from "react";
import "./footer.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import logo from "./images/Picture3.png";
import git from "./images/github_icon.png";
import web from "./images/mail_icon.png";
import linkedin from "./images/linkedin_icon.png";
import fb from "./images/fb_icon.png";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="half_wrap rounded-top footer " id="footer">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img
              alt=""
              src={logo}
              height="90px"
              style={{ marginBottom: "5vh", marginTop: "4vh" }}
            />

            <br />
            <div className="row">
              <div className="col-sm-12"></div>
            </div>
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                {/* <hr style={{ borderStyle: "dashed" }}></hr> */}
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-1">
                <a className="email" href="#">
                  <img alt="" src={web} height="30px" width="30px" />
                </a>
              </div>
              <div className="col-sm-1">
                <a className="email" href="#">
                  <img alt="" src={git} height="30px" />
                </a>
              </div>
              <div className="col-sm-1">
                <a className="email" href="#">
                  <img alt="" src={linkedin} height="30px" />
                </a>
              </div>
              <div className="col-sm-1">
                <a className="email" href="#">
                  <img alt="" src={fb} height="30px" />
                </a>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="pull-left copyright">
            {" "}
            Copyright © Sagar Khatri 2020. All right reserved.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
