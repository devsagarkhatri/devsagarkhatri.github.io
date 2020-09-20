import React, { Component } from "react";

import Welcome from "./Welcome/Welcome";
import About from "./About/About.jsx";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
// import Projects from "./Projects/Projects";
import Projects1 from "./Projects1/Projects1";
class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="main_head1">
          <Welcome />
        </div>

        <About />
        <Education />
        <Experience />
        <Projects1 />
      </div>
    );
  }
}

export default Portfolio;
