import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '',
      description: '',
      lang: '',
      category1: '',
      category2: '',
      granularity: ''
    }
    //THIS BINDING AREA

  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Results />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

