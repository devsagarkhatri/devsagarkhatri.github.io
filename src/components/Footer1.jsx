import React, { Component } from "react";
import "./footer1.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
// import logo from "./images/Picture3.png";
// import { Link } from 'react-router-dom';
class Footer1 extends Component {
  state = {};
  render() {
    return (
      <div className=" col-sm-12 bg-image"> 
          
         
        <div className="col-sm-6">
          <div className="card tilted">
            <div className="logo"></div>
            <div className="logoText"></div>
          </div>
          <div className="card mail">
            <div className="left">
              <div className="logoText"></div>
              <div className="role-text">Software Developer</div>
            </div>
            <div className="right">
              <div className=""></div>
              <div className="role-text">Software Developer</div>
            </div>
          </div>
        </div>
        
        <div className="col-rest">
          <div className="tablet">
            <h1 className="text-center">Get In Touch</h1>
            <form className="registration-form">
              <label className="col-one-half">
                <span className="label-text">First Name</span>
                <input type="text" name="firstName"/>
              </label>
              <label className="col-one-half">
                <span className="label-text">Last Name</span>
                <input type="text" name="lastName"/>
              </label>
              <label>
                <span className="label-text">Email</span>
                <input type="text" name="email"/>
              </label>
              <label className="password">
                <span className="label-text">Body</span>                
                <textarea name="Text1" cols="40" rows="5"></textarea>
              </label>
              <br/>
              <div className="text-center" style={{border:"0px"}}>
                <button className="submit" name="register"> Send </button>
              </div>
            </form>
              
          </div>

      </div>
      </div>
         
    );
  }
}

export default Footer1;
