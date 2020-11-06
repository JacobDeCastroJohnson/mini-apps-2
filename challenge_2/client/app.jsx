import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
    //THIS BINDING AREA
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => console.log(res.data))
    .catch(console.log)
  }

  render() {
    return (
      <h2>Hello from the Front end!!!</h2>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

