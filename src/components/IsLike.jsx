import React from 'react'
import dislike from '../images/dislike.png'
import like from '../images/like.png'
import noise from '../music/noiseInstant.mp3'

export function IsLike(props) {
  const playAudio = () => {
    const audio = new Audio(noise)
    audio.play()
    return true
  }
  return (
    <>
      {props.endNumber && props.isClicked ? (
        <img className="like" src={like} alt="image" />
      ) : props.isClickedHere && props.isClicked && playAudio() ? (
        <img className="dislike" src={dislike} alt="image" />
      ) : (
        ''
      )}
    </>
  )
}
