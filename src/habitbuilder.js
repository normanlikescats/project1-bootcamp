import React from 'react';
import "./habitbuilder.css";

export default class HabitBuilder extends React.Component{
  constructor(props){
    super(props)

    this.state={
      id:(props),
      habit: '',
      tracker: [0,0,0,0,0,0,0]
    }
  }

  handleChange =(e)=> {
    // Handles change in input field by user
    let newHabit = e.target.value

    this.setState({
      habit: newHabit,
    })
  }

  handleSubmit =(e)=> {
    e.preventDefault();
    if (this.state.habit === ''){
      // Input validation to ensure that the field is not empty
      alert("Please enter a habit :)")
    } else{
      // Declares the new habit
      let newHabit = {
        id:this.props.id,
        habit: this.state.habit,
        tracker: this.state.tracker
      }

      // Adds the new habit and checks for perfectScore (which should turn it false by default)
      this.props.addNewHabit(newHabit);
      this.props.perfectScore();

      // Resets habit for the next new habit
      this.setState({
        id: this.props.id,
        habit: '',
      })
    }    
  }

  render(){
    return(
      <div className= "habit-builder">
        <input spellCheck = "false" className="new-habit-input" type="text" value={this.state.habit} placeholder = "Enter a new habit!" onChange={this.handleChange}/>
        <input className = 'submit-button' type='submit' name = "submit" value = "Let's go!" onClick={this.handleSubmit}/>
      </div>
    )
  }
}