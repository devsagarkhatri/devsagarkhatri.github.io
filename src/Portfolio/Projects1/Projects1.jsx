import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
import ListGroup from "./listGroup";
import "./Projects1.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { getProjects } from "./ProjectData";
import { getCategory } from "./ProjectData";
import { Paginate } from "./paginate";

class Projects1 extends Component {
  state = {
    projects: [...getProjects()],
    category: [],
    currentPage: 1,
    currentCategory: [],
    pageSize: 3,
  };

  componentDidMount() {
    const categories = [{ name: "All Categories" }, ...getCategory()];
    this.setState({ projects: getProjects(), category: getCategory() });
    console.log(...getCategory());
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (cat) => {
    this.setState({ currentCategory: cat, currentPage: 1 }); //ye kyun kiye currentPage: 1
  };

  render() {
    const { length: count } = this.state.projects;

    const { pageSize, currentPage, currentCategory } = this.state;
    console.log(currentCategory);

    if (count === 0)
      return (
        <React.Fragment>
          <p>This Module Is Under Construction.</p>
        </React.Fragment>
      );

    const projectRow = Paginate(this.state.projects, currentPage, pageSize);

    return (
      <div className="bg-img aboutFull main_wrap row ">
        <div className="col-sm-12 col-md-12 relative">
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
            <div className="row" style={{ width: "90vw" }}>
              <div className="col-md-3">
                {/* <ListGroup
                  items={this.state.category}
                  selectedItem={currentCategory.name}
                  onItemSelect={this.handleCategorySelect}
                /> */}
              </div>
              <div className="col-md-9">
                <ProjectCard projects={projectRow} />

                <br />
                <Pagination
                  itemCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects1;
