import React, { Component } from "react";

import Header from "./components/Header.jsx";

// import PFV_Panel from "./ReactProjects/PFVisualizer/PFV_Panel.jsx";
import "./App.css";

import Portfolio from "./Portfolio/Portfolio";
import Footer from "./components/Footer.jsx";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
