import React from 'react';
import "./habit.css"
import Button from './button';

export default class Habit extends React.Component{
  render(){
    return(
      <div className = "habit-box">
        <h4>Habit: {this.props.habit}</h4>
        <Button day = 'S'/>
        <Button day = 'M'/>
        <Button day = 'T'/>
        <Button day = 'W'/>
        <Button day = 'T'/>
        <Button day = 'F'/>
        <Button day = 'S'/>
      </div>
    )
  }
}