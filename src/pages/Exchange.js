import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import ExcCard from "../components/exchange/ExcCard";
import ExcDescription from "../components/exchange/ExcDescription";
import ExcList from "../components/exchange/ExcList";
import SummaryCard from "../components/exchange/SummaryCard";
import { WasteListContext } from "../context/wasteContext";

const Exchange = () => {
  const { wasteList, setWasteList } = useContext(WasteListContext);

  const [wasteId1, setWasteId1] = useState(wasteList?.[0]?.id);

  const [total, setTotal] = useState(0);

  const [boxes, setBoxes] = useState([
    { wasteId: 0, amount: 0, rate: 0 },
    { wasteId: 0, amount: 0, rate: 0 },
    { wasteId: 0, amount: 0, rate: 0 },
  ]);
  console.log(boxes);
  console.log("waste list out of useEffect", wasteList);
  useEffect(() => {
    console.log("waste list in use", wasteList);
    setBoxes([
      { wasteId: wasteList?.[0]?.id, amount: 0, rate: wasteList?.[0]?.rate },
      { wasteId: wasteList?.[0]?.id, amount: 0, rate: wasteList?.[0]?.rate },
      { wasteId: wasteList?.[0]?.id, amount: 0, rate: wasteList?.[0]?.rate },
    ]);
  }, [wasteList]);

  useEffect(() => {
    const newTotal = boxes.reduce(
      (acc, item) => (acc += item.amount * item.rate),
      0
    );

    setTotal(newTotal);
    // console.log("inuseEffect", boxes);
    // console.log(newTotal);
  }, [boxes]);

  console.log("total coin", total);
  return (
    <div>
      <ExcDescription />
      <ExcList className=''>
        <ExcCard
          wasteList={wasteList}
          setWasteList={setWasteList}
          setBoxes={setBoxes}
          box={0}
          boxes={boxes}
        />
        <ExcCard
          wasteList={wasteList}
          setWasteList={setWasteList}
          // total={total}
          setBoxes={setBoxes}
          box={1}
          boxes={boxes}
        />
        <ExcCard
          wasteList={wasteList}
          setWasteList={setWasteList}
          setBoxes={setBoxes}
          box={2}
          boxes={boxes}
        />

        <SummaryCard total={total} />
      </ExcList>
    </div>
  );
};

export default Exchange;
