import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifIds: ["HuVCpmfKheI2Q"],
      selectedGif: "HuVCpmfKheI2Q"
    }
  }

  fetchGifs = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifIds: result.data.map(gifObject => gifObject.id)
        });
      });
  };


  changeSelection = (src) => {
    this.setState({
      selectedGif: src
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar fetch={this.fetchGifs} />
          <div className="selected-gif">
            <Gif src={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.changeSelection} gifList={this.state.gifIds} />
        </div>
      </div>
    )
  }
}

export default App;
