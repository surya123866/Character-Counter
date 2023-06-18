import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {counts: [], inputText: '', inputIsEmpty: false}

  onClickButton = event => {
    const {counts, inputText} = this.state
    event.preventDefault()
    if (inputText.length === 0) {
      this.setState({inputIsEmpty: true})
    } else {
      const textLength = inputText.length
      const newValue = {
        id: v4(),
        text: `${inputText}:${textLength}`,
      }
      this.setState({
        counts: [newValue, ...counts],
        inputText: '',
        inputIsEmpty: false,
      })
    }
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {counts, inputText, inputIsEmpty} = this.state
    const onClick = counts.length !== 0
    return (
      <div className="app-container">
        <div className="count-output-container">
          <div className="heading-container">
            <h1 className="heading">
              Count the characters like a <br />
              Boss...
            </h1>
          </div>
          <ul className="output-display-container">
            {onClick ? (
              counts.map(eachItem => (
                <li className="list" key={eachItem.id}>
                  <p className="count">{eachItem.text}</p>
                </li>
              ))
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="display-image"
                alt="no user inputs"
              />
            )}
          </ul>
        </div>
        <div className="count-input-container">
          <h1 className="input-heading">Character Counter</h1>
          <form onSubmit={this.onClickButton} className="input-container">
            <input
              placeholder="Enter the Characters here"
              type="text"
              className="input"
              onChange={this.onChangeInput}
              value={inputText}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          {inputIsEmpty && <p className="error">Input is empty</p>}
        </div>
      </div>
    )
  }
}

export default CharacterCounter
