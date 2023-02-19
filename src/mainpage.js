import React from "react";
import Clock from "./clock"; 
import './mainpage.css'
import HabitList from "./habitlist";

export default class MainPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div>
      <header className='flex-header'>
        <div>
          <button className = 'back-button' onClick={this.props.handleEnter}>Back</button>
        </div>
      </header>
        <div className = 'flex-clock'>
          <Clock />
        </div>

      <p>Welcome, {this.props.name}</p>
      <div className = "habit-flex">
        <HabitList />
      </div>
    </div>
    )
  }
}