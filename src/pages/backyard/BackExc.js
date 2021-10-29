import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AddWaste from "../../components/backhome/backExc/AddWaste";
import WasteList from "../../components/backhome/backExc/WasteList";
import { WasteListContext } from "../../context/wasteContext";

const BackExc = () => {
  const [add, setAdd] = useState("");
  const { wasteList, setWasteList } = useContext(WasteListContext);
  console.log("waste in ui", wasteList);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, [wasteList]);

  const handleAdd = e => {
    if (add === 1) {
      setAdd("");
    } else {
      setAdd(1);
    }
  };

  const wasteSort = wasteList.sort(function (a, b) {
    return b.id - a.id;
  });

  return (
    <div
      className="w-100 bg-white d-flex flex-column align-items-center justify-content-start py-4"
      style={{ minHeight: "712px" }}
    >
      <p>Waste List</p>

      {!add && (
        <button className="btn btn-success fontSize" onClick={handleAdd}>
          +
        </button>
      )}

      {add && <AddWaste setWasteList={setWasteList} setAdd={setAdd} />}

      {wasteSort.map(item => {
        return (
          <WasteList setWasteList={setWasteList} key={item.id} list={item} />
        );
      })}
    </div>
  );
};

export default BackExc;
