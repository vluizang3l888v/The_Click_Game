import React, { Component } from "react";

import './ClickyBoxes.css';

class ClickyBoxes extends Component {
  render(){
    const color = this.props.color
    const boxStyle = {
      backgroundColor: color
    }
    console.log(this.props.color)
    return (
      <div
        className="clicky-box"
        style={boxStyle}
      />
    );
  }
}

export default ClickyBoxes;
