import React from 'react'
import Delayed from './Delayed'
import { connect } from 'react-redux'

class Footer extends React.Component {
  arrowUp() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="36px"
        height="36px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    )
  }
  arrowDown() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="36px"
        height="36px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    )
  }
  arrowLeft() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="36px"
        height="36px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </svg>
    )
  }
  arrowRight() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="36px"
        height="36px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </svg>
    )
  }

  render() {
    let currentSquare = this.props.choosedNumber
    return (
      <div className="footer">
        <div className="footer-row">
          <div className="arrow-square">
            <Delayed waitBeforeShow={1000}>
              {currentSquare === 1
                ? this.arrowRight()
                : currentSquare === 2
                ? this.arrowLeft()
                : currentSquare === 3
                ? this.arrowLeft()
                : currentSquare === 4
                ? this.arrowRight()
                : currentSquare === 5
                ? this.arrowRight()
                : currentSquare === 6
                ? this.arrowUp()
                : currentSquare === 7
                ? this.arrowRight()
                : currentSquare === 8
                ? this.arrowLeft()
                : currentSquare === 9
                ? this.arrowUp()
                : ''}
            </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={2000}>
              {' '}
              {currentSquare === 1
                ? this.arrowDown()
                : currentSquare === 2
                ? this.arrowDown()
                : currentSquare === 3
                ? this.arrowDown()
                : currentSquare === 4
                ? this.arrowUp()
                : currentSquare === 5
                ? this.arrowUp()
                : currentSquare === 6
                ? this.arrowDown()
                : currentSquare === 7
                ? this.arrowUp()
                : currentSquare === 8
                ? this.arrowUp()
                : currentSquare === 9
                ? this.arrowUp()
                : ''}{' '}
            </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={3000}>
              {' '}
              {currentSquare === 1
                ? this.arrowRight()
                : currentSquare === 2
                ? this.arrowRight()
                : currentSquare === 3
                ? this.arrowRight()
                : currentSquare === 4
                ? this.arrowLeft()
                : currentSquare === 5
                ? this.arrowDown()
                : currentSquare === 6
                ? this.arrowDown()
                : currentSquare === 7
                ? this.arrowUp()
                : currentSquare === 8
                ? this.arrowRight()
                : currentSquare === 9
                ? this.arrowLeft()
                : ''}{' '}
            </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={4000}>
              {' '}
              {currentSquare === 1
                ? this.arrowUp()
                : currentSquare === 2
                ? this.arrowUp()
                : currentSquare === 3
                ? this.arrowUp()
                : currentSquare === 4
                ? this.arrowDown()
                : currentSquare === 5
                ? this.arrowDown()
                : currentSquare === 6
                ? this.arrowUp()
                : currentSquare === 7
                ? this.arrowLeft()
                : currentSquare === 8
                ? this.arrowUp()
                : currentSquare === 9
                ? this.arrowDown()
                : ''}
            </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={5000}>
              {' '}
              {currentSquare === 1
                ? this.arrowDown()
                : currentSquare === 2
                ? this.arrowRight()
                : currentSquare === 3
                ? this.arrowLeft()
                : currentSquare === 4
                ? this.arrowDown()
                : currentSquare === 5
                ? this.arrowLeft()
                : currentSquare === 6
                ? this.arrowLeft()
                : currentSquare === 7
                ? this.arrowDown()
                : currentSquare === 8
                ? this.arrowLeft()
                : currentSquare === 9
                ? this.arrowRight()
                : ''}{' '}
            </Delayed>
          </div>
        </div>
        <div className="footer-row">
          <div className="arrow-square">
            <Delayed waitBeforeShow={6000}>
              {' '}
              {currentSquare === 1
                ? this.arrowDown()
                : currentSquare === 2
                ? this.arrowDown()
                : currentSquare === 3
                ? this.arrowDown()
                : currentSquare === 4
                ? this.arrowRight()
                : currentSquare === 5
                ? this.arrowLeft()
                : currentSquare === 6
                ? this.arrowUp()
                : currentSquare === 7
                ? this.arrowRight()
                : currentSquare === 8
                ? this.arrowDown()
                : currentSquare === 9
                ? this.arrowDown()
                : ''}{' '}
            </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={7000}>
              {' '}
              {currentSquare === 1
                ? this.arrowLeft()
                : currentSquare === 2
                ? this.arrowDown()
                : currentSquare === 3
                ? this.arrowRight()
                : currentSquare === 4
                ? this.arrowUp()
                : currentSquare === 5
                ? this.arrowUp()
                : currentSquare === 6
                ? this.arrowDown()
                : currentSquare === 7
                ? this.arrowDown()
                : currentSquare === 8
                ? this.arrowRight()
                : currentSquare === 9
                ? this.arrowLeft()
                : ''}{' '}
            </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={8000}>
              {' '}
              {currentSquare === 1
                ? this.arrowUp()
                : currentSquare === 2
                ? this.arrowUp()
                : currentSquare === 3
                ? this.arrowUp()
                : currentSquare === 4
                ? this.arrowUp()
                : currentSquare === 5
                ? this.arrowRight()
                : currentSquare === 6
                ? this.arrowDown()
                : currentSquare === 7
                ? this.arrowRight()
                : currentSquare === 8
                ? this.arrowRight()
                : currentSquare === 9
                ? this.arrowLeft()
                : ''}{' '}
            </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={9000}>
              {' '}
              {currentSquare === 1
                ? this.arrowDown()
                : currentSquare === 2
                ? this.arrowLeft()
                : currentSquare === 3
                ? this.arrowLeft()
                : currentSquare === 4
                ? this.arrowRight()
                : currentSquare === 5
                ? this.arrowUp()
                : currentSquare === 6
                ? this.arrowLeft()
                : currentSquare === 7
                ? this.arrowUp()
                : currentSquare === 8
                ? this.arrowLeft()
                : currentSquare === 9
                ? this.arrowUp()
                : ''}{' '}
            </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={10000}>
              {' '}
              {currentSquare === 1
                ? this.arrowLeft()
                : currentSquare === 2
                ? this.arrowRight()
                : currentSquare === 3
                ? this.arrowDown()
                : currentSquare === 4
                ? this.arrowLeft()
                : currentSquare === 5
                ? this.arrowLeft()
                : currentSquare === 6
                ? this.arrowUp()
                : currentSquare === 7
                ? this.arrowUp()
                : currentSquare === 8
                ? this.arrowLeft()
                : currentSquare === 9
                ? this.arrowUp()
                : ''}{' '}
            </Delayed>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    endSquare: store.footer.endSquare,
    choosedNumber: store.board.choosedNumber,
  }
}

export default connect(mapStateToProps)(Footer)
