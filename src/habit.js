import React from 'react';
import "./habit.css"
import Button from './button';

export default class Habit extends React.Component{
  constructor(props){
    super(props)

    this.state={
      id:(props),
      tracker:(props)
    }
  }

  updateTracker=(index, currState)=>{
    let newArray = [...this.props.tracker]
    newArray[index]= currState;
    this.props.updateTracker(this.props.id, newArray)
  }

  deleteHabit=()=>{
    this.props.deleteHabit(this.props.id)
  }
  
  render(){
    return(
      <div className = "habit-flex">
        <div className = "habit-box-flex">
          <h4 className="habit-header">Habit: {this.props.habit}</h4>
          <button className = "delete-button" onClick={this.deleteHabit}>✖</button>
        </div>
        <div className = "flex-bubbles">
          <Button index = '0' day = 'S' tracked = {this.props.tracker[0]} updateTracker = {this.updateTracker}/>
          <Button index = '1'day = 'M' tracked = {this.props.tracker[1]} updateTracker = {this.updateTracker}/>
          <Button index = '2'day = 'T' tracked = {this.props.tracker[2]} updateTracker = {this.updateTracker}/>
          <Button index = '3'day = 'W' tracked = {this.props.tracker[3]} updateTracker = {this.updateTracker}/>
          <Button index = '4'day = 'T' tracked = {this.props.tracker[4]} updateTracker = {this.updateTracker}/>
          <Button index = '5'day = 'F' tracked = {this.props.tracker[5]} updateTracker = {this.updateTracker}/>
          <Button index = '6'day = 'S' tracked = {this.props.tracker[6]} updateTracker = {this.updateTracker}/>
        </div>
      </div>
    )
  }
}