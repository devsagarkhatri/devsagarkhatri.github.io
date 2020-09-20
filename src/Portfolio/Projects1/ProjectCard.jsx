import React from "react";
import "./Projects1.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

const ProjectCard = (props) => {
  const projects = props;
  return (
    <div className="row" style={{ border: "0px white solid" }}>
      {props.projects.map((project) => (
        <div
          className="col-md-4x"
          style={{ marginRight: "20px" }}
          key={project.pic}
        >
          <div className="bg-light profile-card-4 text-center">
            <img
              src={project.pic}
              className="img img-responsive"
              height="295px"
            />
            <div className="profile-content">
              <div className="text-dark  profile-description">
                <strong className="text-dark">{project.name}</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
