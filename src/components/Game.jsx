import React from 'react'
import Board from './Board'
import { Header } from './Header'
import Footer from './Footer'
import { Modal } from './Modal'

export class Game extends React.Component {
  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
  }
  state = {
    show: true,
  }
  showModal() {
    this.setState({ show: true })
  }
  forceUpdateHandler() {
    window.location.reload(false)
  }

  hideModal() {
    this.setState((prevState) => {
      return { show: false }
    })
  }
  render() {
    return (
      <div>
        <div className="game">
          <div className="container">
            <div className="game-board">
              <Header />
              <Board />
              <Footer />
            </div>
            <div className="game-info">
              <h1></h1>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>
                  Есть поле размером 3 на 3 ячейки. В начале игры в случайную
                  ячейку помещается маркер(флажок). Далее генерируются 10
                  «ходов» (возможные варианты «вверх», «влево», «вниз»,
                  «вправо»). Игрок должен в уме «пройти» по этим ходам по
                  лабиринту и указать конечную точку маркера. После ответа (клик
                  на ячейку) идет проверка ответа. Если ответ введен
                  неправильно(dislike) - указывается правильный ответ(like).
                  Всегда предоставляется возможность начать новую игру ( по
                  клику на кнопку «Новая игра»).
                </p>
              </Modal>
              <button type="button" onClick={this.showModal}>
                Инструкция
              </button>

              <button onClick={this.forceUpdateHandler}>Новая игра</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
