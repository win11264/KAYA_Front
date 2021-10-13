import axios from "axios";
import React, { useEffect, useState } from "react";
import Basic from "../components/user/Basic";
import History from "../components/user/History";
import Information from "../components/user/Information";

const UserProfile = () => {
  const [userD, setUserD] = useState([]);

  useEffect(() => {
    axios
      .get("/userdetail")
      .then((res) => {
        setUserD(res.data.userDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(userD);
  return (
    <div className='w-100 d-flex flex-column'>
      <Basic userD={userD} setUserD={setUserD} />
      <Information userD={userD} setUserD={setUserD} />
      <History />
    </div>
  );
};

export default UserProfile;
