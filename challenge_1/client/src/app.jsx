import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';
const axios = require('axios');
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      date: '',
      description: '',
      lang: '',
      category1: '',
      category2: '',
      granularity: '',
      query: '',
    }
    //THIS BINDING AREA
    this.getRecords = this.getRecords.bind(this);
  }

  componentDidMount() {
    this.getRecords();
  }

  getRecords() {
    axios.get('/events?_limit=10')
      // .then(res => console.log(res.data))
      .then(res => this.setState({
        data: res.data
      }))
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Results historicalLog={this.state.data}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

