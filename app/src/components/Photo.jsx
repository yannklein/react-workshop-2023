import React from "react";

const Photo = (
  {
    img, selectedImg, setSelectedImg, photoCardClass, setPhotoCardClass
  }
) => {
  const imgUrl = `../../../assets/images/${img}.jpg`;
  const handleClick = () => {
    setSelectedImg(img);
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
