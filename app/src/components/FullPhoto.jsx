import React from "react";

const FullPhoto = ({selectedImg, setSelectedImg}) => {
  const imgUrl = `../../../assets/images/${selectedImg}.jpg`
  if (selectedImg) {
    return (
      <div>
        <img src={imgUrl} alt="" className="full-photo" />
      </div>
    );
  };
};

export default FullPhoto;
