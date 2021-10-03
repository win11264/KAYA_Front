import React from "react";
import Popularcard from "./PopularCard";

const Popularproduct = () => {
  return (
    <div style={{ height: "500px" }}>
      <div className='bg-warning' style={{ height: "50px" }}>
        <p className='fs-5 pt-2 fw-bold text-center'>KAYA Mall Top Chart</p>
      </div>
      <Popularcard
        rank='1'
        title='Creamy Mug'
        store='Grennery Inc.'
        price='120 KYC'
      />
      <Popularcard
        rank='2'
        title='Chinese Mug'
        store='Eastern Design'
        price='90 KYC'
      />
      <Popularcard
        rank='3'
        title='Plain Mug'
        store='Minimalist'
        price='140 KYC'
      />
    </div>
  );
};

export default Popularproduct;
