// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {clickIndex: 0}

  onDecrease = () => {
    const {clickIndex} = this.state
    if (clickIndex > 0) {
      this.setState(preState => ({clickIndex: preState.clickIndex - 1}))
    } else {
      this.setState({clickIndex: 0})
    }
  }

  onIncrease = () => {
    const {reviewsList} = this.props
    const {clickIndex} = this.state
    if (clickIndex < reviewsList.length - 1) {
      this.setState(preState => ({clickIndex: preState.clickIndex + 1}))
    } else {
      this.setState({clickIndex: 3})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {clickIndex} = this.state
    const getProfileDetails = reviewsList[clickIndex]
    const {imgUrl, username, companyName, description} = getProfileDetails

    console.log(clickIndex)
    return (
      <div className="container">
        <div className="container-2">
          <h1 className="heading">Reviews</h1>
          <img alt={username} src={imgUrl} />

          <div className="buttons-container">
            <button onClick={this.onDecrease} className="button" type="button">
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <p className="user-name">{username}</p>
            <button onClick={this.onIncrease} className="button" type="button">
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
          <p className="para">{companyName}</p>
          <p className="para">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
