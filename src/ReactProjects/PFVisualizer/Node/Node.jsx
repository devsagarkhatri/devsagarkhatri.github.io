import React, { Component } from "react";
import "./Node.css";

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isStart, isFinish } = this.props;
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : "";
    return <div className={"node" + extraClassName}></div>;
  }
}

export default Node;

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
