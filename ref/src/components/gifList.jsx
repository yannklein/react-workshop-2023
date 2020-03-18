import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {

  clickGifFromList = (src) => {
    this.props.selectGif(src);
  }

  render() {

    // const gifArray = [
    //   "https://media.giphy.com/media/HuVCpmfKheI2Q/giphy.gif",
    //   "https://media.giphy.com/media/u6uAu3yyDNqRq/giphy.gif"
    // ];

    return (
      <div className="gif-list">
        {this.props.gifList.map( gif => <Gif src={gif} key={gif} clickGifFromList={this.clickGifFromList} />)}
      </div>
    );
  }
}

export default GifList;
