import React from 'react';

export class Header extends React.Component {
  render() {
    const headerName = 'Лабиринт';
    return (
      <div className="header">
        <div className="line"></div>
        <div className="header-name">{headerName}</div>
      </div>
    );
  }
}
