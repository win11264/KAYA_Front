import axios from "axios";
import React, { useState } from "react";

const AddWaste = ({ setWasteList, setAdd }) => {
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    const res = await axios.post("/waste", { name, rate });
    setWasteList((currentLists) => [res.data.waste, ...currentLists]);
    setName("");
    setRate(0);
    setAdd(0);
  };

  const handleSubmitCancelAdd = async (e) => {
    e.preventDefault();
    setName("");
    setRate(0);
    setAdd(0);
  };
  return (
    <div
      className='w-75 bg-white shadow rounded-3 my-2'
      style={{ height: "150px" }}>
      <form
        className='d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize'>
        <div className='my-1'>
          <label className='pe-2'>Name :</label>
          <input
            className=''
            style={{ width: "150px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='my-1'>
          <label className='pe-2'>Rate :</label>
          <input
            className=''
            style={{ width: "150px" }}
            placeholder
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className='mt-2'>
          <button
            className='btn btn-success fontSize'
            onClick={handleSubmitAdd}>
            Add
          </button>
          <button
            className='btn btn-danger fontSize ms-2'
            onClick={handleSubmitCancelAdd}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWaste;
