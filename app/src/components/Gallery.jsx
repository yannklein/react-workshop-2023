import React from 'react';

import Photo from './Photo';
import FullPhoto from "./FullPhoto";

const Gallery = ({selectedImg, setSelectedImg, photoCardClass, setPhotoCardClass}) => {
  const photosArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return (
    <div className="gallery">
      {
        photosArray.map((img) => (
          <div>
            <Photo img={img} key={img} setSelectedImg={setSelectedImg} selectedImg={selectedImg} photoCardClass={photoCardClass} setPhotoCardClass={setPhotoCardClass} selectedImg={selectedImg} />
            <FullPhoto spot={img} key={`full${img}`} img={selectedImg} />
          </div>
        ))
      }
    </div>
  );
};

export default Gallery;
