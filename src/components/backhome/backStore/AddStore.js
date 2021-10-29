import axios from "axios";
import React, { useState } from "react";

const AddStore = ({ setAdd, setStoreList }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");

  const [validateName, setValidateName] = useState("");
  const [validateAddress, setValidateAddress] = useState("");
  const [validateHashtag, setValidateHashtag] = useState("");
  const [validateContact, setValidateContact] = useState("");
  const [validateImg, setValidateImg] = useState("");

  const handleSubmitAdd = async e => {
    e.preventDefault();
    let allPass = true;
    console.log("setStore", setStoreList);

    if (!name) {
      allPass = false;
      setValidateName("Name is required");
    } else {
      setValidateName("");
    }

    if (!address) {
      allPass = false;
      setValidateAddress("Address is required");
    } else if (address.length > 25) {
      allPass = false;
      setValidateAddress("Address is too long");
    } else {
      setValidateAddress("");
    }

    if (!hashtag) {
      allPass = false;
      setValidateHashtag("Hashtag is required");
    } else if (address.length > 25) {
      allPass = false;
      setValidateHashtag("Hashtag is too long");
    } else {
      setValidateAddress("");
    }

    if (!contact) {
      allPass = false;
      setValidateContact("Contact is required");
    } else {
      setValidateName("");
    }

    if (!image) {
      allPass = false;
      setValidateImg("Image is required");
    } else {
      setValidateImg("");
    }

    if (allPass === true) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("address", address);
      formData.append("hashtag", hashtag);
      formData.append("contact", contact);
      formData.append("thisisinput", image);

      axios.post("/store", formData).then(res => {
        setStoreList(curr => [res.data.uploaded, ...curr]);

        setName("");
        setAddress();
        setHashtag("");
        setContact("");
        setImage("");
        setAdd("");
      });
    }

    // const res = await axios.post("/store", {
    // name,
    // address,
    // hashtag,
    // contact,
    // image,
    // });
    // setStoreList((currentLists) => [res.data.store, ...currentLists]);}
  };

  const handleSubmitCancelAdd = async e => {
    e.preventDefault();
    // setName("");
    // setRate(0);

    setAdd("");
  };
  return (
    <div
      className="w-75 bg-white shadow rounded-3 my-2"
      // style={{ height: "230px" }}
    >
      <form
        className="d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize"
      >
        <div className="my-1">
          <label className="pe-2">Name :</label>
          <input
            className=""
            style={{ width: "150px" }}
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <p className="text-danger fw-bold">{validateName}</p>
        </div>
        <div className="my-1">
          <label className="pe-2">Address :</label>
          <input
            className=""
            style={{ width: "150px" }}
            placeholder="Max. 25 Text"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <p className="text-danger fw-bold">{validateAddress}</p>

        <div className="my-1">
          <label className="pe-2">Hashtag :</label>
          <input
            className=""
            style={{ width: "150px" }}
            placeholder="#Green (Max. 25 Text)"
            value={hashtag}
            onChange={e => setHashtag(e.target.value)}
          />
          <p className="text-danger fw-bold">{validateHashtag}</p>
        </div>
        <div className="my-1">
          <label className="pe-2">Contact :</label>
          <input
            className=""
            style={{ width: "150px" }}
            placeholder='"** Link Input **"'
            value={contact}
            onChange={e => setContact(e.target.value)}
          />
        </div>
        <p className="text-danger fw-bold">{validateContact}</p>

        <div className="my-1">
          <label className="pe-2">Logo :</label>
          <input
            type="file"
            className="w-75"
            onChange={e => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <p className="text-danger fw-bold">{validateImg}</p>

        <div className="mt-2">
          <button
            className="btn btn-success fontSize"
            onClick={handleSubmitAdd}
          >
            Submit
          </button>
          <button
            className="btn btn-danger fontSize ms-2"
            onClick={handleSubmitCancelAdd}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStore;
