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
          tracker: [0,0,0,0,0,0,0]
        },
        {
          id: 1,
          habit: 'Sleep at 11pm',
          tracker: [0,0,0,0,0,0,0]
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


  render(){
    return(
      <div>
        <h2>Habit Trackoooor</h2>
        <HabitBuilder addNewHabit={this.addNewHabit} habitListLength = {this.state.habits.length}/>
        {(this.state.habits) && this.state.habits.length > 0 ? this.state.habits.map((habit)=>(
          <Habit key = {habit.id} {...habit}/>
        )) : <p>No Habit Yet!</p>}
      </div>
    )
  }
}