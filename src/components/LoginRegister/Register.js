import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../config/axios";
import Validate from "./Validate";

const Register = ({ setLogin, setRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // validate state

  const [validateFN, setValidateFN] = useState("");
  const [validateLN, setValidateLN] = useState("");
  const [validateBD, setValidateBD] = useState("");
  const [validateEM, setValidateEM] = useState("");
  const [validateMN, setValidateMN] = useState("");
  const [validateUS, setValidateUS] = useState("");
  const [validatePW, setValidatePW] = useState("");

  console.log("typeof mn", typeof mobileNo);

  console.log(`mobileNo`, mobileNo);
  const history = useHistory();

  const handleSubmitRegister = e => {
    e.preventDefault();

    let allPass = true;

    if (!firstName) {
      allPass = false;
      setValidateFN("Firstname is required");
    } else {
      setValidateFN("");
    }

    if (!lastName) {
      allPass = false;
      setValidateLN("Lastname is required");
    } else {
      setValidateLN("");
    }

    if (!birthDate) {
      allPass = false;
      setValidateBD("Birth Date is required");
    } else {
      setValidateBD("");
    }

    if (!email) {
      allPass = false;
      setValidateEM("Email is required");
    } else {
      setValidateEM("");
    }

    if (!mobileNo) {
      setValidateMN("Mobile No. is required");
      allPass = false;
    } else if (isNaN(mobileNo)) {
      allPass = false;
      setValidateMN("Mobile No. must be numbers");
    } else {
      setValidateMN("");
    }

    if (!username) {
      allPass = false;
      setValidateUS("Username is required");
    } else {
      setValidateUS("");
    }

    if (!password) {
      allPass = false;
      setValidatePW("Password is required");
    } else if (password.length < 8) {
      allPass = false;
      setValidatePW("Password is too short");
    } else if (password.length > 16) {
      allPass = false;
      setValidatePW("Password is too long");
    } else {
      setValidatePW("");
    }

    console.log(`allPass`, allPass);

    if (allPass === true) {
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
    }
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
      <p className="text-danger fw-bold">{validateFN}</p>

      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="lastNameInput"
        placeholder="Last Name"
        style={{ fontSize: "14px", height: "30px" }}
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <p className="text-danger fw-bold">{validateLN}</p>

      <input
        type="date"
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm "
        id="dateInput"
        style={{ fontSize: "14px", height: "30px", color: "gray" }}
        value={birthDate}
        onChange={e => setBirthDate(e.target.value)}
      />
      <p className="text-danger fw-bold">{validateBD}</p>

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
      <p className="text-danger fw-bold">{validateEM}</p>

      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        placeholder="Mobile No."
        style={{ fontSize: "14px", height: "30px" }}
        value={mobileNo}
        onChange={e => setMobileNo(e.target.value)}
      />
      <p className="text-danger fw-bold">{validateMN}</p>

      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="usernameInput"
        placeholder="Username"
        style={{ fontSize: "14px", height: "30px" }}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <p className="text-danger fw-bold">{validateUS}</p>

      <input
        className="my-2  w-75 ps-2 border border-warning rounded shadow-sm"
        id="passwordInput"
        placeholder="Password (8-16 text)"
        style={{ fontSize: "14px", height: "30px" }}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <p className="text-danger fw-bold">{validatePW}</p>

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
