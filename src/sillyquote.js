import React from 'react';

export default class SillyQuote extends React.Component{  
  render(){
    let quotes = ['"We become what we repeatedly do." - Sean Covey',
  '"Successful people are simply those with successful habits." - Brian Tracy',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"Motivation is what gets you started. Habit is what keeps you going." - Jim Ryun',
  '"Every action you take is a vote for the type of person you wish to become." - James Clear',
  `"You'll never change your life until you change something you do daily." - John C. Maxwell`,
  `"The best way to predict the future is to create it." - Abraham Lincoln`,
  `"Habits are the compound interest of self-improvement." - James Clear`
  ];

  let randNum = Math.floor(Math.random()*quotes.length)
  let chosenQuote = quotes[randNum]
    return(
      <div className="silly-quote-flex">
        <p>{chosenQuote}</p>
      </div>
    )
  }
}
