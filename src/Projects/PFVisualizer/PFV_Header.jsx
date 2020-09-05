import React, { Component } from "react";
import reactDOM from "react-dom";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

class PFV_Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg -lg  bg-light">
        <div className="navbar mr-auto ml-auto navbar-expand" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Algorithms
              </a>
              <ul
                className="dropdown-menu"
                role="menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Dijkstra's Algorithm
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Greedy Best-first Search
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Breadth-first Search
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Depth-first Search
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mazes and Patterns
              </a>
              <ul
                className="dropdown-menu"
                role="menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Basic Random Maze
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Basic Weight Maze
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Simple Stair Pattern
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item ">
              <button
                className="btn btn-outline-info m-2 my-2 my-sm-0"
                type="submit"
              >
                Add Bomb
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Visualize!
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-info m-2 my-2 my-sm-0"
                type="submit"
              >
                Clear Boerd
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
              >
                Clear Wall & Weights
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default PFV_Header;
