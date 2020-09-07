import React from 'react'
import Delayed from './Delayed'

export function Footer(props) {
  const arrowUp = () => {
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
  const arrowDown = () => {
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
  const arrowLeft = () => {
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
  const arrowRight = () => {
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
  let currentSquare = props.choosedNumber
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="arrow-square">
          <div className="arrow-number">1</div>
          <Delayed waitBeforeShow={1000}>
            {currentSquare === 1
              ? arrowRight()
              : currentSquare === 2
              ? arrowLeft()
              : currentSquare === 3
              ? arrowLeft()
              : currentSquare === 4
              ? arrowRight()
              : currentSquare === 5
              ? arrowRight()
              : currentSquare === 6
              ? arrowUp()
              : currentSquare === 7
              ? arrowRight()
              : currentSquare === 8
              ? arrowLeft()
              : currentSquare === 9
              ? arrowUp()
              : ''}
          </Delayed>
        </div>

        <div className="arrow-square">
          <div className="arrow-number">2</div>
          <Delayed waitBeforeShow={2000}>
            {' '}
            {currentSquare === 1
              ? arrowDown()
              : currentSquare === 2
              ? arrowDown()
              : currentSquare === 3
              ? arrowDown()
              : currentSquare === 4
              ? arrowUp()
              : currentSquare === 5
              ? arrowUp()
              : currentSquare === 6
              ? arrowDown()
              : currentSquare === 7
              ? arrowUp()
              : currentSquare === 8
              ? arrowUp()
              : currentSquare === 9
              ? arrowUp()
              : ''}{' '}
          </Delayed>
        </div>

        <div className="arrow-square">
          <div className="arrow-number">3</div>
          <Delayed waitBeforeShow={3000}>
            {' '}
            {currentSquare === 1
              ? arrowRight()
              : currentSquare === 2
              ? arrowRight()
              : currentSquare === 3
              ? arrowRight()
              : currentSquare === 4
              ? arrowLeft()
              : currentSquare === 5
              ? arrowDown()
              : currentSquare === 6
              ? arrowDown()
              : currentSquare === 7
              ? arrowUp()
              : currentSquare === 8
              ? arrowRight()
              : currentSquare === 9
              ? arrowLeft()
              : ''}{' '}
          </Delayed>
        </div>

        <div className="arrow-square">
          <div className="arrow-number">4</div>
          <Delayed waitBeforeShow={4000}>
            {' '}
            {currentSquare === 1
              ? arrowUp()
              : currentSquare === 2
              ? arrowUp()
              : currentSquare === 3
              ? arrowUp()
              : currentSquare === 4
              ? arrowDown()
              : currentSquare === 5
              ? arrowDown()
              : currentSquare === 6
              ? arrowUp()
              : currentSquare === 7
              ? arrowLeft()
              : currentSquare === 8
              ? arrowUp()
              : currentSquare === 9
              ? arrowDown()
              : ''}
          </Delayed>
        </div>

        <div className="arrow-square">
          <div className="arrow-number">5</div>
          <Delayed waitBeforeShow={5000}>
            {' '}
            {currentSquare === 1
              ? arrowDown()
              : currentSquare === 2
              ? arrowRight()
              : currentSquare === 3
              ? arrowLeft()
              : currentSquare === 4
              ? arrowDown()
              : currentSquare === 5
              ? arrowLeft()
              : currentSquare === 6
              ? arrowLeft()
              : currentSquare === 7
              ? arrowDown()
              : currentSquare === 8
              ? arrowLeft()
              : currentSquare === 9
              ? arrowRight()
              : ''}{' '}
          </Delayed>
        </div>
      </div>
      <div className="footer-row">
        <div className="arrow-square">
          <div className="arrow-number">6</div>
          <Delayed waitBeforeShow={6000}>
            {' '}
            {currentSquare === 1
              ? arrowDown()
              : currentSquare === 2
              ? arrowDown()
              : currentSquare === 3
              ? arrowDown()
              : currentSquare === 4
              ? arrowRight()
              : currentSquare === 5
              ? arrowLeft()
              : currentSquare === 6
              ? arrowUp()
              : currentSquare === 7
              ? arrowRight()
              : currentSquare === 8
              ? arrowDown()
              : currentSquare === 9
              ? arrowDown()
              : ''}{' '}
          </Delayed>
        </div>

        <div className="arrow-square">
          <div className="arrow-number">7</div>
          <Delayed waitBeforeShow={7000}>
            {' '}
            {currentSquare === 1
              ? arrowLeft()
              : currentSquare === 2
              ? arrowDown()
              : currentSquare === 3
              ? arrowRight()
              : currentSquare === 4
              ? arrowUp()
              : currentSquare === 5
              ? arrowUp()
              : currentSquare === 6
              ? arrowDown()
              : currentSquare === 7
              ? arrowDown()
              : currentSquare === 8
              ? arrowRight()
              : currentSquare === 9
              ? arrowLeft()
              : ''}{' '}
          </Delayed>
        </div>

        <div className="arrow-square">
          <div className="arrow-number">8</div>
          <Delayed waitBeforeShow={8000}>
            {' '}
            {currentSquare === 1
              ? arrowUp()
              : currentSquare === 2
              ? arrowUp()
              : currentSquare === 3
              ? arrowUp()
              : currentSquare === 4
              ? arrowUp()
              : currentSquare === 5
              ? arrowRight()
              : currentSquare === 6
              ? arrowDown()
              : currentSquare === 7
              ? arrowRight()
              : currentSquare === 8
              ? arrowRight()
              : currentSquare === 9
              ? arrowLeft()
              : ''}{' '}
          </Delayed>
        </div>

        <div className="arrow-square">
          <div className="arrow-number">9</div>
          <Delayed waitBeforeShow={9000}>
            {' '}
            {currentSquare === 1
              ? arrowDown()
              : currentSquare === 2
              ? arrowLeft()
              : currentSquare === 3
              ? arrowLeft()
              : currentSquare === 4
              ? arrowRight()
              : currentSquare === 5
              ? arrowUp()
              : currentSquare === 6
              ? arrowLeft()
              : currentSquare === 7
              ? arrowUp()
              : currentSquare === 8
              ? arrowLeft()
              : currentSquare === 9
              ? arrowUp()
              : ''}{' '}
          </Delayed>
        </div>

        <div className="arrow-square">
          <div className="arrow-number">10</div>
          <Delayed waitBeforeShow={10000}>
            {' '}
            {currentSquare === 1
              ? arrowLeft()
              : currentSquare === 2
              ? arrowRight()
              : currentSquare === 3
              ? arrowDown()
              : currentSquare === 4
              ? arrowLeft()
              : currentSquare === 5
              ? arrowLeft()
              : currentSquare === 6
              ? arrowUp()
              : currentSquare === 7
              ? arrowUp()
              : currentSquare === 8
              ? arrowLeft()
              : currentSquare === 9
              ? arrowUp()
              : ''}{' '}
          </Delayed>
        </div>
      </div>
    </div>
  )
}
