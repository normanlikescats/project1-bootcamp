import React from 'react';
import "./button.css"

export default class Button extends React.Component{
  constructor(props){
    super(props)

    this.state={
      index: (props),
      day: (props),
      tracked: (props),
    }
  }
  
  handleClick=()=>{
    let currState = this.props.tracked

    // Toggles between the 3 states of the button when clicked    
    if (currState === 0){
      currState = 1;
    } else if (currState === 1){
      currState = 2;
    } else if (currState === 2){
      currState = 0;
    }

    // Passes the state through to parent components to update
    this.props.updateTracker(this.props.index, currState)
    this.props.perfectScore();
  }
    
  render(){
    let buttonClass = '';
    // Determines CSS Class based on the button state to render out the right colour
    if (this.props.tracked === 0 ){
      buttonClass = "tracker-button-default"
    } else if (this.props.tracked === 1){
      buttonClass = "tracker-button-true"
    } else {
      buttonClass = "tracker-button-false"
    }

    return(
      <button className = {buttonClass} onClick = {this.handleClick}>{this.props.day}</button>
    )
  }
}
