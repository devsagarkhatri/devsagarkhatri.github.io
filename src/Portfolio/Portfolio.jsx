import React, { Component } from "react";

import Welcome from "./Welcome/Welcome";
import About from "./About/About.jsx";
import Education from "./Education/Education";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="main_head1">
          <Welcome />
        </div>

        <div>
          <About />
        </div>
        <div>
          <Education />
        </div>
      </div>
    );
  }
}

export default Portfolio;
