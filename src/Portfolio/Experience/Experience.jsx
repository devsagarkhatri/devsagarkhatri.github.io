import React, { Component } from "react";
import { getExp } from "./ExpData.js";
import "./Experience.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Timeline from "./../Experience/Timeline";
import Pagination from "./../Experience/Pagination";
import { Paginate } from "./paginate.js";
class Experience extends Component {
  state = {
    exp: [],
    currentPage: 1,
    pageSize:2,
  };
  componentDidMount() {
    const data = [...getExp()];
    this.setState({ exp: data });
    //console.log(this.state.exp.values);
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.state.exp;
    const { pageSize, currentPage } = this.state;
    const experienceRow = Paginate(this.state.exp, currentPage,pageSize)
    return (
      <div className="aboutFull main_wrap row">
        <div className="col-sm-4 bg-experience"></div>
        <div className="col-sm-8 bg-dark">
          <div className="backTextEd">Experience</div>
          <div className="z2">
            <div className="heading">Experience</div>
            <br /> <br />
            <Timeline exp={experienceRow} key={experienceRow.key} />
            <Pagination
                    itemCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                  />
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
