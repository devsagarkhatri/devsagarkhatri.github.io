import React, { Component } from "react";

import "./../App.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap";
import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import PageProgress from "react-page-progress";
import logo from "./images/Picture0.png";
import PFV_Panel from "../ReactProjects/PFVisualizer/PFV_Panel";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="nav_head sticky-top show navbar navbar-expand-lg navbar-dark ">
          <a className="navbar-brand text-center" href="#">
            <img alt="" src={logo} height="40px" className="imglogo" />
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item m-2">
                <a className="nav-link text-white" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item m-2 dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <div className="blur">
                  <ul
                    className="dropdown-menu "
                    role="menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item text-white" href={PFV_Panel}>
                        PathFinding Visualizer
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white " href="#">
                        Something else
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white " href="#">
                        Something esle here
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item m-2">
                <a className="nav-link  text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <PageProgress
            color={
              "linear-gradient(90deg,rgba(0,0,0,0),rgba(250,0,0,.3),rgba(255,0,0,.7))"
            }
            height={"3px"}
          />
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
