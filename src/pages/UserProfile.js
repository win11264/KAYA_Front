import axios from "axios";
import React, { useEffect, useState } from "react";
import Basic from "../components/user/Basic";
import History from "../components/user/History";
import Information from "../components/user/Information";

const UserProfile = () => {
  const [userD, setUserD] = useState([]);
  const [userExc, setUserExc] = useState([]);
  const [userTrans, setUserTrans] = useState([]);

  useEffect(() => {
    axios
      .get("/userdetail")
      .then(res => {
        setUserD(res.data.userBalance);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/exchange")
      .then(res => {
        console.log(res.data);
        setUserExc(res.data.exc);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/transaction")
      .then(res => {
        console.log(res.data);
        setUserTrans(res.data.trans);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log("--This is trans", userTrans);

  return (
    <div className='w-100 d-flex flex-column' style={{ minHeight: "712px" }}>
      <Basic userD={userD} setUserD={setUserD} />
      <Information userD={userD} setUserD={setUserD} />
      <History userExc={userExc} userTrans={userTrans} />
    </div>
  );
};

export default UserProfile;
