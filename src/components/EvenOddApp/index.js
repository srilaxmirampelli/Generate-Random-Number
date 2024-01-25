// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrement = () => {
    const randomNum = Math.floor(Math.random() * 101)
    this.setState({count: randomNum, isEven: randomNum % 2 === 0})
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="even-odd-app">
        <div className="content-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {isEven ? 'Even' : 'Odd'}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
