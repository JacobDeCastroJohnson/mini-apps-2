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
        <Scoreboard />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

