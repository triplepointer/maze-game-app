import React from 'react';

export class Number extends React.Component {
  render() {
    return <button className="number">{this.props.value}</button>;
  }
}
