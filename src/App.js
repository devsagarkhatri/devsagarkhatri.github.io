import React, { Component } from "react";

import Header from "./components/Header.jsx";

import PFV_Panel from "./components/PFV_Panel.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PFV_Panel />
      </div>
    );
  }
}

export default App;
