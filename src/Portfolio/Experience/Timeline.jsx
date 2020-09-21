import React, { Component } from "react";
import "./Experience.css";
class Timeline extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.exp.map((data1) => (
          <div className="row" key={data1.key}>
            <br />
            <div className="col-sm-9">
              <div className="list">
                <h4>{data1.company}</h4>
                <br />
                <h5>
                  {data1.role},{" " + data1.tenure}
                </h5>
                <hr />
                <h6 className="desc1">{'"' + data1.desc + '"'}</h6>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="list">
                <img src={data1.logo} alt={data1.key} className="exlogo" />
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Timeline;
