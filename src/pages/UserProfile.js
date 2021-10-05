import React from "react";
import Basic from "../components/user/Basic";
import History from "../components/user/History";
import Information from "../components/user/Information";

const UserProfile = () => {
  return (
    <div className='w-100 d-flex flex-column'>
      <Basic />
      <Information />
      <History />
    </div>
  );
};

export default UserProfile;
