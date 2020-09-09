import React, { Component } from "react";
import "./Education.css";

class Timeline extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        {this.props.data.map((data1) => (
          <div className="row">
            <div className="col-sm-2">
              <div className="list">
                <img
                  src={data1.logo}
                  alt={data1.key}
                  height="100px"
                  style={{ borderRadius: "100px" }}
                />
              </div>
            </div>
            <div className="col-sm-10">
              <div className="list">
                <h3>{data1.degree}</h3>
                <br />
                <h5>
                  <i>{data1.university}</i>
                </h5>
                <h5>{data1.tenure}</h5>
                <br />
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Timeline;
