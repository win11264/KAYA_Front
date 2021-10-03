import React from "react";
import PartnerCard from "../home/PartnerCard";

const PartnerList = () => {
  return (
    <div
      className='bg-white d-flex align-items-center justify-content-center '
      style={{ height: "120px" }}>
      <i class='bi bi-caret-left ps-1'></i>
      <PartnerCard />
      <PartnerCard />
      <PartnerCard />
      <i class='bi bi-caret-right pe-1'></i>
    </div>
  );
};

export default PartnerList;
