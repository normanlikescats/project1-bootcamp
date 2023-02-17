import React from "react";
import LoginPage from "./loginpage";
import MainPage from "./mainpage";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      name: '',
      pageState:1,
    }
  }
  
  handleEnter = () =>{
    let currPageState = this.state.pageState;
    if (currPageState === 1){
      currPageState = 2;
    } else if(currPageState === 2){
      currPageState = 1;
    }
    this.setState({
      pageState:currPageState,
    })
  }

  handleName = (userName) =>{
    let currPageState = this.state.pageState;
    if (currPageState === 1){
      currPageState = 2;
    } else if(currPageState === 2){
      currPageState = 1;
    }
    console.log('this ran')
    console.log(currPageState)

    this.setState({
      name: userName,
      pageState: currPageState,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.pageState === 1
          ? <LoginPage handleName = {this.handleName}/>
          : <MainPage name = {this.state.name} handleEnter = {this.handleEnter}/>}
        </header>
      </div>
    );
  }
}

export default App;
