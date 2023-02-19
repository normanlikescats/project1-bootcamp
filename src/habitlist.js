import React from 'react';
import HabitBuilder from './habitbuilder';
import Habit from './habit';

export default class HabitList extends React.Component{
  constructor(props){
    super(props)

    this.state={
      habits: [
        {
          id: 0,
          habit: 'Exercise Daily',
          tracker: [0,1,0,0,1,0,0]
        },
        {
          id: 1,
          habit: 'Sleep at 11pm',
          tracker: [0,1,0,1,1,0,0]
        }
      ],
    }
  }

  addNewHabit=(habit)=>{
    let newArray = [...this.state.habits, habit]
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
    this.setState({habits: newHabitsArray});
  }

  deleteHabit=(key)=>{
    let index = this.state.habits.findIndex((habit)=> habit.id === key);

    let newHabitsArray  = [...this.state.habits];
    newHabitsArray.splice(index, 1);
    this.setState({habits: newHabitsArray});
  }

  render(){
    let currID = this.state.habits.length

    return(
      <div>
        <HabitBuilder addNewHabit={this.addNewHabit} id = {currID}/>
        {(this.state.habits) && this.state.habits.length > 0 ? this.state.habits.map((habit)=>(
          <Habit key = {habit.id} {...habit} updateTracker = {this.updateTracker} deleteHabit = {this.deleteHabit}/>
        )) : <h3 style= {{color: "#290a53"}}>No habits yet. Add one today!</h3>}
      </div>
    )
  }
}