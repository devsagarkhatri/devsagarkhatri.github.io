import React, { Component } from "react";
import "./Projects.css";

class Timeline extends Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map((data1) => (
          <div className="d-inline col-sm-4  " key={data1.key}>
            <div
              className="card proCard"
              style={{
                width: "16vw",

                boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.03)",
              }}
            >
              <img
                src={data1.logo}
                alt="Card"
                style={{ width: "10vw", alignSelf: "center" }}
              />
              <div className="card-body ">
                <h4 className="card-title">{data1.technology}</h4>
                <p className="card-text">
                  <i>View my projects created using {data1.technology}</i>
                </p>
                <a href="#" className="btn btn-primary">
                  Open {data1.technology} Projects
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Timeline;
