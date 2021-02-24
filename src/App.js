import React, { Component } from "react";

// import PFV_Panel from "./ReactProjects/PFVisualizer/PFV_Panel.jsx";
import "./App.css";
import menuToggle from "./components/menuToggle";
import Portfolio from "./Portfolio/Portfolio";


//import logo from "./components/images/Picture3.png";
import Hamburger from './components/hamburger';




class App extends Component {
  state = {   
    active:false
  };
  handleToggle(x){
      this.setState({ active: x })
    } 
  
  render() {    
    return (
      <div className="App">       
        <div className={menuToggle===false ? "mainclick" : "main"}>
          <Portfolio index={3}/>
        </div>
        <Hamburger />        
      </div>
    );
  }
}

export default App;
