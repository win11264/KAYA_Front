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

  // const [image, setImage] = useState(" ");

  const [boxes, setBoxes] = useState([
    { wasteId: 0, amount: 0, image: "", rate: 0, exchangeId: 0 },
    { wasteId: 0, amount: 0, image: "", rate: 0, exchangeId: 0 },
    { wasteId: 0, amount: 0, image: "", rate: 0, exchangeId: 0 },
  ]);
  // console.log(boxes);
  // console.log("waste list out of useEffect", wasteList);
  useEffect(() => {
    // console.log("waste list in use", wasteList);
    setBoxes([
      {
        wasteId: wasteList?.[0]?.id,
        amount: 0,
        image: "",

        rate: wasteList?.[0]?.rate,
      },
      {
        wasteId: wasteList?.[0]?.id,
        amount: 0,
        image: "",

        rate: wasteList?.[0]?.rate,
      },
      {
        wasteId: wasteList?.[0]?.id,
        amount: 0,
        image: "",

        rate: wasteList?.[0]?.rate,
      },
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

  console.log("page boxes", boxes);

  const handleSubmitAdd = async e => {
    e.preventDefault();
    try {
      const boxesFilter = boxes.filter(item => item.amount !== 0);
      console.log(`boxesFilter`, boxesFilter);
      const uploadPromises = boxesFilter.map(async item => {
        const formData = new FormData();
        formData.append("wasteId", item.wasteId);
        formData.append("amount", item.amount);
        formData.append("thisisinput", item.image);
        formData.append("rate", item.rate);
        await axios.post("/exchange", formData);
      });
      const res = await Promise.all(uploadPromises);
      // const formData = new FormData();
      // formData.append("wasteId", boxes?.[0]?.wasteId);
      // formData.append("amount", boxes?.[0]?.amount);
      // formData.append("thisisinput", boxes?.[0]?.image);
      // formData.append("rate", boxes?.[0]?.rate);

      // formData.append("wasteId", boxes?.[1]?.wasteId);
      // formData.append("amount", boxes?.[1]?.amount);
      // formData.append("thisisinput", boxes?.[1]?.image);
      // formData.append("rate", boxes?.[1]?.rate);

      // formData.append("wasteId", boxes?.[2]?.wasteId);
      // formData.append("amount", boxes?.[2]?.amount);
      // formData.append("thisisinput", boxes?.[2]?.image);
      // formData.append("rate", boxes?.[2]?.rate);

      // axios
      //   .post("/exchange", formData)
      //   .then((res) => {
      //     setBoxes([
      //       { wasteId: 0, amount: 0, image: "", rate: 0 },
      //       { wasteId: 0, amount: 0, image: "", rate: 0 },
      //       { wasteId: 0, amount: 0, image: "", rate: 0 },
      //     ]);
      //     alert("You Save The World !");
      //   })
      //   .catch((err) => {
      //     console.dir(err);
      //   });
      console.log(res);
      window.location.reload();

      setBoxes([
        { wasteId: 0, amount: 0, image: "", rate: 0 },
        { wasteId: 0, amount: 0, image: "", rate: 0 },
        { wasteId: 0, amount: 0, image: "", rate: 0 },
      ]);
    } catch (error) {
      console.dir(error);
    }
  };

  return (
    <div>
      <ExcDescription />
      <ExcList className="">
        <ExcCard
          wasteList={wasteList}
          setWasteList={setWasteList}
          setBoxes={setBoxes}
          box={0}
          boxes={boxes}
          // setImage={setImage}
        />
        <ExcCard
          wasteList={wasteList}
          setWasteList={setWasteList}
          // total={total}
          setBoxes={setBoxes}
          box={1}
          boxes={boxes}
          // setImage={setImage}
        />
        <ExcCard
          wasteList={wasteList}
          setWasteList={setWasteList}
          setBoxes={setBoxes}
          box={2}
          boxes={boxes}
          // setImage={setImage}
        />

        <SummaryCard handleSubmitAdd={handleSubmitAdd} total={total} />
      </ExcList>
    </div>
  );
};

export default Exchange;
