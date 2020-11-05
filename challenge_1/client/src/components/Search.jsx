import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
  width: 400px;
  margin: auto;
  box-shadow: 0 0 black;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props);


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
    // alert('Search button clicked!' + this.state.query);
     event.preventDefault();
    // Pass in callback function from App Level here
    this.props.search(this.state.query);

    }

  render() {
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <SearchBar type="text" name="query" placeholder="Search here (ie. death, Greece, Seleucid, etc ...)" value={this.state.query} onChange={this.handleChange}/>
        <button type="submit">Look back in time!</button>
      </form>

    )
  }
}

export default Search;