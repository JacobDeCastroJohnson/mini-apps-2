import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './components/Scoreboard.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
    //THIS BINDING AREA
  }

  render() {
    return(
      <div>
        <h1> Lucky Strikes! Bowling</h1>
        <img src="Bowl.png" alt="Logo" width="200" height="150" />
        <Scoreboard />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

