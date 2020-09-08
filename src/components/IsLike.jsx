import React, { useEffect } from 'react'
import dislike from '../images/dislike.png'
import like from '../images/like.png'
import noise from '../music/noiseInstant.mp3'
import scream from '../images/scream.jpg'
import $ from 'jquery'

export function IsLike(props) {
  useEffect(() => {
    // Update the document title using the browser API
    // debugger
    setTimeout(() => {
      $('.scream').remove()
    }, 1000)
  })

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
        <img className="dislike" src={dislike} alt="image" /> && (
          <div className="scream"></div>
        )
      ) : (
        ''
      )}
    </>
  )
}
