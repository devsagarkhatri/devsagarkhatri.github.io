import React, { Component } from "react";

import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./welcome1.css";



// const lenx = [410, 350, 360, 500];
// const leny = [310, 570, 410, 400];
// const font = ["4vh", "5vh", "4vh", "5vh"];

const lenx = ["35vw", "35vw", "35vw", "35vw"];
const leny = ["80vh", "80vh", "80vh", "80vh"];
const font = ["4vh", "4vh", "4vh", "4vh"];

const skill = [  
  "Python Developer",
  "Java Developer",
  "ML Enthusiast",
  "React Developer",
];

class Welcome extends Component {
  state = {
    x: "30vw",
    y: "30vw",
    font: "4vh",    
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
        <React.Fragment>
              <div className="welcome1"></div>                        
                <div
                    className="rect font-effect-emboss"
                    style={{
                        fontSize: this.state.font,
                        border:"1px solid"
                    }}
                >
                    Hi, My name is Sagar Khatri.<br/> I'm a {this.state.skill}.
                </div>
            
        </React.Fragment>
    );
  }
}

export default Welcome;
