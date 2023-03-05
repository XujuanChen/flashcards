import React from 'react'
import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import qna from './data'

function App() {
  const handleClick = () => {
    let rand = Math.floor(Math.random() * 12);
    setNum(rand);
  }

  const [num, setNum] = useState(0);
  const {question, answer} = qna[num];

  return (
    <div className="App">
      <h1>JavaScript Questions and Answers</h1>
      <h3>JavaScript is a very powerful client-side scripting language.</h3>
      <h3>You can make your webpage more lively and interactive, with the help of JavaScript. </h3>
      <h3>Number of cards: 12</h3>
      <Cards question = {question} answer = {answer} />
      <button onClick={handleClick}>next</button>
    </div>
  )
}

export default App
