import React, { useEffect } from 'react'
import dislike from '../images/dislike.png'
import like from '../images/like.png'
import noise from '../music/noiseInstant.mp3'
import $ from 'jquery'
let timer = 0
export function IsLike(props) {
  useEffect(() => {
    debugger
    // Update the document title using the browser API
    const audio = new Audio(noise)
    // $('.scream').each(function (el) {
    if ($('.scream:visible').length != 0 && timer === 0) {
      timer = 1
      audio.play()
      setTimeout(() => {
        $('.scream').css('display', 'none')
        timer = 0
      }, 2000)
    }
    // })
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
