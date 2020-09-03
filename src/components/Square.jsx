import React from 'react'

export class Square extends React.Component {
  constructor(props) {
    super(props)
    this.number = this.props.number
    this.value = this.props.value
    this.state = { value: 'hidden' }
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          if (
            (this.number === 1 && this.value === 7) ||
            (this.number === 2 && this.value === 6) ||
            (this.number === 3 && this.value === 5) ||
            (this.number === 4 && this.value === 2) ||
            (this.number === 5 && this.value === 1) ||
            (this.number === 6 && this.value === 4) ||
            (this.number === 7 && this.value === 3) ||
            (this.number === 8 && this.value === 4) ||
            (this.number === 9 && this.value === 1)
          )
            this.setState({ value: true })
          else this.setState({ value: false })
        }}>
        {this.state.value === true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            width="18px"
            height="18px">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
          </svg>
        ) : this.state.value === false ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
            width="18px"
            height="18px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
          </svg>
        ) : (
          ''
        )}
        {this.props.number === this.props.value ? (
          <div className="start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
              width="18px"
              height="18px">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" />
            </svg>
          </div>
        ) : (
          ''
        )}
      </button>
    )
  }
}
