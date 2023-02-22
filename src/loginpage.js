import React from 'react';
import "./loginpage.css";
import SillyQuote from './sillyquote';

export default class LoginPage extends React.Component{
  constructor(props){
    super(props)

    this.state={
      name: '',
    }
  }

  handleChange =(e)=> {
    // Allows the input field to be updated when the user types in it
    let Username = e.target.value

    this.setState({
      name: Username,
    })
  }

  handleSubmit=(e)=>{
    // Handles the submit of the form when user hits "Let's go!"
    e.preventDefault();

    if(this.state.name === ''){
      // Handles the issue if the user does not enter anything and clicks the button
      alert("Please enter your name :)")
    } else{
      // Sets the username to the current value in the input
      let username = this.state.name;
      // Passes the username to the App component via handleName which is passed via props
      this.props.handleName(username);
      // Use localStorage to save the username to key 'Name'
      localStorage.setItem('Name', username);
    }
  }

  componentDidMount=()=>{
    if(localStorage.getItem('Name') != null){
      // If localStorage has a name stored, it will be pulled up using the key which will send users straight to page 2 (MainPage)
      this.props.handleName(localStorage.getItem('Name'));
    }
  }

  render(){    
    return(
      <div className = "main-div">
        <h1 className = "welcome-text">Hello there!</h1>
        <form>
          {/* Use of autoComplete (off) and spellCheck (false) to keep the layout clean*/}
          <input autoComplete="off" spellCheck = "false" name="name" className= 'username-box' type='text' value={this.props.name} placeholder = "What is your name?" onChange = {this.handleChange}/><br/><br/>
          <input className = 'username-button' type='submit' name = "submit" value = "Let's go!" onClick={this.handleSubmit}/>
        </form>
        <div>
          <SillyQuote/>
        </div>
      </div>
    )
  }
}