import React from "react";

const HistoryItem = ({ status, type, amount, date }) => {
  return (
    <div>
      <div
        style={{ height: "100px", width: "330px" }}
        className={`bg-${status} d-flex rounded-2 my-2 shadow-sm`}>
        <div
          className='w-100 h-100 ps-3 d-flex
         justify-content-between align-items-center px-3 rounded'>
          <div>
            <p className='fs-5 fw-bold text-white'>{type}</p>
            <p className='fs-6 text-white' style={{ marginTop: "-15px" }}>
              {amount}KYC
            </p>
          </div>
          <div className='text-end'>
            <p className='fs-6  text-white'>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
