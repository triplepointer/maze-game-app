import React from 'react'
import Board from './Board'
import { Header } from './Header'
import Footer from './Footer'

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
            <button className="next">Далее</button>
          </div>
        </div>
      </div>
    )
  }
}
