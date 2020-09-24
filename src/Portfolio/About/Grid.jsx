import React, { Component } from "react";
import "./about.css";

class Grid extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((data1) => (
          <div className="row grid" key={data1.key}>
            <img
              src={data1.logo}
              alt={data1.key}
              className="gridPic"
              title={data1.name}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Grid;
