import React from 'react';
import HabitBuilder from './habitbuilder';
import Habit from './habit';
import './habitlist.css';

export default class HabitList extends React.Component{
  constructor(props){
    super(props)

    this.state={
      habits: [{
        id:0,
        habit: 'Run Daily',
        tracker: [0,0,1,1,1,0,0]
      }],
      perfectScoreStatus: (props),
    }
  }

  addNewHabit=(habit)=>{
    // Adds a new habit into the habits array
    let newArray = [...this.state.habits, habit]
    
    // Stores the new habit array to localStorage
    localStorage.setItem('habits', JSON.stringify(newArray));

    // Set state so the app remembers the current array of habits
    this.setState({
      habits: newArray,
    });
  }

  updateTracker=(key, newArray)=>{
    // Find the index of the habit being edited
    let index = this.state.habits.findIndex((habit)=> habit.id === key);
    let habit = this.state.habits.filter((habit)=> habit.id === key)[0];

    // Assign the updated tracker array to the habit selected
    habit.tracker = newArray;

    let newHabitsArray  = [...this.state.habits];
    // Replace the original habit with the updated one
    newHabitsArray.splice(index, 1, habit);

    // Store the updated habit array in the localStorage
    localStorage.setItem('habits', JSON.stringify(newHabitsArray));

    // Update state with update habits array
    this.setState({habits: newHabitsArray});
  }

  deleteHabit=(key)=>{
    // Find habit index
    let index = this.state.habits.findIndex((habit)=> habit.id === key);

    let newHabitsArray  = [...this.state.habits];

    // Delete habit based on index identified
    newHabitsArray.splice(index, 1);

   // Store the updated habit array in the localStorage
    localStorage.setItem('habits', JSON.stringify(newHabitsArray));

    // Update state with update habits array
    this.setState({habits: newHabitsArray});
  }

  editHabit=(key, newHabit)=>{
    // Find the index of the habit being edited
    let index = this.state.habits.findIndex((habit)=> habit.id === key);
    let updatedHabit = this.state.habits.filter((habit)=> habit.id === key)[0];

    // Update the Habit with the edited one
    updatedHabit.habit = newHabit

    let newHabitsArray  = [...this.state.habits];

    // Replace the original habit with the updated one
    newHabitsArray.splice(index, 1, updatedHabit);

    // Store in localStorage
    localStorage.setItem('habits', JSON.stringify(newHabitsArray));

    // Update state with updated habits array
    this.setState({habits: newHabitsArray});
  }
  

  componentDidMount=()=>{
    // Checks if any habits exist in LocalStorage. If they do, the app will pull them out to load them in the state
    if(JSON.parse(localStorage.getItem('habits')) != null){
      this.setState({
        habits: JSON.parse(localStorage.getItem('habits'))
      })
    }
  }

  perfectScore=()=>{
    // Checks for perfectScore by running through the habits and their bubbles up to the day before the current day.
    // If all are green, perfectScoreStatus will be true and vice versa.
    let currPerfectScore = this.props.perfectScoreStatus;
    let scoreTally = 0;
    if(this.state.habits.length >0){
      for (let j = 0; j < this.state.habits.length; j ++)
        for (let i = 0; i < new Date().getDay(); i ++){
          if(this.state.habits[j].tracker[i] === 1){
            scoreTally += 1;
        }
      }
    }
    let numOfBubbles = (this.state.habits.length * new Date().getDay())
    
    if(scoreTally === numOfBubbles && numOfBubbles > 0 ){
      currPerfectScore = true;
    } else {
      currPerfectScore = false;
    }

    this.props.perfectScore(currPerfectScore);
  }


  render(){
    let currID = this.state.habits.length;
    return(
      <div>
        <HabitBuilder addNewHabit={this.addNewHabit} id = {currID} perfectScore = {this.perfectScore}/>
        {(this.state.habits) && this.state.habits.length > 0 ? this.state.habits.map((habit)=>(
          <Habit key = {habit.id} {...habit} updateTracker = {this.updateTracker} deleteHabit = {this.deleteHabit} editHabit = {this.editHabit} perfectScore={this.perfectScore}/>
        )) : <h3 className="no-habits-text">No habits yet. Add one today!</h3>}
      </div>
    )
  }
}