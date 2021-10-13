import axios from "axios";

import React, { useEffect, useState } from "react";

const ProductItem = ({
  productList,
  storeList,
  setProductList,
  storeOption,
  list: { id, name, storeId, price, amount, sale, image, information },
}) => {
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editStoreId, setEditStoreId] = useState(storeId);
  const [editPrice, setEditPrice] = useState(price);
  const [editAmount, setEditAmount] = useState(amount);
  const [editSale, setEditSale] = useState(sale);
  const [editInformation, setEditInformation] = useState(information);
  const [editImage, setEditImage] = useState(image);
  // const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    // console.log("Use Effect", productList);
  }, [productList]);

  // console.log(storeOption);

  const handleChangeStore = (e) => {
    setEditStoreId(e.target.value);
  };

  // useEffect(() => {
  //   axios
  //     .get("/store")
  //     .then((res) => {
  //       setStoreList(res.data.store);
  //       console.log("context Store", res.data.store);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {}, [productList]);

  const handleEdit = (e) => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const storeName = storeList.find((item) => item.id === storeId);

  const nameMatch = storeName.name;

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.delete(`/product/${id}`);

      setProductList((currentLists) => {
        const newLists = [...currentLists];
        const idx = newLists.findIndex((list) => list.id === id);
        newLists.splice(idx, 1);
        return newLists;
      });
    } catch (error) {
      console.dir(error);
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      console.log("image File", editImage);
      const formData = new FormData();
      formData.append("name", editName);
      formData.append("price", editPrice);
      formData.append("amount", editAmount);
      formData.append("storeId", editStoreId);
      formData.append("information", editInformation);
      formData.append("thisisinput", editImage);

      const res = await axios.put(`/product/${id}`, formData);

      setProductList((currentLists) => {
        const newLists = [...currentLists];

        return newLists.map((item) => {
          console.log(newLists);
          if (item.id === id) {
            return {
              id: item.id,
              name: editName,
              price: +editPrice,
              amount: +editAmount,
              sale: +editSale,
              storeId: +editStoreId,
              information: editInformation,
              image: res.data,
            };
          }
          console.log(res.data);
          return item;
        });
      });
      setEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {!edit ? (
        <div
          className='w-75 bg-warning shadow rounded-3 my-2
        d-flex 
        align-items-start justify-content-center '
          style={{ height: "200px" }}>
          <img className='w-25 h-100 bg-success rounded-start' src={image} />
          <div className='w-75 h-100 py-2 px-3 fontSize'>
            <div className='my-1'>
              <span className='pe-2'>Name :</span>
              <span className='pe-2'>{name}</span>
            </div>
            <div className='my-1'>
              <span className='pe-2'>Partner :</span>
              <span className='pe-2'>{nameMatch}</span>
            </div>
            <div className='my-1'>
              <span className='pe-2'>Price :</span>
              <span className='pe-2'>{price} KYC</span>
            </div>
            <div className='my-1'>
              <span className='pe-2'>Amount :</span>
              <span className='pe-2'>{amount}</span>
            </div>
            <div className='my-1'>
              <span className='pe-2'>Sale :</span>
              <span className='pe-2'>{sale}</span>
            </div>

            <div className='mt-2'>
              <button className='btn btn-success fontSize' onClick={handleEdit}>
                Edit
              </button>
              <button
                className='btn btn-danger fontSize ms-2'
                onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className='w-75 bg-white shadow rounded-3 my-2'
          style={{ height: "350px" }}>
          <form
            className='d-flex flex-column  h-100
      align-items-start justify-content-center py-2 px-3 fontSize'>
            <div className='my-1'>
              <label className='pe-2'>Name :</label>
              <input
                className=''
                style={{ width: "150px" }}
                placeholder='200'
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className='my-1'>
              <label className='pe-2'>Partner</label>
              <select value={editStoreId} onChange={handleChangeStore}>
                {storeOption}
              </select>
            </div>
            <div className='my-1'>
              <label className='pe-2'>Price :</label>
              <input
                className=''
                style={{ width: "150px" }}
                placeholder='200'
                value={editPrice}
                onChange={(e) => setEditPrice(+e.target.value)}
              />
            </div>
            <div className='my-1'>
              <label className='pe-2'>Amount :</label>
              <input
                className=''
                style={{ width: "150px" }}
                placeholder='200'
                value={editAmount}
                onChange={(e) => setEditAmount(+e.target.value)}
              />
            </div>

            <div className='my-1'>
              <label className='pe-2'>Detail :</label>
            </div>
            <div className='my-1'>
              <textarea
                className=''
                style={{ width: "250px" }}
                placeholder='Product Information'
                value={editInformation}
                onChange={(e) => setEditInformation(e.target.value)}
              />
            </div>

            <div className='my-1'>
              <label className='pe-2'>Image :</label>
              <input
                type='file'
                className='w-75'
                onChange={(e) => {
                  setEditImage(e.target.files[0]);
                }}
              />
            </div>

            <div className='mt-2'>
              <button
                className='btn btn-success fontSize'
                onClick={handleSubmitEdit}>
                Submit
              </button>
              <button
                className='btn btn-danger fontSize ms-2'
                onClick={(e) => setEdit(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ProductItem;
