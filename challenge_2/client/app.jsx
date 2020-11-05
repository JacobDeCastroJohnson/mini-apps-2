import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
    //THIS BINDING AREA
  }

  render() {
    return (
      <h2>Hello from the Front end!!!</h2>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

