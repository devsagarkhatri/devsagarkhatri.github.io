import React, { Component } from "react";
import "./Projects1.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

class ProjectCard extends Component {
  state = {
    isTitleVisible: false,
  };

  showTitle = () => {
    this.setState({ isTitleVisible: true });
    console.log(this.state.isTitleVisible);
  };
  hideTitle = () => {
    this.setState({ isTitleVisible: false });
    console.log(this.state.isTitleVisible);
  };
  handleVisibility = () => {
    console.log(this.state.isTitleVisible ? "text-dark " : "text-dark hide");
    return this.state.isTitleVisible ? "text-dark " : "text-dark hide";
  };
  render() {
    return (
      <div className="row justify-content-center">
        {this.props.projects.map((project) => (
          <div
            className="col-md-4x"
            style={{ marginRight: "20px" }}
            key={project.pic}
          >
            <div
              className="frame bg-transparent"
              onMouseEnter={(event) => this.setState({ isTitleVisible: true })}
              onMouseLeave={(event) => this.setState({ isTitleVisible: false })}
              // style={{ border: "black 4px solid" }}
            >
              <a href={project.link} target="_blank">
                <img
                  src={project.pic}
                  className="img img-responsive"
                  height="200px"                  
                  alt=""
                />
              </a>
            </div>
            <div className="text-dark">
              <i
                className={
                  this.state.isTitleVisible ? "text-dark " : "text-dark hide"
                }
              >
                {project.name}
              </i>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectCard;
