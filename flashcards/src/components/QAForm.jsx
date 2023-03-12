import React, {useState} from 'react'
import './QAForm.css'

const QAForm = ({currItem, setMsg, setCurstreak, setLongest}) =>  {
  const [inputvalue, setInputvalue] = useState('');
  const [bordercolor, setBordercolor] = useState('');
  const [streak, setStreak] = useState(0);
  const [longsk, setLongsk] = useState(0);

  const handleChange = (e) => {
    setInputvalue(e.target.value)
  }

  const checkAnswer = () => {
    let curr = streak;
    if (currItem.id > 0 ) {
      if (inputvalue.substring(0, 13).toLowerCase() == currItem.answer.substring(0, 13).toLowerCase()) {
        setBordercolor('blueColor');
        setMsg("Your answer is Correct!")
        curr=streak+1;
        setStreak(curr);
        setCurstreak(curr);
      }else {
        setBordercolor('redColor');
        setMsg("Sorry, not this answer!")
        setStreak(0);
        setCurstreak(0);
      }
      if (curr > longsk) {
        setLongsk(curr);
        setLongest(curr);
      }
    }
  }

  return (
    <form className='form-container'>
    <label> <span>Guess the answer: </span> 
      <input 
        className={bordercolor} 
        type="text" 
        name = "inputvaluer"
        value={inputvalue} 
        placeholder="Type your answer"
        onChange={handleChange} />
    </label>
    <button className='submit-btn' 
      type="button"
      onClick={checkAnswer}
    > 
    Submit
    </button>
    {/* <p>{message}</p> */}
    {/* <p>Current Streak: {streak}, Longest Streak: {longsk} </p> */}
  </form>
  );
}


  export default QAForm