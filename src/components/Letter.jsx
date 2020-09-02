import React from 'react';

export class Letter extends React.Component {
  render() {
    return <button className="letter">{this.props.value}</button>;
  }
}
