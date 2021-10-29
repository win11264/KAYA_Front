import React, { useContext, useEffect, useState } from "react";
import AddStore from "../../components/backhome/backStore/AddStore";
import StoreItem from "../../components/backhome/backStore/StoreItem";
import { StoreListContext } from "../../context/storeContext";

const BackPartner = () => {
  const [add, setAdd] = useState("");
  const { storeList, setStoreList } = useContext(StoreListContext);
  const [showImage, setShowImage] = useState("");
  console.log("Store in ui", storeList);

  const handleAdd = e => {
    if (add === 1) {
      setAdd("");
    } else {
      setAdd(1);
    }
  };

  const storeSort = storeList.sort(function (a, b) {
    return b.id - a.id;
  });

  return (
    <div
      className="w-100 bg-white d-flex flex-column align-items-center  py-4"
      style={{ minHeight: "712px" }}
    >
      <p>Partner</p>

      {!add && (
        <button className="btn btn-success fontSize" onClick={handleAdd}>
          +
        </button>
      )}
      {add && (
        <AddStore
          setShowImage={setShowImage}
          setStoreList={setStoreList}
          setAdd={setAdd}
        />
      )}

      {storeSort.map(item => {
        return (
          <StoreItem
            showImage={showImage}
            setStoreList={setStoreList}
            key={item.id}
            list={item}
            storeList={storeList}
          />
        );
      })}
    </div>
  );
};

export default BackPartner;
