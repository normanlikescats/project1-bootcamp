import React from "react";
import Clock from "./clock"; 
import './mainpage.css'
import HabitList from "./habitlist";
import SillyQuote from "./sillyquote";

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
                <div className = 'flex-clock'>
          <Clock />
        </div>
      </header>
      <div>
      <h2 className = "habit-tracker-text">Habit Tracker</h2>
      <p className = "welcome-text">Welcome, {this.props.name}.</p>
        <div>
          <HabitList />
        </div>
      </div>
      <SillyQuote className="silly-quote-flex"/>
    </div>
    )
  }
}