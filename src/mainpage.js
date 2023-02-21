import React from "react";
import Clock from "./clock"; 
import './mainpage.css'
import HabitList from "./habitlist";
import SillyQuote from "./sillyquote";

export default class MainPage extends React.Component{
  constructor(props){
    super(props)

    this.state={
      perfectScoreStatus: false,
    }
  }
  perfectScore=(currPerfectScore)=>{
    this.setState({
      perfectScoreStatus: currPerfectScore,
    })
  }


  render(){
    let encouragingMessage = ''
    if (this.state.perfectScoreStatus === true){
      encouragingMessage = " You're on fire, keep it up! 🔥"
    } else {
      encouragingMessage = " Let's get this bread! 🍞"
    }

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
      <p className = "welcome-text">Welcome, {this.props.name}.{encouragingMessage}</p>
        <div>
          <HabitList perfectScore = {this.perfectScore} perfectScoreStatus = {this.state.perfectScoreStatus}/>
        </div>
      </div>
      <SillyQuote className="silly-quote-flex"/>
    </div>
    )
  }
}