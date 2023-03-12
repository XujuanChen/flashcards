import React from 'react'
import { useState } from 'react'
import './App.css'
import qnaData from './data.jsx'
import Qnas from './components/Qnas'
import QAForm from './components/QAForm'

function App() {
  const list = qnaData;
  const [items, setItems] = useState(list);
  const [num, setNum] = useState(0);

  const currItem = items[num];
  const len = list.length-1;
  const numCards = items.length-1;
  const mastered = len - numCards;

  const removeItem = (id) => {
    if (id > 0 && id <12) {
        const newItems = items.filter((item) =>
        item.id !== id
      )
      setItems(newItems)
    } 
  }

  const handlePrev = () => {
    let prev = num;
    if (prev > 1) {
      prev = prev - 1;
    } else {
      prev = numCards;
    }
    setNum(prev);
  }

  const handleNext = () => {
    let next = num;
    if (next < numCards){
      next = next + 1;
    } else {
      next = 1;
    };
    setNum(next);
  }

  const handleClick = () => {
    let rand = Math.ceil(Math.random() * numCards);
    setNum(rand);
  }
  
  return (
    <div className="App">
      <h1>JavaScript Question & Answer</h1>
      <p>JavaScript is a very powerful client-side scripting language.</p>
      <p>Number of cards: {numCards}, Mastered Questions: {mastered} </p>

      <Qnas currItem={currItem} removeItem={removeItem} />
      <QAForm currItem={currItem} />

      <button type="next" onClick={handlePrev}>⫷</button>
      <button type="next" onClick={handleNext}>⫸</button>
      <button type="next" onClick={handleClick}>♻</button>
    </div>
  )
}

export default App
