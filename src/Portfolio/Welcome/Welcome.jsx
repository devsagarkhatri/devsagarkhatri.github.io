import React, { Component } from "react";

import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./welcome.css";

const lenx = [410, 350, 360, 500];
const leny = [310, 570, 410, 700];
const font = ["4vh", "5vh", "4vh", "5vh"];
const skill = [
  "Python Developer",
  "Java Developer",
  "Machine Learning Enthusiast",
  "React Developer",
];
class Welcome extends Component {
  state = {
    x: 410,
    y: 318,
    font: "normal",
    skill: "Python Developer",
    current: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => this.changeDim(), 2000);
  }

  changeDim() {
    let newcurrent = 0;
    const { current } = this.state;
    const len = lenx.length;

    if (current !== len - 1) {
      newcurrent = current + 1;
    } else {
      newcurrent = 0;
    }

    this.setState({ current: newcurrent });
    this.setState({ x: lenx[newcurrent] });
    this.setState({ y: leny[newcurrent] });
    this.setState({ font: font[newcurrent] });
    this.setState({ skill: skill[newcurrent] });
  }

  render() {
    return (
      <div className="main_wrap ">
        <div
          className="rect"
          style={{
            height: this.state.x,
            width: this.state.y,
            fontSize: this.state.font,
          }}
        >
          Hi, My name is Sagar Khatri. I'm a {this.state.skill}.
        </div>
      </div>
    );
  }
}

export default Welcome;
