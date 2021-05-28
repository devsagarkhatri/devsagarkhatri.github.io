import React, { Component } from "react";
//import { Link } from "react-router-dom";
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
    category: [{ key: 0, technlogy: "All", logo: "" }, ...getCategory()],
    currentPage: 1,
    currentCategory: [{ key: 0, technplogy: "All", logo: "" }],
    pageSize: 4,
  };

  componentDidMount() {
    const categories = [
      { key: 0, technology: "All", logo: "" },
      ...getCategory(),
    ];
    this.setState({ projects: getProjects(), category: categories });
    // console.log("category => " + this.state.category);
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (cat) => {
    if (cat.technology !== "All") {
      var projects = [...getProjects()].filter(
        (x) => x.category.name === cat.technology
      );
    } else {
      var projects = [...getProjects()];
    }
    this.setState({ currentCategory: cat, projects: projects, currentPage: 1 }); //ye kyun kiye currentPage: 1
  };

  render() {
    const { length: count } = this.state.projects;
    const { pageSize, currentPage, currentCategory } = this.state;
    // console.log(currentCategory);

    if (count === 0)
      return (
        <React.Fragment>
          <i className="text-white">This Module Is Under Construction.</i>
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
            <div className="row" style={{ width: "90vw" }}>
              <div className="col-md-2">
                <ListGroup
                  items={this.state.category}
                  selectedItem={currentCategory.name}
                  onItemSelect={this.handleCategorySelect}
                />
              </div>
              <div className="col-md-7 justify-text-center">
                <ProjectCard projects={projectRow} />
                <br />
                <div className="row justify-content-center">
                  <Pagination
                    itemCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                  />
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects1;
