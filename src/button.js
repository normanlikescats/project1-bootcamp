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
    
    if (currState === 0){
      currState = 1;
    } else if (currState === 1){
      currState = 2;
    } else if (currState === 2){
      currState = 0;
    }
    this.props.updateTracker(this.props.index, currState)
  }
    
  render(){
    let buttonClass = '';
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
