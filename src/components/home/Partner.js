import React from "react";
import PartnerCard from "./PartnerCard";
import Partnercard from "./PartnerCard";

const Partner = () => {
  return (
    <div className='w-100 bg-white' style={{ height: "355px" }}>
      <div
        className='w-100 partnerTop d-flex align-items-center justify-content-center pt-3'
        style={{ height: "100px" }}>
        <p
          className='fs-1 text-white fw-bold'
          style={{ textShadow: "1px 1px 2px #000000" }}>
          Our Partner
        </p>
      </div>
      <div className='d-flex flex-column mt-2'>
        <div className='d-flex justify-content-center'>
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
        <div className='d-flex justify-content-center'>
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
      </div>
    </div>
  );
};

export default Partner;
