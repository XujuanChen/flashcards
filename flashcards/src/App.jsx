import React from 'react'
import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import qna from './data'
import QAForm from './components/QAForm'

function App() {
  const [num, setNum] = useState(0);

  const len = qna.length-1;
  const handlePrev = () => {
    let prev = num;
    if (prev > 1) {
      prev = prev - 1;
    } else {
      prev = len;
    }
    setNum(prev);
  }
  const handleNext = () => {
    let next = num;
    if (next < len){
      next = next + 1;
    } else {
      next = 1;
    };
    setNum(next);
  }
  const handleClick = () => {
    let rand = Math.ceil(Math.random() * len);
    setNum(rand);
  }

  const {id, question, answer, image, backgroundcolor} = qna[num];

  return (
    <div className="App">
      <h1>JavaScript Question & Answer</h1>
      <p>JavaScript is a very powerful client-side scripting language.</p>
      <p>Number of cards: 12</p>
      <p>Current Streak: 13, Longest Streak: 6</p>
      <Cards key={id} question = {question} answer = {answer} image = {image} backgroundcolor = {backgroundcolor} />
      
      <QAForm />
      <button type="next" onClick={handlePrev}>⫷</button>
      <button type="next" onClick={handleNext}>⫸</button>
      <button type="next" onClick={handleClick}>♻</button>
    </div>
  )
}

export default App
