import axios from "axios";
import React, { useState } from "react";

const AddProductForm = ({
  productList,
  setAdd,
  storeList,
  setProductList,
  storeOption,
}) => {
  //   const handleSubmitAdd = async e => {
  //     e.preventDefault()
  //     const res = await axios.post('/product',{})
  // } name, price, amount, information, image, storeId

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [information, setInformation] = useState("");
  const [image, setImage] = useState("");
  const [storeId, setStoreId] = useState(storeList[0].id);
  console.log(`storeList in add`, storeList);
  console.log(`storeOption in Add`, storeOption);
  const handleChangeStore = e => {
    setStoreId(e.target.value);
  };

  const handleSubmitAdd = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("amount", amount);
    formData.append("storeId", storeId);
    formData.append("information", information);
    formData.append("thisisinput", image);

    axios.post("/product", formData).then(res => {
      console.log(res.data.product);

      setProductList(curr => [res.data.product, ...curr]);
      setName("");
      setPrice();
      setAmount("");
      setStoreId(0);
      setImage("");
      setInformation("");
      setAdd("");

      // window.location.reload();
    });
  };

  return (
    <div
      className="w-75 bg-white shadow rounded-3 my-2"
      style={{ height: "350px" }}
    >
      <form
        className="d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize"
      >
        <div className="my-1">
          <label className="pe-2">Name :</label>
          <input
            className=""
            style={{ width: "150px" }}
            placeholder="200"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="my-1">
          <label className="pe-2">Partner</label>
          <select value={storeId} onChange={handleChangeStore}>
            {storeOption}
          </select>
        </div>
        <div className="my-1">
          <label className="pe-2">Price :</label>
          <input
            className=""
            style={{ width: "150px" }}
            placeholder="200"
            value={price}
            onChange={e => setPrice(+e.target.value)}
          />
        </div>
        <div className="my-1">
          <label className="pe-2">Amount :</label>
          <input
            className=""
            style={{ width: "150px" }}
            placeholder="200"
            value={amount}
            onChange={e => setAmount(+e.target.value)}
          />
        </div>

        <div className="my-1">
          <label className="pe-2">Detail :</label>
        </div>
        <div className="my-1">
          <textarea
            className=""
            style={{ width: "250px" }}
            placeholder="Product Information"
            value={information}
            onChange={e => setInformation(e.target.value)}
          />
        </div>

        <div className="my-1">
          <label className="pe-2">Image :</label>
          <input
            type="file"
            className="w-75"
            onChange={e => {
              setImage(e.target.files[0]);
            }}
          />
        </div>

        <div className="mt-2">
          <button
            className="btn btn-success fontSize"
            onClick={handleSubmitAdd}
          >
            Submit
          </button>
          <button
            className="btn btn-danger fontSize ms-2"
            onClick={() => setAdd("")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
