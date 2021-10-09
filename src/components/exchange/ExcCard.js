import React, { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";

const ExcCard = ({
  wasteList,
  setWasteList,

  box,
  boxes,
  setBoxes,
}) => {
  const handleSelectWasteId = (e) => {
    const idx = wasteList.findIndex((waste) => waste.id === +e.target.value);

    // setBoxes((curr) => ({
    //   ...curr,
    //   [box]: {
    //     ...curr[box],
    //     wasteId: +e.target.value,
    //     rate: wasteList[idx].rate,
    //   },
    // }));

    const oldArr = [...boxes];
    const newArr = oldArr.map((item, index) => {
      if (index === box) {
        return {
          ...item,
          wasteId: +e.target.value,
          rate: wasteList[idx].rate,
        };
      } else return item;
    });
    setBoxes(newArr);
  };
  const handleChangeAmount = (e) => {
    // setBoxes((curr) => ({
    //   ...curr,
    //   [box]: {
    //     ...curr[box],
    //     amount: +e.target.value,
    //   },
    // }));
    const oldArr = [...boxes];
    const newArr = oldArr.map((item, idx) => {
      if (idx === box) {
        return { ...item, amount: +e.target.value };
      } else return item;
    });
    setBoxes(newArr);
  };

  // console.log(boxes?.[box]?.rate);
  // console.log("boxes", boxes);
  // console.log(box);

  return (
    <div
      className='rounded shadow bg-white my-2 d-flex'
      style={{ width: "90%", height: "150px" }}>
      <div
        className='w-100 h-100 bg-white ps-3 d-flex
      flex-column justify-content-center rounded-end'>
        <form className='d-flex flex-column my-4'>
          <select
            value={boxes?.[box].wasteId}
            onChange={handleSelectWasteId}
            className=' w-75 mb-1 border border-warning rounded shadow-sm'
            type='file'
            style={{ fontSize: "12px", height: "22px" }}>
            {wasteList.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>

          <p
            className='text-warning'
            style={{ marginBottom: "6px", fontSize: "13px" }}>
            {boxes?.[box]?.rate} KYC / Piece
          </p>

          <div>
            <label style={{ fontSize: "12px" }}>Image :</label>
            <input
              className='ms-2 w-75 mb-1'
              type='file'
              style={{ fontSize: "8px" }}
            />
          </div>
          <div>
            <label style={{ fontSize: "12px" }}>Amount :</label>
            <input
              className='my-2 ms-2  w-50 ps-2 border border-warning rounded shadow-sm'
              value={boxes?.[box]?.amount}
              onChange={handleChangeAmount}
              style={{ fontSize: "14px", height: "24px" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExcCard;
