import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../config/axios";

const Register = ({ setLogin, setRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmitRegister = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("birthDate", birthDate);
    formData.append("email", email);
    formData.append("mobileNo", mobileNo);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    axios
      .post("/user/register", {
        firstName,
        lastName,
        birthDate,
        email,
        mobileNo,
        username,
        password,
        confirmPassword,
      })
      .then(() => {
        alert('"Your account has been created. Please log in to continue."');

        window.location.reload();
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <form
      className=" d-flex justify-content-center align-items-center flex-column bg-white py-2"
      onSubmit={handleSubmitRegister}
    >
      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="firstNameInput"
        placeholder="First Name"
        style={{ fontSize: "14px", height: "30px" }}
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="lastNameInput"
        placeholder="Last Name"
        style={{ fontSize: "14px", height: "30px" }}
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <input
        type="date"
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm "
        id="dateInput"
        style={{ fontSize: "14px", height: "30px", color: "gray" }}
        value={birthDate}
        onChange={e => setBirthDate(e.target.value)}
      />
      {/* <textarea
        className='w-75 border border-warning rounded shadow-sm ps-2 my-2'
        placeholder='Home Address'
        rows='3'
        style={{ fontSize: "14px" }}></textarea> */}
      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="emailInput"
        placeholder="Email Address"
        style={{ fontSize: "14px", height: "30px" }}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="emailInput"
        placeholder="Mobile No."
        style={{ fontSize: "14px", height: "30px" }}
        value={mobileNo}
        onChange={e => setMobileNo(e.target.value)}
      />
      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="usernameInput"
        placeholder="Username"
        style={{ fontSize: "14px", height: "30px" }}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="passwordInput"
        placeholder="Password"
        style={{ fontSize: "14px", height: "30px" }}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="confirmPasswordInput"
        placeholder="Confirm Password"
        style={{ fontSize: "14px", height: "30px" }}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <button
        className="w-75 bg-warning border border-warning rounded shadow-sm text-center my-2"
        style={{ fontSize: "14px", height: "30px" }}
      >
        Create Account
      </button>
    </form>
  );
};

export default Register;
