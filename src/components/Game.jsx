import React from 'react'
import { Board } from './Board'
import { Header } from './Header'
import { Footer } from './Footer'
import $ from 'jquery'
import posed from 'react-pose'
import music from '../music/massive_attack_and_mos_def-i_against_i.mp3'
var audio = new Audio(music)
audio.addEventListener('ended', () => {
  audio.play()
})

const BoxField = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

const BigBox = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})
export class Game extends React.Component {
  constructor(props) {
    super(props)
    this.timeouts = []
    this.showModal = this.showModal.bind(this)
    this.showTutorial = this.showTutorial.bind(this)
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    this.onClickButton = this.onClickButton.bind(this)
    this.audioToggle = true
    this.flag = true
    this.onClickHere1 = this.onClickHere1.bind(this)
    this.onClickHere2 = this.onClickHere2.bind(this)
    this.onClickHere3 = this.onClickHere3.bind(this)
    this.onClickHere4 = this.onClickHere4.bind(this)
    this.onClickHere5 = this.onClickHere5.bind(this)
    this.onClickHere6 = this.onClickHere6.bind(this)
    this.onClickHere7 = this.onClickHere7.bind(this)
    this.onClickHere8 = this.onClickHere8.bind(this)
    this.onClickHere9 = this.onClickHere9.bind(this)
    this.toggleMusic = this.toggleMusic.bind(this)
  }
  componentDidMount() {}
  state = {
    isVisible: false,
    isVisibleField: false,
    isVisibleCell: false,
    isVisibleArrows: false,
    show: true,
    isClicked: false,
    isClickedHere1: false,
    isClickedHere2: false,
    isClickedHere3: false,
    isClickedHere4: false,
    isClickedHere5: false,
    isClickedHere6: false,
    isClickedHere7: false,
    isClickedHere8: false,
    isClickedHere9: false,

    choosedNumber: Math.floor(Math.random() * 9) + 1,
  }
  onClickHere1() {
    this.setState({ isClickedHere1: true })
  }
  onClickHere2() {
    this.setState({ isClickedHere2: true })
  }
  onClickHere3() {
    this.setState({ isClickedHere3: true })
  }
  onClickHere4() {
    this.setState({ isClickedHere4: true })
  }
  onClickHere5() {
    this.setState({ isClickedHere5: true })
  }
  onClickHere6() {
    this.setState({ isClickedHere6: true })
  }
  onClickHere7() {
    this.setState({ isClickedHere7: true })
  }
  onClickHere8() {
    this.setState({ isClickedHere8: true })
  }
  onClickHere9() {
    this.setState({ isClickedHere9: true })
  }
  onClickButton() {
    this.setState({ isClicked: true })
  }
  showModal() {
    this.setState({ show: true })
  }
  forceUpdateHandler() {
    this.setState({
      isClickedHere1: false,
      isClickedHere2: false,
      isClickedHere3: false,
      isClickedHere4: false,
      isClickedHere5: false,
      isClickedHere6: false,
      isClickedHere7: false,
      isClickedHere8: false,
      isClickedHere9: false,
      isClicked: false,
      choosedNumber: Math.floor(Math.random() * 9) + 1,
    })
  }

  showTutorial() {
    $('#overlay').click(() => {
      $('#overlay').fadeOut(300)
      for (var i = 0; i < this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i])
      }
      this.setState({
        isVisible: false,
        isVisibleArrows: false,
        isVisibleCell: false,
        isVisibleField: false,
      })
    })
    this.timeouts = []
    this.timeouts.push(
      setTimeout(() => {
        this.setState({
          isVisible: true,
          isVisibleField: true,
        })
      }, 0)
    )
    this.timeouts.push(
      setTimeout(() => {
        this.setState({
          isVisibleField: false,
          isVisibleCell: true,
        })
      }, 4000)
    )
    this.timeouts.push(
      setTimeout(() => {
        this.setState({
          isVisibleCell: false,
          isVisibleArrows: true,
        })
      }, 8000)
    )
    this.timeouts.push(
      setTimeout(() => {
        this.setState({
          isVisibleArrows: false,
          isVisible: false,
        })
        $('#overlay').fadeOut(300)
        for (var i = 0; i < this.timeouts.length; i++) {
          clearTimeout(this.timeouts[i])
        }
        this.setState({
          isVisible: false,
          isVisibleArrows: false,
          isVisibleCell: false,
          isVisibleField: false,
        })
      }, 12000)
    )
  }

  toggleMusic() {
    if (!this.audioToggle) {
      audio.pause()
      this.audioToggle = true
    } else {
      audio.play()
      this.audioToggle = false
    }
  }
  render() {
    const { isVisible } = this.state
    const { isVisibleField } = this.state
    const { isVisibleCell } = this.state
    const { isVisibleArrows } = this.state
    return (
      <div>
        {isVisible ? (
          <BigBox className="tutorial">
            <BoxField
              className="tutorial-field"
              pose={isVisibleField ? 'visible' : 'hidden'}>
              <p className="tutorial-field-description">Это игровое поле</p>
            </BoxField>
            <BoxField
              className="tutorial-cell"
              pose={isVisibleCell ? 'visible' : 'hidden'}>
              <p className="tutorial-cell-description">
                Это ячейка игрового поля
              </p>
            </BoxField>
            <BoxField
              className="tutorial-arrows"
              pose={isVisibleArrows ? 'visible' : 'hidden'}>
              <p className="tutorial-arrows-description">
                Это стрелки, указывающие направления ходов
              </p>
            </BoxField>
          </BigBox>
        ) : (
          ''
        )}
        <div className="game">
          <div className="container">
            <div className="game-board">
              <Header />
              <Board
                isClickedHere1={this.state.isClickedHere1}
                isClickedHere2={this.state.isClickedHere2}
                isClickedHere3={this.state.isClickedHere3}
                isClickedHere4={this.state.isClickedHere4}
                isClickedHere5={this.state.isClickedHere5}
                isClickedHere6={this.state.isClickedHere6}
                isClickedHere7={this.state.isClickedHere7}
                isClickedHere8={this.state.isClickedHere8}
                isClickedHere9={this.state.isClickedHere9}
                onClickHere1={this.onClickHere1}
                onClickHere2={this.onClickHere2}
                onClickHere3={this.onClickHere3}
                onClickHere4={this.onClickHere4}
                onClickHere5={this.onClickHere5}
                onClickHere6={this.onClickHere6}
                onClickHere7={this.onClickHere7}
                onClickHere8={this.onClickHere8}
                onClickHere9={this.onClickHere9}
                choosedNumber={this.state.choosedNumber}
                isClicked={this.state.isClicked}
                onClickButton={this.onClickButton}
              />
              <Footer choosedNumber={this.state.choosedNumber} />
            </div>
            <div className="game-info">
              <button
                id="MicroCleanClick"
                type="button"
                onClick={this.showTutorial}>
                Инструкция
              </button>

              <button onClick={this.forceUpdateHandler}>Новая игра</button>
              <button onClick={this.toggleMusic}>Музыка</button>
            </div>
          </div>
        </div>
        <div id="overlay"></div>
      </div>
    )
  }
}

// Show MicroClean Details window
$(function () {
  $('#MicroCleanClick').click(function () {
    $('#overlay').fadeIn(300)
  })
  // Remove blackout
})
