import React from 'react';
import { Board } from './Board';
import { Header } from './Header';
import { Footer } from './Footer';

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="container">
          <div className="game-board">
            <Header />
            <Board />
            <Footer />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}
