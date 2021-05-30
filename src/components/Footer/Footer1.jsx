import React, { Component } from "react";
import "./footer1.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import './../../../node_modules/font-awesome/css/font-awesome.min.css'; 
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
          <div className="card2 mail">
          {/* <br/><h3><i><u style={{textUnderlineOffset:"4px"}}>Sagar  Khatri</u></i></h3>             */}
            <div className="left">              
              <div className="role-Text" style={{textAlign:"left",float:"left"}}>
                <div className="logoText" ></div>
              </div>
              <br/><br/><br/><br/><br/>
              <div className="role-text" style={{float:"left",paddingTop:"0px",marginTop:"-20px"}}>
                <b>Software Developer</b><br/>
                <i>dev.sagarkhatri@gmail.com</i><br/>  
              </div>
            </div>
            <div className="right">
              
              <div className="role-text">
                
                <b>Address</b><br/>
                Opp. Sigra Stadium,<br/>
                Sigra, Varanasi,<br/>
                Uttar Pradesh, India.
              </div>
              <div className="role-text" style={{textAlign:"center",bottom:"0px",background:"transparent",flexFlow:"column"}}>
                {/* <u>Social Links :</u> */}
                <br/>
                <ul className="social">
                  <li><a href="https://www.facebook.com"><span className="fa fa-facebook"></span></a></li>                  
                  <li><a href="https://www.codepen.io" target="_blank"><span className="fa fa-codepen"></span></a></li>
                  <li><a href="https://github.com/devsagarkhatri" target="_blank"><span className="fa fa-github"></span></a></li>                  
                  <li><a href="https://www.linkedin.com/in/sagarkhatri/" target="_blank"><span className="fa fa-linkedin"></span></a></li>                  
                </ul>
              </div>
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
