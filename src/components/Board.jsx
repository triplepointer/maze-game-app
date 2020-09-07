import React from 'react'
import { Square } from './Square'
import { Letter } from './Letter'
import { Number } from './Number'

export function Board(props) {
  const renderNumber = (number) => {
    return <Number value={number} />
  }
  const renderLetter = (letter) => {
    return <Letter value={letter} />
  }
  return (
    <div className="board">
      <div className="board-row">
        {renderLetter('A')}
        {renderLetter('B')}
        {renderLetter('C')}
      </div>
      <div className="board-row">
        {renderNumber(1)}
        <Square
          onClickHere={props.onClickHere1}
          isClickedHere={props.isClickedHere1}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={1}
          number={props.choosedNumber}
        />
        <Square
          onClickHere={props.onClickHere2}
          isClickedHere={props.isClickedHere2}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={2}
          number={props.choosedNumber}
        />
        <Square
          onClickHere={props.onClickHere3}
          isClickedHere={props.isClickedHere3}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={3}
          number={props.choosedNumber}
        />
      </div>
      <div className="board-row">
        {renderNumber(2)}
        <Square
          onClickHere={props.onClickHere4}
          isClickedHere={props.isClickedHere4}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={4}
          number={props.choosedNumber}
        />
        <Square
          onClickHere={props.onClickHere5}
          isClickedHere={props.isClickedHere5}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={5}
          number={props.choosedNumber}
        />
        <Square
          onClickHere={props.onClickHere6}
          isClickedHere={props.isClickedHere6}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={6}
          number={props.choosedNumber}
        />
      </div>
      <div className="board-row">
        {renderNumber(3)}
        <Square
          onClickHere={props.onClickHere7}
          isClickedHere={props.isClickedHere7}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={7}
          number={props.choosedNumber}
        />
        <Square
          onClickHere={props.onClickHere8}
          isClickedHere={props.isClickedHere8}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={8}
          number={props.choosedNumber}
        />
        <Square
          onClickHere={props.onClickHere9}
          isClickedHere={props.isClickedHere9}
          isClicked={props.isClicked}
          onClickButton={props.onClickButton}
          value={9}
          number={props.choosedNumber}
        />
      </div>
    </div>
  )
}
