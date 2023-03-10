import React from 'react'
import './QAForm.css'

class QAForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label> <span>Guess the answer: </span> 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
            <button type="submit" value="Submit"> Submit</button>
        </form>
      );
    }
  }

export default QAForm