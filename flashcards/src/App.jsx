import React from 'react'
import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import qna from './data'

function App() {
  const handleClick = () => {
    let rand = Math.ceil(Math.random() * 12);
    setNum(rand);
  }

  const [num, setNum] = useState(0);
  const {id, question, answer, image, backgroundcolor} = qna[num];

  return (
    <div className="App">
      <h1>JavaScript Question & Answer</h1>
      <h3>JavaScript is a very powerful client-side scripting language.</h3>
      <h3>You can make your webpage more lively and interactive, with the help of JavaScript. </h3>
      <h3>Number of cards: 12</h3>
      <Cards key={id} question = {question} answer = {answer} image = {image} backgroundcolor = {backgroundcolor} />
      <button type="next" onClick={handleClick}>⭢</button>
    </div>
  )
}

export default App
