import React from "react";

const Photo = (
  {
    img, selectedImg, setSelectedImg, photoCardClass, setPhotoCardClass
  }
) => {
  const imgUrl = `../../../assets/images/${img}.jpg`;
  const handleClick = (event) => {
    if (selectedImg !== undefined) {
      const hiddenPhotos = document.getElementsByClassName('hidden');
      const hiddenPhoto = hiddenPhotos[0];
      hiddenPhoto.className = 'mini-photo-card';
    }
    setSelectedImg(img);
    event.target.className = 'hidden';
    setPhotoCardClass('mini-photo-card');
  };
  return (
    <div className={photoCardClass}>
      <img
        src={imgUrl}
        alt=""
        className="sm-photo"
        onClick={handleClick}
      />
    </div>
  );
};

export default Photo;
