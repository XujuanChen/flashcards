import React from 'react'
import { useState } from 'react';
import './Cards.css'

const Cards = ({question, answer, image, backgroundcolor}) => {
  const [flip, setFlip] = useState('');

  const handleFlip = () => {
      if (flip !== 'back') setFlip('back');
      else setFlip('');
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
        <div className={`flip-card-inner ${flip}`}>
            <div className={`flip-card-front`} style={{backgroundColor: `${backgroundcolor}`}} >
                <h1>Question</h1>
                <p>{question}</p>
                <div className='img-container'>
                  {image && <img src={image} alt="img" />}
                </div>
            </div>
            <div className="flip-card-back" style={{backgroundColor: `${backgroundcolor}`}} >
                <h1>Answer</h1>
                <p>{answer}</p>
            </div>
        </div>
    </div>
  )
}

export default Cards