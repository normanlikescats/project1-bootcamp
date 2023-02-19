import React from 'react';
import "./habitbuilder.css";

export default class HabitBuilder extends React.Component{
  constructor(props){
    super(props)

    this.state={
      id:this.props.habitListLength,
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
    let newHabit = this.state;
    this.props.addNewHabit(newHabit);

    this.setState({
      habit: '',
    })
  }

  render(){
    return(
      <div className= "habit-builder">
        <input type="text" value={this.state.habit} placeholder = "Enter a new habit!" onChange={this.handleChange}/>
        <input className = 'username-button' type='submit' name = "submit" value = "Let's go!" onClick={this.handleSubmit}/>
      </div>
    )
  }
}