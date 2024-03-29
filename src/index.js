import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
window.addEventListener("keydown", function(e) {
    if(["ArrowUp","ArrowDown"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
