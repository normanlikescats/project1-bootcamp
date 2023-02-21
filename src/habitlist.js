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
  

  componentDidMount=()=>{
    if(JSON.parse(localStorage.getItem('habits')) != null){
      this.setState({
        habits: JSON.parse(localStorage.getItem('habits'))
      })
    }
  }

  perfectScore=()=>{
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