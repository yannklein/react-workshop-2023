import React, { Component } from 'react';

class Gif extends Component {

  clickGif = () => {
    // console.log(event);
    this.props.clickGifFromList(this.props.src);
  }

  render() {

    const url = `https://media.giphy.com/media/${this.props.src}/giphy.gif`;

    return (
      <img src={url} alt="" className="gif" onClick={this.clickGif}/>
    );
  }
}

export default Gif;
