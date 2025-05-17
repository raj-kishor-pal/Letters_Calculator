// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    letterCounter: 0,
  }

  onLetterInput = event => {
    if (event.target.value === '') {
      this.setState({
        letterCounter: 0,
      })
    } else if (event.key === 'Backspace' && event.target.value !== '') {
      this.setState(prevState => ({letterCounter: prevState.letterCounter - 1}))
    } else if (event.target.value !== '') {
      this.setState(prevState => ({letterCounter: prevState.letterCounter + 1}))
    }
  }

  render() {
    const {letterCounter} = this.state

    return (
      <div className="bg-container">
        <div className="text-img-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="letterInput">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              id="letterInput"
              placeholder="Enter the phrase"
              className="input-box"
              onKeyUp={this.onLetterInput}
            />
            <p className="letter-count-text">No.of letters: {letterCounter}</p>
          </div>
          <img
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="cal-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
