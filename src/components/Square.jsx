import React from 'react'
import { IsLike } from './IsLike'

export class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isClickedHere: false }
  }
  renderLikeOrDislike() {
    let endNumber
    if (
      (this.props.number === 1 && this.props.value === 7) ||
      (this.props.number === 2 && this.props.value === 6) ||
      (this.props.number === 3 && this.props.value === 5) ||
      (this.props.number === 4 && this.props.value === 2) ||
      (this.props.number === 5 && this.props.value === 1) ||
      (this.props.number === 6 && this.props.value === 4) ||
      (this.props.number === 7 && this.props.value === 3) ||
      (this.props.number === 8 && this.props.value === 4) ||
      (this.props.number === 9 && this.props.value === 1)
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
