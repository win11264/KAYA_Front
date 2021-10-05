import React from "react";
import HistoryItem from "./HistoryItem";

const History = () => {
  return (
    <div>
      <div
        className='w-100 bg-dark d-flex px-2 pt-3
    justify-content-start align-items-center'
        style={{ height: "50px" }}>
        <p className='fw-bold text-white'>History</p>
      </div>
      <div className='w-100 bg-white d-flex justify-content-center align-items-center flex-column pt-2'>
        <HistoryItem
          status='success'
          type='Coin Exchange'
          amount='123 '
          date='6/10/2021'
        />
        <HistoryItem
          status='danger'
          type='Coin Expense'
          amount='40 '
          date='14/10/2021'
        />
      </div>
    </div>
  );
};

export default History;
