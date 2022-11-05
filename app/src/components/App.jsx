import React, { useState } from 'react';

import Photo from './Photo';
import FullPhoto from './FullPhoto';
import Gallery from "./Gallery";

const App = () => {
  const [selectedImg, setSelectedImg] = useState();
  return (
    <div className="container">
      <Gallery setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
    </div>
  );
};

export default App;
