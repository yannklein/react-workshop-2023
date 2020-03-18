import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Gif extends Component {

  handleClick = () => {
    const { gifId, changeSelectGif } = this.props;
    changeSelectGif(gifId);
  }

  render() {
    const { gifId } = this.props;
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <img src={url} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}
