import React, { Component } from "react";
import "./../App.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import logo from "./images/Picture3.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="nav_head sticky-top show navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand text-center" href="#">
          <img alt="" src={logo} height="35px" />
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
                className="nav-link show dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul
                className="dropdown-menu"
                role="menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item m-2" href="#">
                    PathFinding Visualizer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item m-2" href="#">
                    Something else
                  </a>
                </li>
                <li>
                  <a className="dropdown-item m-2" href="#">
                    Something esle here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link  text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
