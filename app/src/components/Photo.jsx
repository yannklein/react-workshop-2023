import React from "react";

const Photo = ({img, setSelectedImg}) => {
  const imgUrl = `../../../assets/images/${img}.jpg`
  const handleClick = () => {
    setSelectedImg(img);
  };
  return (
    <div className="sm-photo-card">
      <img src={imgUrl} alt="photo" className="sm-photo" onClick={handleClick} />
    </div>
  );
};

export default Photo;
