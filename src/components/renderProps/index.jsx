import React, { Component } from 'react';

export default class renderProps extends Component {
  render() {
    return (
      <div>
        <h2>renderProps</h2>
        <A render={(dataFromA) => <B dataFromA={dataFromA} />} />
      </div>
    );
  }
}

class A extends Component {
  state = {
    data: 'A 中的 data'
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h2>AAAAA</h2>
        {this.props.render(data)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h2>BBBBB</h2>
        <p>{this.props.dataFromA}</p>
      </div>
    );
  }
}
