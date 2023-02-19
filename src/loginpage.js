import React from 'react';
import "./loginpage.css";

export default class LoginPage extends React.Component{
  constructor(props){
    super(props)

    this.state={
      name: '',
    }
  }

  handleChange =(e)=> {
    let Username = e.target.value

    this.setState({
      name: Username,
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    let username = this.state.name;
    this.props.handleName(username);
  }

  render(){
    return(
      <div className = "main-div">
        <h1 className = "welcome-text">Hello there!</h1>
        <form>
          <input name="name" className= 'username-box' type='text' value={this.props.name} placeholder = "What is your name?" onChange = {this.handleChange}/><br/><br/>
          <input className = 'username-button' type='submit' name = "submit" value = "Let's go!" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }


}