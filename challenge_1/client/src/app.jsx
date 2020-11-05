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
    this.getSearchRecords = this.getSearchRecords.bind(this);
  }

  componentDidMount() {
    this.getSearchRecords();
  }

  getRecords() {
    axios.get('/events?_limit=100')
      // .then(res => console.log(res.data))
      .then(res => this.setState({
        data: res.data
      }))
      .catch(console.log)
  }

  getSearchRecords(query) {
    // axios.get('/events?q=query')
    axios.get(`/events?q= ${query}`)
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
        <Search search={this.getSearchRecords}/>
        <Results historicalLog={this.state.data}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

