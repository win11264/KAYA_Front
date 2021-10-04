import React from "react";

const ProductImg = () => {
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
      <div
        className='w-100 bg-success'
        style={{ height: "300px", zIndex: "1", position: "relative" }}></div>

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
