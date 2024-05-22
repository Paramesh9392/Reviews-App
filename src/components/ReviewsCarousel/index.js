// Write your code here

import {Component} from 'react'
import './index.css'


class ReviewsCarousel extends Component {
  state = {
    list_index: 0,
  }

  onClickRightArrow = () => {
    const {list_index} = this.state
    const {reviewsList} = this.props

    if (list_index < reviewsList.length - 1) {
      this.setState(prevState => ({
        list_index: prevState.list_index + 1,
      }))
    }
  }

  renderAciveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-content-container">
        <img src={imgUrl} alt={username} className="profile-img" />
        <h1 className="name">{username}</h1>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {list_index} = this.state

    if (list_index > 0) {
      this.setState(prevState => ({
        list_index: prevState.list_index - 1,
      }))
    }
  }
  render() {
    const {reviewsList} = this.props
    const {list_index} = this.state
    const currentReviewDetails = reviewsList[list_index]

    return (
      <div className="bg-container">
        <h1 className="heading"> Reviews </h1>
        <div className="reviews-container">
          <button
            className="button"
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" 
            className="arrow-logo" 
            alt="left arrow" />
          </button>

          {this.renderAciveReview(currentReviewDetails)}

          <button
            className="button"
            type="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            className="arrow-logo" 
            alt="right arrow" />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
