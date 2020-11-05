import React from 'react';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "",
    }
    //THIS BINDING AREA
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit(event) {
    alert('Search button clicked!' + this.state.query);
     event.preventDefault();
    // Pass in callback function from App Level here
    }

  render() {
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="query" placeholder="Search here" value={this.state.query} onChange={this.handleChange}/>
        <button type="submit">Look back in time!</button>
      </form>

    )
  }
}

export default Search;