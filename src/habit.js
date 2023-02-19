import React from 'react';
import "./habit.css"
import Button from './button';

export default class Habit extends React.Component{
  constructor(props){
    super(props)

    this.state={
      key:(props),
      tracker:(props)
    }
  }

  updateTracker=(index, currState)=>{
    let newArray = [...this.props.tracker]
    newArray[index]= currState;
    this.props.updateTracker(this.props.id, newArray)
  }
  
  render(){
    return(
      <div className = "habit-flex">
        <div>
          <h4>Habit: {this.props.habit}</h4>
        </div>
        <div className = "flex-boxes">
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