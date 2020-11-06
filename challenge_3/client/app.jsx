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
    return(
      <h1> Test from the front end!</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

