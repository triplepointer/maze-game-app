import React from 'react'
import { IsLike } from './IsLike'

export class Square extends React.Component {
  constructor(props) {
    super(props)
    this.number = this.props.number
    this.value = this.props.value
    this.state = { isClickedHere: false }
  }
  renderLikeOrDislike() {
    let endNumber
    if (
      (this.number === 1 && this.value === 7) ||
      (this.number === 2 && this.value === 6) ||
      (this.number === 3 && this.value === 5) ||
      (this.number === 4 && this.value === 2) ||
      (this.number === 5 && this.value === 1) ||
      (this.number === 6 && this.value === 4) ||
      (this.number === 7 && this.value === 3) ||
      (this.number === 8 && this.value === 4) ||
      (this.number === 9 && this.value === 1)
    ) {
      endNumber = true
      return (
        <IsLike
          endNumber={endNumber}
          isClicked={this.props.isClicked}
          isClickedHere={this.state.isClickedHere}
        />
      )
    } else {
      endNumber = false
      return (
        <IsLike
          endNumber={endNumber}
          isClicked={this.props.isClicked}
          isClickedHere={this.state.isClickedHere}
        />
      )
    }
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.onClickButton()
          this.setState({ isClickedHere: true })
        }}>
        {this.renderLikeOrDislike()}
        {this.props.number === this.props.value ? (
          <div className="start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
              width="18px"
              height="18px">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" />
            </svg>
          </div>
        ) : (
          ''
        )}
      </button>
    )
  }
}
