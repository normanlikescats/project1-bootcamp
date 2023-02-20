import React from 'react';
import HabitBuilder from './habitbuilder';
import Habit from './habit';

export default class HabitList extends React.Component{
  constructor(props){
    super(props)

    this.state={
      habits: JSON.parse(localStorage.getItem('habits'))
    }
  }

  addNewHabit=(habit)=>{
    let newArray = [...this.state.habits, habit]
    
    localStorage.setItem('habits', JSON.stringify(newArray));
    this.setState({
      habits: newArray,
    });
  }

  updateTracker=(key, newArray)=>{
    let index = this.state.habits.findIndex((habit)=> habit.id === key);
    let habit = this.state.habits.filter((habit)=> habit.id === key)[0];

    habit.tracker = newArray;

    let newHabitsArray  = [...this.state.habits];
    newHabitsArray.splice(index, 1, habit);
    localStorage.setItem('habits', JSON.stringify(newHabitsArray));
    this.setState({habits: newHabitsArray});
  }

  deleteHabit=(key)=>{
    let index = this.state.habits.findIndex((habit)=> habit.id === key);

    let newHabitsArray  = [...this.state.habits];
    newHabitsArray.splice(index, 1);
    localStorage.setItem('habits', JSON.stringify(newHabitsArray));
    this.setState({habits: newHabitsArray});
  }

  editHabit=(key, newHabit)=>{
    let index = this.state.habits.findIndex((habit)=> habit.id === key);
    let updatedHabit = this.state.habits.filter((habit)=> habit.id === key)[0];

    updatedHabit.habit = newHabit

    let newHabitsArray  = [...this.state.habits];
    newHabitsArray.splice(index, 1, updatedHabit);
    localStorage.setItem('habits', JSON.stringify(newHabitsArray));
    this.setState({habits: newHabitsArray});
  }
  

  render(){
    let currID = this.state.habits.length
    return(
      <div>
        <HabitBuilder addNewHabit={this.addNewHabit} id = {currID}/>
        {(this.state.habits) && this.state.habits.length > 0 ? this.state.habits.map((habit)=>(
          <Habit key = {habit.id} {...habit} updateTracker = {this.updateTracker} deleteHabit = {this.deleteHabit} editHabit = {this.editHabit}/>
        )) : <h3 style= {{color: "#290a53"}}>No habits yet. Add one today!</h3>}
      </div>
    )
  }
}