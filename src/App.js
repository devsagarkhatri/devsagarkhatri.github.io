import React, { Component } from "react";

// import PFV_Panel from "./ReactProjects/PFVisualizer/PFV_Panel.jsx";
import "./App.css";
import menuToggle from "./components/menuToggle";

import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';

//import Welcome from "./Welcome/Welcome";
import About from "./Portfolio/About/About.jsx";
import Education from "./Portfolio/Education/Education";
import Experience from "./Portfolio/Experience/Experience";
//import Projects from "./Projects/Projects";
import Welcome1 from "./Portfolio/Welcome1/Welcome1";
import Projects1 from "./Portfolio/Projects1/Projects1";
import Footer1 from "./components/Footer1";


//import logo from "./components/images/Picture3.png";
import Hamburger from './components/hamburger';
import logo from "./components/images/logoText1.png";
import Preloader from "./Portfolio/Preloader/Preloader";



class App extends Component {
<<<<<<< HEAD
  constructor(props){
    super(props)
    this.slideChange=this.slideChange.bind(this);
    
    
  }
  
  state = {   
    active:false,
    slide:0,
    isBusy:true
=======
  
  state = {   
    active:false,
    slide:1
>>>>>>> 4b34957108c7f3f8eee2672154432b52c303d285
  };
  handleToggle(){
      this.setState({ active: !this.state.active })
    } 
  componentWillUnmount(){

  }
<<<<<<< HEAD
  componentDidMount(){
    if(this.state.isBusy){
      setInterval(() => {
        this.setState({isBusy: false})
      }, 6000)
    }
  }

  slideChange(data){
    console.log("data : ",data)
    console.log("slide: ",this.state.slide)
    this.setState({slide:data})
  }
  handleIndexChange(event){
    var s = event.indexLatest;
    this.setState({slide:s});
  }

  render() {    
    
    if(this.state.isBusy){
      return(
        <div className="App">          
            <Preloader/>          
        </div>  
      );
    }

    const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
    return (
      <div className="App">     
          
        <div className={this.state.active===true ? "mainclick" : "main"}>
        <BindKeyboardSwipeableViews   enableMouseEvents={true}>            
            <Welcome1 />            
=======

  render() {    
    const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
    return (
      <div className="App">       
        <div className={this.state.active===true ? "mainclick" : "main"}>
        <BindKeyboardSwipeableViews >
                 
            <Welcome1 />
>>>>>>> 4b34957108c7f3f8eee2672154432b52c303d285
            <About />
            <Education />
            <Experience />
            <Projects1 />
            <Footer1/>
          </BindKeyboardSwipeableViews>
        </div>
        <div className="container">
                <div className="navbar">
                    <div className="menu">
                        <img src={logo} height="25px" alt={""}/>
                        <div
                            className={this.state.active===true ? "hamburger-menu active" : "hamburger-menu"}                  
                            onClick={() =>this.handleToggle()}
                        >
                            <div className="bar"></div>
                                <div className={this.state.active===true ? "links" : "links hide"}>                                
                                    <ul className={this.state.active===true ? "menu_ul" : "menu_ul hide"}>
<<<<<<< HEAD
                                             <li className="menu_li"><a href="#home" onClick={()=>this.slideChange(0)}>Home</a></li>
                                        <br/><li className="menu_li"><a href="#about" onClick={()=>this.slideChange(1)}>About</a></li>
                                        <br/><li className="menu_li"><a href="#education" onClick={()=>this.slideChange(2)}>Education</a></li>
                                        <br/><li className="menu_li"><a href="#experience" onClick={()=>this.slideChange(3)}>Experience</a></li>
                                        <br/><li className="menu_li"><a href="#projects" onClick={()=>this.slideChange(4)}>Projects</a></li>
                                        <br/><li className="menu_li"><a href="#contact" onClick={()=>this.slideChange(5)}>Contact</a></li>
=======
                                            <li className="menu_li"><a className="" href="#home">Home</a></li>
                                        <br/><li className="menu_li"><a href="#abut">About</a></li>
                                        <br/><li className="menu_li"><a href="#education">Education</a></li>
                                        <br/><li className="menu_li"><a href="#experience">Experience</a></li>
                                        <br/><li className="menu_li"><a href="#projects">Projects</a></li>
                                        <br/><li className="menu_li"><a href="#contact">Contact</a></li>
>>>>>>> 4b34957108c7f3f8eee2672154432b52c303d285
                                    </ul>                          
                                </div>    
                        </div>
                    </div>
                </div>
                
          </div>
      </div>
    );
  }
}

export default App;
