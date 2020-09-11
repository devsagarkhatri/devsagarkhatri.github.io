import React, { Component } from "react";

import Welcome from "./Welcome/Welcome";
import About from "./About/About.jsx";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
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
        <Projects />
      </div>
    );
  }
}

export default Portfolio;
