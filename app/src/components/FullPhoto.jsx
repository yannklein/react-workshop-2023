import React from "react";

const FullPhoto = ({ img, setSelectedImg }) => {
  const imgUrl = `../../../assets/images/${img}.jpg`;
  const handleClick = () => {
    setSelectedImg(undefined);
  }
  return img !== undefined && (
    <div>
      <img
        src={imgUrl}
        alt=""
        className="full-photo"
        onClick={handleClick}
      />
    </div>
  );
};

export default FullPhoto;
