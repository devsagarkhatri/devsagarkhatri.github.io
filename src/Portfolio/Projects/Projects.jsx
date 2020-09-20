import React, { Component } from "react";
import { getData } from "./proData.js";
import "./Projects.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

import Timeline from "./Timeline";

class Education extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data1 = [...getData()];
    this.setState({ data: data1 });
    //console.log(this.state.data);
  }
  render() {
    return (
      <div className="aboutFull main_wrap row">
        <div className="col-sm-12 col-md-8 bg-chrome relative">
          <div className="backTextEd">Projects</div>
          <div className="z2">
            <div className="heading" style={{ float: "left" }}>
              Projects
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Timeline data={this.state.data} key={this.state.data.key} />
          </div>
        </div>
        <div className="col-md-4 hidden-sm-down probgpic"></div>
      </div>
    );
  }
}

export default Education;
