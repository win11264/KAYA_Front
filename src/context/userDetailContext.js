import axios from "axios";
import { createContext, useState, useEffect } from "react";

const UserDetailContext = createContext();

function UserDetailContextProvider({ children }) {
  const [userD, setUserD] = useState([]);

  useEffect(() => {
    axios
      .get("/userdetail")
      .then((res) => {
        setUserD(res.data.userDetail);
        console.log("user Detail", res.data.userDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserDetailContext.Provider value={{ userD, userD }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export { UserDetailContext, UserDetailContextProvider };
