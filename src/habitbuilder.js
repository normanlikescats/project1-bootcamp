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
    let newHabit = e.target.value

    this.setState({
      habit: newHabit,
    })
  }

  handleSubmit =(e)=> {
    e.preventDefault();
    if (this.state.habit === ''){
      alert("Please enter a habit :)")
    } else{
      let newHabit = {
        id:this.props.id,
        habit: this.state.habit,
        tracker: this.state.tracker
      }
      this.props.addNewHabit(newHabit);

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
        <input className = 'username-button' type='submit' name = "submit" value = "Let's go!" onClick={this.handleSubmit}/>
      </div>
    )
  }
}