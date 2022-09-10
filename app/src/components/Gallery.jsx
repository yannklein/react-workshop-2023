import React from 'react';

import Photo from './Photo';
import FullPhoto from "./FullPhoto";

const Gallery = ({img, setSelectedImg}) => {
  const photosArray = ['1', '1', '1', '1', '1', '1', '1', '1', '1']
  return (
    <div className="gallery">
      {
        photosArray.map((img) => <div> <Photo img={img} key={img} setSelectedImg={setSelectedImg} /> <FullPhoto img="" /> </div>)
      }
    </div>
  );
};

export default Gallery;
