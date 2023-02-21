import React from 'react';
import "./habit.css"
import Button from './button';

export default class Habit extends React.Component{
  constructor(props){
    super(props)

    this.state={
      id:(props),
      habit: (props),
      tracker:(props),
      edit: false,
    }
  }

  updateTracker=(index, currState)=>{
    let newArray = [...this.props.tracker]
    newArray[index]= currState;
    this.props.updateTracker(this.props.id, newArray)
  }

  deleteHabit=()=>{
    this.perfectScore();
    this.props.deleteHabit(this.props.id)
  }

  editHabit=()=>{
    this.setState({
      edit: true,
    })
  }

  finishEdit=()=>{
    this.setState({
      edit: false,
    })
  }

  handleChange =(e)=> {
    let editedHabit = e.target.value
    this.props.editHabit(this.props.id, editedHabit)
  }

  perfectScore=()=>{
    this.props.perfectScore();
  }
  
  render(){
    return(
      <div className = "habit-flex">
        <div className = "habit-box-flex">
          {this.state.edit === true
          ? 
          <form className = "habit-header">
            <h4 className="habit-header-text">Habit:</h4><input autoFocus spellCheck = "false" className="habit-header-input" type = "text" value= {this.props.habit} onChange = {this.handleChange}/>
          </form>
          : <h4 className="habit-header">Habit: {this.props.habit}</h4>}
          <div>
            {this.state.edit === true
            ? <button className = "edit-button" onClick={this.finishEdit}>✔</button>
            : <button className = "edit-button" onClick={this.editHabit}>✎</button>}
            <button className = "delete-button" onClick={this.deleteHabit}>✖</button>
          </div>
        </div>
        <div className = "flex-bubbles">
          <Button index = '0' day = 'S' tracked = {this.props.tracker[0]} updateTracker = {this.updateTracker} perfectScore = {this.perfectScore}/>
          <Button index = '1'day = 'M' tracked = {this.props.tracker[1]} updateTracker = {this.updateTracker} perfectScore = {this.perfectScore}/>
          <Button index = '2'day = 'T' tracked = {this.props.tracker[2]} updateTracker = {this.updateTracker} perfectScore = {this.perfectScore}/>
          <Button index = '3'day = 'W' tracked = {this.props.tracker[3]} updateTracker = {this.updateTracker} perfectScore = {this.perfectScore}/>
          <Button index = '4'day = 'T' tracked = {this.props.tracker[4]} updateTracker = {this.updateTracker} perfectScore = {this.perfectScore}/>
          <Button index = '5'day = 'F' tracked = {this.props.tracker[5]} updateTracker = {this.updateTracker} perfectScore = {this.perfectScore}/>
          <Button index = '6'day = 'S' tracked = {this.props.tracker[6]} updateTracker = {this.updateTracker} perfectScore = {this.perfectScore}/>
        </div>
      </div>
    )
  }
}