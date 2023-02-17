import React from "react";
import Clock from "./clock"; 
import './mainpage.css'

export default class MainPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div>
      <header className='flex-header'>
        <div className = 'flex-back-button'>
          <button className = 'back-button' onClick={this.props.handleEnter}>Back</button>
        </div>
        <div className = 'flex-clock'>
          <Clock />
        </div>
      </header>
      <p>Welcome, {this.props.name}</p>
    </div>
    )
  }
}