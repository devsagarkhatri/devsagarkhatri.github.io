import React, { Component } from 'react';
import "./menu.css";
import logo from "./images/logoText1.png";
import menuToggle from './menuToggle';


class Hamburger extends Component {
    state = { 
        active: false   
     }
     
    changeClick = () => {
        console.log(menuToggle);
        
        
    };

    render() { 
        
        
        
        
        return ( 
            <div className="container">
                <div className="navbar">
                    <div className="menu">
                        <img src={logo} height="25px" alt={""}/>
                        <div
                            className={menuToggle===false ? "hamburger-menu active" : "hamburger-menu"}                  
                            onClick={this.changeClick}
                        >
                            <div className="bar"></div>
                                <div className="links">                                
                                    <ul className="menu_ul">
                                            <li className="menu_li"><a className="" href="#home">Home</a></li>
                                        <br/><li className="menu_li"><a href="#abut">About</a></li>
                                        <br/><li className="menu_li"><a href="#education">Education</a></li>
                                        <br/><li className="menu_li"><a href="#experience">Experience</a></li>
                                        <br/><li className="menu_li"><a href="#projects">Projects</a></li>
                                        <br/><li className="menu_li"><a href="#contact">Contact</a></li>
                                    </ul>                          
                                </div>    
                        </div>
                    </div>
                </div>
                
          </div>
         );
    }
}
 
export default Hamburger;
