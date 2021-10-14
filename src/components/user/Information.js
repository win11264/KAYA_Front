import axios from "axios";

import React, { useEffect, useState } from "react";
import { user } from "../../services/localStorage";
const Information = ({ userD, setUserD }) => {
  console.log("Basic user", userD.firstName);

  const [edit, setEdit] = useState(false);

  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editMobileNo, setEditMobileNo] = useState(0);
  const [editImage, setEditImage] = useState("");
  const [editBirthDate, setEditBirthDate] = useState("");

  useEffect(() => {
    console.log(userD);
    setEditFirstName(userD.firstName);
    setEditLastName(userD.lastName);
    setEditAddress(userD.address);
    setEditEmail(userD.email);
    setEditMobileNo(userD.mobileNo);
    setEditImage(userD.image);
    setEditBirthDate(userD.birthDate);
  }, [userD]);

  console.log("userD", editLastName);
  // console.log("state", editFirstName);

  const handleEdit = e => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handleSubmitEdit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", editFirstName);
      formData.append("lastName", editLastName);
      formData.append("birthDate", editBirthDate);
      formData.append("address", editAddress);
      formData.append("email", editEmail);
      formData.append("mobileNo", editMobileNo);
      formData.append("thisisinput", editImage);

      const res = await axios.put(`/userdetail/${userD.id}`, formData);

      setEdit(false);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-100">
      <div
        className="w-100 bg-dark d-flex px-2 pt-3
    justify-content-between align-items-center"
        style={{ height: "50px" }}
      >
        <p className="fw-bold text-white">User Information</p>
        <p className="text-secondary" onClick={handleEdit}>
          Edit
        </p>
      </div>
      <form className=" d-flex justify-content-center align-items-center flex-column bg-white py-2">
        <input
          className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
          id="firstNameInput"
          placeholder="First Name"
          value={editFirstName}
          style={{ fontSize: "14px", height: "30px" }}
          onChange={e => setEditFirstName(e.target.value)}
          disabled={!edit}
        />
        <input
          className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
          id="lastNameInput"
          placeholder="Last Name"
          value={editLastName}
          style={{ fontSize: "14px", height: "30px" }}
          onChange={e => setEditLastName(e.target.value)}
          disabled={!edit}
        />
        <input
          type="date"
          className="my-2  w-75 ps-2 border border-warning rounded shadow-sm "
          id="dateInput"
          value={editBirthDate}
          style={{ fontSize: "14px", height: "30px", color: "gray" }}
          onChange={e => setEditBirthDate(e.target.value)}
          disabled={!edit}
        />

        <textarea
          className="w-75 border border-warning rounded shadow-sm ps-2 my-2"
          placeholder="Home Address"
          rows="3"
          value={editAddress}
          style={{ fontSize: "14px" }}
          onChange={e => setEditAddress(e.target.value)}
          disabled={!edit}
        ></textarea>

        <input
          className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
          id="emailInput"
          placeholder="Email Address"
          value={editEmail}
          style={{ fontSize: "14px", height: "30px" }}
          onChange={e => setEditEmail(e.target.value)}
          disabled={!edit}
        />

        <input
          className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
          id="usernameInput"
          placeholder="Mobile No."
          value={editMobileNo}
          style={{ fontSize: "14px", height: "30px" }}
          onChange={e => setEditMobileNo(e.target.value)}
          disabled={!edit}
        />
        {edit && (
          <div className="my-1">
            <span className="w-25 mx-2 ps-5 " style={{ fontSize: "12px" }}>
              Profile Image
            </span>
            <input
              type="file"
              className="w-50 mx-1"
              style={{ fontSize: "12px" }}
              onChange={e => {
                setEditImage(e.target.files[0]);
              }}
            />
          </div>
        )}

        {edit && (
          <button
            className="w-75 bg-warning border border-warning rounded shadow-sm text-center my-2"
            style={{ fontSize: "14px", height: "30px" }}
            onClick={handleSubmitEdit}
          >
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
};

export default Information;
