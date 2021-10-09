import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { WasteListContext } from "../../../context/wasteContext";

const WasteList = ({ setWasteList, list: { id, name, rate } }) => {
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editRate, setEditRate] = useState(rate);

  // const { wasteList, setWasteList } = useContext(WasteListContext);

  // const newWasteList = wasteList;
  // console.log("new", newWasteList);

  const handleEdit = (e) => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.delete(`/waste/${id}`);
      console.log("SetSuccess", res.data);
      setWasteList((currentLists) => {
        const newLists = [...currentLists];
        const idx = newLists.findIndex((list) => list.id === id);
        newLists.splice(idx, 1);
        return newLists;
      });
    } catch (error) {
      console.dir(error);
    }
  };

  const handleSubmitEdit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.put(`/waste/${id}`, {
        name: editName,
        rate: editRate,
      });

      setWasteList((currentLists) => {
        const newLists = [...currentLists];

        // const idx = newLists.findIndex((list) => list.id === id);
        // console.log(idx);
        return newLists.map((item) => {
          if (item.id === id) {
            return {
              name: editName,
              rate: editRate,
            };
          }
          return item;
        });
      });
      setEdit(false);
    } catch (error) {}
  };
  const handleCancel = (e) => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <>
      {!edit ? (
        <div
          className='w-75 bg-warning shadow rounded-3 my-2'
          style={{ height: "120px" }}>
          <div
            className='d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize'>
            <div className='my-1'>
              <span className='pe-2'>Name :</span>
              <span className=''>{name}</span>
            </div>
            <div className='my-1'>
              <span className='pe-2'>Rate :</span>
              <span className=''>{+rate} KYC</span>
            </div>

            <div className='mt-2'>
              <button className='btn btn-success fontSize' onClick={handleEdit}>
                Edit
              </button>
              <button
                className='btn btn-danger fontSize ms-2'
                onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
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
                value={editName}
                placeholder={editName}
                style={{ width: "150px" }}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className='my-1'>
              <label className='pe-2'>Rate :</label>
              <input
                className=''
                placeholder={editRate}
                value={editRate}
                style={{ width: "150px" }}
                onChange={(e) => setEditRate(e.target.value)}
              />
            </div>

            <div className='mt-2'>
              <button
                className='btn btn-success fontSize'
                onClick={handleSubmitEdit}>
                Submit
              </button>
              <button
                className='btn btn-danger fontSize ms-2'
                onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default WasteList;
