import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './searchBar';

const App = (props) => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif url="https://media.giphy.com/media/WuGSL4LFUMQU/giphy.gif"/>
      </div>
      <div className="right-scene">
      </div>
    </div>
  );
};

export default App;
