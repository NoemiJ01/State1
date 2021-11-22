import React, { Component } from "react";

class StateCard extends Component {
  // Constructor (always part of a class component)
  constructor(props) {
    super(props);
    this.state = {
      button1: "On!",
      button2: 0,
      button3: "You"
    };
  }

  // Functions to handle button presses.
  handleButton1 = () => {
    if (this.state.button1 == "off") {
      //change to on
      this.setState({ button1: "On!" });
    } else if (this.state.button1 == "On!") {
      this.setState({ button1: "Off" });
    }
    console.log("Button 1 clicked!");
  };
  handleButton2 = () => {
    //get the state
    let count = this.state.button2;
    //update the state
    count++;
    //set the state
    this.setState({ button2: count });
  };
  handleButton3 = () => {
    if (this.state.button3 == "You") {
      this.setState({ button3: "are" });
    }
  };

  // The render function
  render() {
    return (
      <div className="StateCard">
        <h2>Press some buttons!</h2>
        <div className="card-content">
          <div className="item">
            <button onClick={this.handleButton1}>Button 1</button>
            <p>Current status: {this.state.button1}</p>
          </div>
          <div className="item">
            <button onClick={this.handleButton2}>Button 2</button>
            <p>Current count: {this.state.button2}</p>
          </div>
          <div className="item">
            <button onClick={this.handleButton3}>button 3</button>
            <p>Current word: {this.state.button3}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StateCard;
