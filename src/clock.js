import React from 'react';
import './clock.css';

export default class Clock extends React.Component{
  constructor(props){
    super(props)
    
    this.state={
      time: new Date()
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
    return (
      <>
        <div className="flex-container">
        <h6 className="clock">{this.state.time.toLocaleTimeString()}</h6>
        <h6 className="clock">{this.state.time.toLocaleDateString()}</h6>
        </div>
      </>
    )
  }
}

