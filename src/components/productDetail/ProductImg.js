import React from "react";

const ProductImg = ({ img }) => {
  console.log(img);
  return (
    <div className='w-100 d-flex'>
      <i
        class='bi bi-arrow-left-circle-fill'
        style={{
          position: "absolute",
          zIndex: "2",
          marginLeft: "7px",
          marginTop: "150px",
        }}></i>
      <img
        src={img}
        className='w-100 bg-success'
        style={{ height: "300px", zIndex: "1", position: "relative" }}
      />

      <i
        class='bi bi-arrow-right-circle-fill'
        style={{
          position: "absolute",
          zIndex: "2",
          marginLeft: "350px",
          marginTop: "150px",
        }}></i>
    </div>
  );
};

export default ProductImg;
