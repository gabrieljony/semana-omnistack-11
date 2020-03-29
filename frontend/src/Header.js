import React, { Component } from 'react';

export default class src extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h1>{this.props.children}</h1>
      </header>
    );
  }
}
