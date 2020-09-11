import React, { useEffect } from 'react'
import dislike from '../images/dislike.png'
import like from '../images/like.png'
import noise from '../music/noiseInstant.mp3'
import $ from 'jquery'

export function IsLike(props) {
  useEffect(() => {
    // Update the document title using the browser API
    // debugger
    setTimeout(() => {
      const audio = new Audio(noise)
      $('.scream').each(function (el) {
        if ($('.scream:visible').length != 0) {
          audio.play()
        }
      })
      setTimeout(() => {
        $('.scream').css('display', 'none')
      }, 2000)
    }, 0)
  })
  return (
    <>
      {props.endNumber && props.isClicked ? (
        <img className="like" src={like} alt="image" />
      ) : props.isClickedHere && props.isClicked ? (
        <>
          <img className="dislike" src={dislike} alt="image" />
          <div className="scream"></div>
        </>
      ) : (
        ''
      )}
    </>
  )
}
