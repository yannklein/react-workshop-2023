import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "https://media.giphy.com/media/HuVCpmfKheI2Q/giphy.gif"
    }
  }

  changeSelection = (src) => {
    this.setState({
      selectedGif: src
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif src={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.changeSelection}/>
        </div>
      </div>
    )
  }
}

export default App;