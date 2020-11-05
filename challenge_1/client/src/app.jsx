import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';
const axios = require('axios');
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'

const MainWrap = styled.div`
  min-height: 700px;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(193,187,153,0.7343312324929971) 41%);
`;

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
    this.getRecords();
  }

  // GET ALL DB RECORDS - LIMIT to 100)
  getRecords() {
    axios.get('/events?_limit=40')
      // .then(res => console.log(res.data))
      .then(res => this.setState({
        data: res.data
      }))
      .catch(console.log)
  }

  // GET SEARCH RECORDS - LIMIT to 10 per pargination)
  getSearchRecords(query) {
    // axios.get('/events?q=query') - pagination limits to 10 records
    axios.get(`/events?q= ${query}&_page=5`)
    // .then(res => console.log(res.data))
    .then(res => this.setState({
      data: res.data
    }))
    .catch(console.log)
  }

  render() {
    return (
      <MainWrap>
        <Header />
        <Search search={this.getSearchRecords}/>
        <Results historicalLog={this.state.data}/>
      </MainWrap>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

