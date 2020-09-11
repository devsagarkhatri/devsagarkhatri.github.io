import React, { Component } from "react";
import "./footer.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import logo from "./images/Picture3.png";
import git from "./images/github_icon.png";
import web from "./images/website_icon.png";
import linkedin from "./images/linkedin_icon.png";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="half_wrap row">
          <div className="col-sm-3 ">
            <img
              alt=""
              src={logo}
              height="40px"
              style={{ marginBottom: "1vh", marginTop: "6vh" }}
            />

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-2">
                <img alt="" src={git} height="30px" />
              </div>

              <div className="col-sm-2">
                <img alt="" src={linkedin} height="30px" />
              </div>
              <div className="col-sm-2">
                <img alt="" src={web} height="30px" />
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
          <div className="col-sm-1 "></div>
          <div className="col-sm-3 "></div>
          <div className="col-sm-5 "></div>
        </div>
        <div className=" justify-content-center copyright">
          <hr className="hrfooter" />
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5 text-left ">
              © Copyright 2020 Sagar Khatri
            </div>
            <div className="col-sm-5 text-right">
              Proudly Presented by GitHub
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
      //   <div class="footer">
      //     <div class="container">
      //       <div class="row">
      //         <div class="col-4 offset-1 col-sm-2">
      //           <h5>Links</h5>
      //           <ul class="list-unstyled">
      //             <li><a href="#">Home</a></li>
      //             <li><a href="./aboutus.html">About</a></li>
      //             <li><a href="#">Menu</a></li>
      //             <li><a href="#">Contact</a></li>
      //           </ul>
      //         </div>
      //         <div class="col-7 col-sm-5">
      //           <h5>Our Address</h5>
      //           <address>
      //             121, Clear Water Bay Road<br/>
      //               Clear Water Bay, Kowloon<br/>
      //                 HONG KONG<br/>
      //                   <i class="fa fa-phone fa-lg"></i>: +852 1234 5678<br/>
      //                     <i class="fa fa-fax fa-lg"></i>: +852 8765 4321<br/>
      //                       <i class="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
      //            </address>
      //             </div>
      //                   <div class="col-12 col-sm-4 align-self-center">
      //                     <div class="text-center">
      //                       <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
      //                       <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
      //                       <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
      //                       <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
      //                       <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
      //                       <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope fa-lg"></i></a>
      //                     </div>
      //                   </div>
      //        </div>
      //                 <div class="row justify-content-center">
      //                   <div class="col-auto">
      //                     <p>© Copyright 2018 Ristorante Con Fusion</p>
      //                   </div>
      //                 </div>
      //     </div>
      // </div>
    );
  }
}

export default Footer;
