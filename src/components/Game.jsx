import React from 'react'
import { Board } from './Board'
import { Header } from './Header'
import { Footer } from './Footer'
import { Modal } from './Modal'
import music from '../music/massive_attack_and_mos_def-i_against_i.mp3'

export class Game extends React.Component {
  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    this.onClickButton = this.onClickButton.bind(this)
    this.audioToggle = true
  }
  state = {
    show: true,
    isClicked: false,
    choosedNumber: Math.floor(Math.random() * 9) + 1,
  }
  onClickButton() {
    this.setState({ isClicked: true })
  }
  showModal() {
    this.setState({ show: true })
  }
  forceUpdateHandler() {
    this.setState({
      isClicked: false,
      choosedNumber: Math.floor(Math.random() * 9) + 1,
    })
  }

  hideModal() {
    this.setState((prevState) => {
      return { show: false }
    })
    if (this.audioToggle) {
      var audio = new Audio(music)
      audio.play()
      this.audioToggle = false
    }
  }
  render() {
    return (
      <div>
        <div className="game">
          <div className="container">
            <div className="game-board">
              <Header />
              <Board
                choosedNumber={this.state.choosedNumber}
                isClicked={this.state.isClicked}
                onClickButton={this.onClickButton}
              />
              <Footer choosedNumber={this.state.choosedNumber} />
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
