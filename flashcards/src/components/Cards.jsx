import React, { useState } from 'react'
import './Cards.css'

const Cards = ({id, question, answer, image, backgroundcolor, removeItem}) => {
  const [flip, setFlip] = useState('');
  const handleFlip = () => {
    if (flip !== 'back') setFlip('back');
    else setFlip('');
  };

  return (
    <div>
      <div className="flip-card" >
          <div className={`flip-card-inner ${flip}`}>
              <div className={`flip-card-front`} style={{backgroundColor: `${backgroundcolor}`}} >
                  <h1>Question</h1>
                  <p>{question}</p>
                  <div className='img-container'>
                    {image && <img src={image} alt="img" />}
                  </div>
                  <p onClick={handleFlip}>Answer: click here.</p>
                  Mastered this question? <button className='check-btn' onClick={()=>removeItem(id)} >  ✔</button>
              </div>
              <div onClick={handleFlip} className="flip-card-back" style={{backgroundColor: `${backgroundcolor}`}} >
                  <h1>Answer</h1>
                  <p>{answer}</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Cards