import React from "react";

const FullPhoto = ({ img }) => {
  const imgUrl = `../../../assets/images/${img}.jpg`;
  if (img !== undefined) {
    return (
      <div>
        <img src={imgUrl} alt="" className="full-photo" />
      </div>
    );
  };
};

export default FullPhoto;
