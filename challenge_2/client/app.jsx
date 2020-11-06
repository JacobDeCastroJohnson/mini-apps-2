import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import Graph from './Graph.jsx';
import List from './List.jsx';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bpi: [],
    }
    //THIS BINDING AREA
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-08-01&end=2020-09-01')
    // .then(res => console.log(res.data.bpi))
    .then(res => this.setState({
      bpi: res.data.bpi,
    }))
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <h2>Cryptocurrency Market Price</h2>
        <List bpi={this.state.bpi}/>
        <a href="https://www.coindesk.com/price/bitcoin"> Powered by Coindesk </a>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

