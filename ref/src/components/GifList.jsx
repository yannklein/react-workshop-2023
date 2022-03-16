import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIdList, changeSelectGif } = props;
  return (
    <div className="gif-list">
      { gifIdList.map(
        (gifId) => <Gif gifId={gifId} key={gifId} changeSelectGif={changeSelectGif} />
      )}
    </div>
  );
};

export default GifList;
