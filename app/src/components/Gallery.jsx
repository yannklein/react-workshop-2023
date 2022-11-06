import React from 'react';

import Photo from './Photo';
import FullPhoto from "./FullPhoto";

const Gallery = (
  {
    selectedImg, setSelectedImg, photoCardClass, setPhotoCardClass
  }
) => {
  const photosArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return (
    <div className="full-gallery">
      <div className="gallery">
        {
          photosArray.map((img) => {
            let component;
            if (img !== selectedImg) {
              component = (
                <div>
                  <Photo
                    img={img}
                    key={img}
                    setSelectedImg={setSelectedImg}
                    selectedImg={selectedImg}
                    photoCardClass={photoCardClass}
                    setPhotoCardClass={setPhotoCardClass}
                  />
                </div>
              );
            } else {
              component = (
                <div className="full-div">
                  <FullPhoto
                    img={selectedImg}
                    setSelectedImg={setSelectedImg}
                  />
                </div>
              );
            }
            return component;
          })
        }
      </div>
      {/* <div className="full-div">
        {
          selectedImg && (<FullPhoto img={selectedImg} />)
        }
      </div> */}
    </div>
  );
};

export default Gallery;
