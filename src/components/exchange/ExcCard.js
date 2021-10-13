import axios from "axios";
import React, { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";

const ExcCard = ({
  wasteList,
  setWasteList,
  // setImage,
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

  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    const oldArr = [...boxes];
    const newArr = oldArr.map((item, idx) => {
      if (idx === box) {
        return { ...item, image: e.target.files[0] };
      } else return item;
    });
    setBoxes(newArr);
  };

  const handleChangeExchangeId = (e) => {
    const oldArr = [...boxes];
    const newArr = oldArr.map((item, idx) => {
      if (idx === box) {
        return { ...item, exchangeId: +e.target.value };
      } else return item;
    });
    setBoxes(newArr);
  };

  // const boxesitem = boxes.map((item) => {
  //   return {
  //     wasteId: item.wasteId,
  //     amount: item.amount,
  //     image: item.image,
  //     exchangeId: item.exchangeId,
  //     rate: item.rate,
  //   };
  // console.log("wasteid", item.wasteId);
  // console.log("amount", item.amount);
  // console.log("image", item.image);
  // console.log("exchangeid", item.exchangeId);
  // console.log("rate", item.rate);

  // console.log("This is box item", boxesitem);
  // console.log("This is box ", boxes);

  // const handleSubmitAdd = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("wasteId", boxes[0].wasteId);
  //   formData.append("amount", boxes[0].amount);
  //   formData.append("image", boxes[0].image);
  //   formData.append("exchangeId", boxes[0].exchangeId);
  //   formData.append("rate", boxes[0].rate);

  //   axios.post("/exchange", formData).then((res) => {
  //     setBoxes([
  //       { wasteId: 0, amount: 0, image: "", rate: 0, exchangeId: 0 },
  //       { wasteId: 0, amount: 0, image: "", rate: 0, exchangeId: 0 },
  //       { wasteId: 0, amount: 0, image: "", rate: 0, exchangeId: 0 },
  //     ]);
  //     alert("You Save The World !");
  //   });
  // };
  // const handleSubmitAdd = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("address", address);
  //   formData.append("hashtag", hashtag);
  //   formData.append("contact", contact);
  //   formData.append("thisisinput", image);

  //   axios.post("/store", formData).then((res) => {
  //     console.log(image);
  //     setShowImage(res.data.uploaded.image);
  //     setStoreList((curr) => [res.data.uploaded, ...curr]);
  //     setName("");
  //     setAddress();
  //     setHashtag("");
  //     setContact("");
  //     setImage("");
  //     setAdd(0);
  //   });
  // };

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
              onChange={handleChangeImage}
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
