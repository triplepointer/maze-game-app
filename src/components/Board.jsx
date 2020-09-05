import React from 'react'
import { Square } from './Square'
import { Letter } from './Letter'
import { Number } from './Number'
import { connect } from 'react-redux'

export class Board extends React.Component {
  renderSquare(value) {
    return (
      <Square
        isClicked={this.props.isClicked}
        onClickButton={this.props.onClickButton}
        value={value}
        number={this.props.choosedNumber}
      />
    )
  }
  renderNumber(number) {
    return <Number value={number} />
  }
  renderLetter(letter) {
    return <Letter value={letter} />
  }
  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderLetter('A')}
          {this.renderLetter('B')}
          {this.renderLetter('C')}
        </div>
        <div className="board-row">
          {this.renderNumber(1)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderNumber(2)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderNumber(3)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}
