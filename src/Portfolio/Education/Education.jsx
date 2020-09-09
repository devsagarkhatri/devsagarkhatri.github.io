import React, { Component } from "react";
import { getData } from "./EduData";
import "./Education.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Timeline from "./Timeline";

class Education extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data1 = [...getData()];
    this.setState({ data: data1 });
    console.log(this.state.data);
  }
  render() {
    return (
      <div className="aboutFull main_wrap row">
        <div className="col-sm-8 bg-secondary relative">
          <div className="backTextEd">Education</div>
          <div className="z2">
            <div className="heading" style={{ float: "left" }}>
              Education
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Timeline data={this.state.data} key={this.state.data.key} />
          </div>
        </div>
        <div className="col-sm-4 bg-light"></div>
      </div>
    );
  }
}

export default Education;
