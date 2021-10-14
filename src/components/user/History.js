import React, { useState } from "react";
import HistoryItem from "./HistoryItem";

const History = ({ userTrans, userExc }) => {
  console.log(`userTrans`, userTrans);
  console.log(`userExc`, userExc);
  const [status, setStatus] = useState("income");

  const handleIncome = e => {
    setStatus("income");
  };

  const excList = userExc.map(item => {
    return (
      <HistoryItem key={item.id} item={item} color="success" status={status} />
    );
  });

  const transList = userTrans.map(item => {
    return (
      <HistoryItem key={item.id} item={item} color="danger" status={status} />
    );
  });

  const handleExpense = e => {
    setStatus("expense");
  };
  return (
    <div>
      <div
        className="w-100 bg-dark d-flex px-2 pt-3
    justify-content-between align-items-center"
        style={{ height: "50px" }}
      >
        <p className="fw-bold text-white">History</p>
        <div className="pb-3">
          <span className="text-white mx-2" onClick={handleIncome}>
            Income
          </span>
          <span className=" text-white mx-1" onClick={handleExpense}>
            Expense
          </span>
        </div>
      </div>
      <div className="w-100 bg-white d-flex justify-content-center align-items-center flex-column pt-2">
        {status === "income" ? excList : transList}
      </div>
    </div>
  );
};

export default History;
