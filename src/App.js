import React from 'react';

class App extends React.Component {
  state = {
    counter: 0
  }

handleClick = () => {
  this.setState({
    counter: this.state.counter + 1
  })
}
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently:{this.state.counter}</h1>
        <button
        data-test="increment-button"
        onClick={ this.handleClick }
        >Increment counter
        </button>
      </div>
    );
  }
}


export default App;
