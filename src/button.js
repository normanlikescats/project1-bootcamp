import React from 'react';
import "./button.css"

export default class Button extends React.Component{
  constructor(props){
    super(props)

    this.state={
      tracked: true,
      day: (props)
    }
  }
  
  handleClick=()=>{
    let currState = !this.state.tracked
      
    this.setState({
      tracked: currState
    })
  }
    
  render(){
    console.log(this.state.tracked)
    return(
      <div>
        {this.state.tracked === true
        ? <button className = "tracker-button" onClick = {this.handleClick}>{this.props.day}</button>
        : <button className = "tracker-button-false" onClick = {this.handleClick}>{this.props.day}</button>}
      </div>
    )
  }
  
}