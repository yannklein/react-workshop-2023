import React from "react";

const Photo = ({img, selectedImg, setSelectedImg}) => {
  const imgUrl = `../../../assets/images/${img}.jpg`
  const handleClick = () => {
    setSelectedImg(img);
    console.log(selectedImg);
  };
  return (
    <div className="sm-photo-card">
      <img src={imgUrl} alt="photo" className="sm-photo" onClick={handleClick} />
    </div>
  );
};

export default Photo;
