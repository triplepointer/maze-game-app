import React, { useState } from 'react'
import { IsLike } from './IsLike'

export function Square(props) {
  const renderLikeOrDislike = () => {
    let endNumber
    if (
      (props.number === 1 && props.value === 7) ||
      (props.number === 2 && props.value === 6) ||
      (props.number === 3 && props.value === 5) ||
      (props.number === 4 && props.value === 2) ||
      (props.number === 5 && props.value === 1) ||
      (props.number === 6 && props.value === 4) ||
      (props.number === 7 && props.value === 3) ||
      (props.number === 8 && props.value === 4) ||
      (props.number === 9 && props.value === 1)
    ) {
      endNumber = true
      return (
        <IsLike
          endNumber={endNumber}
          isClicked={props.isClicked}
          isClickedHere={props.isClickedHere}
        />
      )
    } else {
      endNumber = false
      return (
        <IsLike
          endNumber={endNumber}
          isClicked={props.isClicked}
          isClickedHere={props.isClickedHere}
        />
      )
    }
  }
  return (
    <button
      className="square"
      onClick={() => {
        props.onClickButton()
        props.onClickHere()
      }}>
      {renderLikeOrDislike()}
      {props.number === props.value ? (
        <div className="start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
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
