import React from 'react'
import { useState } from 'react'
import './App.css'
import qnaData from './data.jsx'
import Qnas from './components/Qnas'
import QAForm from './components/QAForm'

function App() {
  const list = qnaData;
  const [items, setItems] = useState(list);
  const [masters, setMasters] = useState([]);
  const [num, setNum] = useState(0);

  const currItem = items[num];
  const numCards = items.length-1;
  const len = list.length-1;
  const mastered = masters.length;

  const removeItem = (id) => {
    let newItems = items;
    if (id > 0 && id < len) {
        newItems = items.filter(item=>item.id !== id)
      setItems(newItems);
      setMasters([...masters, id]);
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
  
  const [curstreak, setCurstreak] = useState(0);
  const [longest, setLongest] = useState(0);
  const [msg, setMsg] = useState('');
  return (
    <div className="App">
      <h1>JavaScript Question & Answer</h1>
      <p>JavaScript is a very powerful client-side scripting language.</p>
      <p>Number of cards: {numCards}, Mastered Questions: {mastered} </p>
      <p>Message: {msg}</p>
      <p>Current Streak: {curstreak}, Longest Streak: {longest} </p>
      <Qnas currItem={currItem} removeItem={removeItem} />
      <QAForm currItem={currItem} setMsg={setMsg} setCurstreak={setCurstreak} setLongest={setLongest} />

      <button type="next" onClick={handlePrev}>⫷</button>
      <button type="next" onClick={handleNext}>⫸</button>
      {/* <button type="next" onClick={handleClick}>♻</button> */}
      <button type="next" onClick={handleClick} className='submit-btn'>Shuffle</button>
    </div>
  )
}

export default App
