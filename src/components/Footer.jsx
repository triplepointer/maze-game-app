import React from 'react';
import Delayed from './Delayed';

export class Footer extends React.Component {
  arrowUp() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="36px"
        height="36px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    );
  }
  arrowDown() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="36px"
        height="36px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    );
  }
  arrowLeft() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="36px"
        height="36px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </svg>
    );
  }
  arrowRight() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="36px"
        height="36px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </svg>
    );
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-row">
          <div className="arrow-square">
            <Delayed waitBeforeShow={1000}>{this.arrowUp()}</Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={2000}>{this.arrowDown()} </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={3000}>{this.arrowLeft()} </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={4000}>{this.arrowRight()}</Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={5000}>{this.arrowUp()} </Delayed>
          </div>
        </div>
        <div className="footer-row">
          <div className="arrow-square">
            <Delayed waitBeforeShow={6000}>{this.arrowUp()} </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={7000}>{this.arrowUp()} </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={8000}>{this.arrowUp()} </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={9000}>{this.arrowUp()} </Delayed>
          </div>

          <div className="arrow-square">
            <Delayed waitBeforeShow={10000}>{this.arrowUp()} </Delayed>
          </div>
        </div>
      </div>
    );
  }
}
