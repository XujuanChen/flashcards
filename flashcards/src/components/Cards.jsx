import React from 'react'
import './Cards.css'

const Cards = ({question, answer}) => {
  return (
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <h1>Question</h1>
                <h3>{question}</h3>
            </div>
            <div className="flip-card-back">
                <h1>Answer</h1>
                <p>{answer}</p>
            </div>
        </div>
    </div>
  )
}

export default Cards