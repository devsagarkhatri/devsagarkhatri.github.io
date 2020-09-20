import React, { Component } from "react";

import Header from "./components/Header.jsx";

// import PFV_Panel from "./ReactProjects/PFVisualizer/PFV_Panel.jsx";
import "./App.css";

import Portfolio from "./Portfolio/Portfolio";
import Footer from "./components/Footer.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main_head"></div>
        <Header />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
