import React from 'react';
import {Square} from './Square';
import {Letter} from './Letter';
import {Number} from './Number';

export class Board extends React.Component {
  renderSquare() {
    return <Square />;
  }
  renderNumber(number) {
    return <Number value={number} />;
  }
  renderLetter(letter) {
    return <Letter value={letter} />;
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
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className="board-row">
          {this.renderNumber(2)}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className="board-row">
          {this.renderNumber(3)}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
      </div>
    );
  }
}
