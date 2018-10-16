import * as React from 'react';

type CounterProps = {
  message: string,
};

type CounterState = {
  count: number,
};

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div onClick={() => this.increment()}>{this.props.message} {this.state.count}</div>
    );
  }
}

export default Counter;
