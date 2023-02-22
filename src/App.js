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
    // Handles the back button which changes the page state 
    let currPageState = this.state.pageState;
    if (currPageState === 1){
      currPageState = 2;
    } else if(currPageState === 2){
      currPageState = 1;
    }

    // Also removes the Name stored in localStorage to allow users to change their name
    localStorage.removeItem('Name');
    
    this.setState({
      pageState:currPageState,
    })
  }

  handleName = (userName) =>{
    // This is the function passed through to the LoginPage component to handle name input
    let currPageState = this.state.pageState;
    // Changes the page state to loan the MainPage component
    if (currPageState === 1){
      currPageState = 2;
    } else if(currPageState === 2){
      currPageState = 1;
    }

    this.setState({
      name: userName,
      pageState: currPageState,
    })
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*Renders the page based on pageState from state */}
          {this.state.pageState === 1
          ? <LoginPage handleName = {this.handleName}/>
          : <MainPage name = {this.state.name} handleEnter = {this.handleEnter}/>}
        </header>
      </div>
    );
  }
}

export default App;
