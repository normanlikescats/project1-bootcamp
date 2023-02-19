import React from 'react';
import './clock.css';

export default class Clock extends React.Component{
  constructor(props){
    super(props)
    
    this.state={
      time: new Date(),
    }
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.TimerID)
  }

  render(){
    let months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    let formatted_date = this.state.time.getDate() + " " + months[this.state.time.getMonth()] + " " + this.state.time.getFullYear() + ", " + days[this.state.time.getDay()]

    return (
      <>
        <div className="flexy-clock">
          <h6 className="clock">{formatted_date}</h6>
          <h6 className="clock">{this.state.time.toLocaleTimeString()}</h6>
        </div>
      </>
    )
  }
}

