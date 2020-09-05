import React from 'react'
import dislike from '../images/dislike.png'
import like from '../images/like.png'
import noise from '../music/noiseInstant.mp3'
export class IsLike extends React.Component {
  constructor(props) {
    super(props)
  }
  playDislike() {
    const audio = new Audio(noise)
    audio.play()
  }
  render() {
    return (
      <>
        {this.props.endNumber && this.props.isClicked ? (
          <img className="like" src={like} alt="image" />
        ) : this.props.isClickedHere && this.props.isClicked ? (
          <img className="dislike" src={dislike} alt="image" />
        ) : (
          ''
        )}{' '}
      </>
    )
  }
}
