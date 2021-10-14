import React, { useEffect } from "react";
import { user } from "../../services/localStorage";
import profileImage from "../../img/user.png";

const Basic = ({ userD, setUserD }) => {
  useEffect(() => {}, [userD]);
  return (
    <div
      className="d-flex w-100 bg-white ps-3 align-items-center"
      style={{ height: "150px" }}
    >
      {userD.image ? (
        <img
          src={userD.image}
          className="bg-warning rounded-3"
          style={{ height: "100px", width: "100px" }}
        />
      ) : (
        <img
          src={profileImage}
          className="bg-white rounded-3"
          style={{ height: "100px", width: "100px" }}
        />
      )}
      <div className="d-flex flex-column ps-3 justify-content-center ">
        <p className="fs-3 fw-bold" style={{ marginBottom: "-1px" }}>
          {userD.username}
        </p>
        <p className="fs-6 fw-bold text-warning">
          Balance : {userD.balance} KYC
        </p>
      </div>
    </div>
  );
};

export default Basic;
