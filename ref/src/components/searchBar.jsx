import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  fetchInput = (event) => {
    // console.log(event.currentTarget.value);
    this.props.fetch(event.currentTarget.value);
  }


  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.fetchInput} />
    );
  }
}

export default SearchBar;
