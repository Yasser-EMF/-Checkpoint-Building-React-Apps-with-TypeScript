// Counter.tsx

import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-4">
            Count: <span className="text-blue-500">{this.state.count}</span>
          </p>
          <button
            onClick={this.increment}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
