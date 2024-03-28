// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeLettersCount = event => {
    const newText = event.target.value 
    this.setState({inputText: newText})
  }

  render() {
    const headingText = 'Calculate the Letters you enter'
    const imgUrl =
      'https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png'
    const {inputText} = this.state
    const count = inputText.length
    return (
      <div className="app-container">
        <div className="container">
          <div className="calculate">
            <h1 className="head">{headingText}</h1>
            <label className="label-text" htmlFor="userInput">
              Enter the phrase{' '}
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              id="userInput"
              className="user-input"
              onChange={this.onChangeLettersCount}
            />
            <p className="count-box">No.of letters: {count}</p>
          </div>
          <img src={imgUrl} className="image" alt="letters calculator" />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
