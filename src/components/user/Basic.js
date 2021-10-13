import React from "react";
import { user } from "../../services/localStorage";

const Basic = ({ userD, setUserD }) => {
  console.log("image in profile", userD.image);
  return (
    <div
      className='d-flex w-100 bg-white ps-3 align-items-center'
      style={{ height: "150px" }}>
      <img
        src={userD.image}
        className='bg-success rounded-3'
        style={{ height: "100px", width: "100px" }}
      />
      <div className='d-flex flex-column ps-3 justify-content-center '>
        <p className='fs-3 fw-bold' style={{ marginBottom: "-1px" }}>
          {userD.username}
        </p>
        <p className='fs-6 fw-bold text-warning'>
          Balance : {userD.balance} KYC
        </p>
      </div>
    </div>
  );
};

export default Basic;
