import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state
    if (parseInt(speed) < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else if (speed === 200) {
      this.setState({speed: 200})
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (parseInt(speed) !== 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else if (speed === 0) {
      this.setState({speed: 0})
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="card-heading-1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="card-image"
        />
        <h1 className="card-heading-2">Speed is {speed}mph</h1>
        <p className="card-description">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="buttons-container">
          <button
            type="button"
            className="card-button-1"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="card-button-2"
            onClick={this.decreaseSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
