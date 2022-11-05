import React from "react";

const FullPhoto = ({img, spot}) => {
  const imgUrl = `../../../assets/images/${img}.jpg`
  if (img === spot) {
    return (
      <div>
        <img src={imgUrl} alt="" className="full-photo" />
      </div>
    );
  };
};

export default FullPhoto;
