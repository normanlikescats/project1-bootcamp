import React from 'react';

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

  componentDidUpdate(){
    console.log('Ticked')
  }

  componentWillUnmount(){
    clearInterval(this.TimerID)
  }

  render(){
    return (
      <>
        <h1>{this.state.time.toLocaleTimeString()}.</h1>
      </>
    )
  }
}

