import axios from "axios";

import React, { useEffect, useState } from "react";

const StoreItem = ({
  showImage,
  storeList,
  setStoreList,
  list: { id, name, address, hashtag, contact, image },
}) => {
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editAddress, setEditAddress] = useState(address);
  const [editHashtag, setEditHashtag] = useState(hashtag);
  const [editContact, setEditContact] = useState(contact);
  const [editImage, setEditImage] = useState(image);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {}, [storeList]);

  console.log(storeList);

  useEffect(() => {}, [isUpdated]);

  const handleEdit = (e) => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      console.log("image File", editImage);
      const formData = new FormData();
      formData.append("name", editName);
      formData.append("address", editAddress);
      formData.append("hashtag", editHashtag);
      formData.append("contact", editContact);
      formData.append("thisisinput", editImage);

      const res = await axios.put(`/store/${id}`, formData);

      setStoreList((currentLists) => {
        const newLists = [...currentLists];

        return newLists.map((item) => {
          console.log(newLists);
          if (item.id === id) {
            return {
              id: item.id,
              name: editName,
              address: editAddress,
              hashtag: editHashtag,
              contact: editContact,
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

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.delete(`/store/${id}`);
      console.log("SetSuccess", res.data);
      setStoreList((currentLists) => {
        const newLists = [...currentLists];
        const idx = newLists.findIndex((list) => list.id === id);
        newLists.splice(idx, 1);
        return newLists;
      });
    } catch (error) {
      console.dir(error);
    }
  };

  return (
    <>
      {!edit ? (
        <div
          className='w-75 bg-warning shadow rounded-3 my-2
        d-flex flex-column  align-items-start 
        justify-content-center py-2 px-3 fontSize'
          style={{ height: "210px" }}>
          <div className='my-1'>
            <span className='pe-2'>Name :</span>
            <span className=''>{name}</span>
          </div>

          <div className='my-1'>
            <span className='pe-2'>Adress :</span>
            <span className=''>{address}</span>
          </div>

          <div className='my-1'>
            <span className='pe-2'>Hashtag :</span>
            <span className=''>{hashtag}</span>
          </div>

          <div className='my-1'>
            <span className='pe-2'>Contact :</span>
            <span className=''>{contact}</span>
          </div>

          <div className='my-1'>
            <span className='pe-2'>Logo :</span>

            <img src={image} height='30px' width='30px' />
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
      ) : (
        <div
          className='w-75 bg-white shadow rounded-3 my-2'
          style={{ height: "230px" }}>
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
              <label className='pe-2'>Address :</label>
              <input
                className=''
                style={{ width: "150px" }}
                placeholder='200'
                value={editAddress}
                onChange={(e) => setEditAddress(e.target.value)}
              />
            </div>

            <div className='my-1'>
              <label className='pe-2'>Hashtag :</label>
              <input
                className=''
                style={{ width: "150px" }}
                placeholder='#Green #Recycle'
                value={editHashtag}
                onChange={(e) => setEditHashtag(e.target.value)}
              />
            </div>
            <div className='my-1'>
              <label className='pe-2'>Contact :</label>
              <input
                className=''
                style={{ width: "150px" }}
                placeholder='"** Link Input **"'
                value={editContact}
                onChange={(e) => setEditContact(e.target.value)}
              />
            </div>

            <div className='my-1'>
              <label className='pe-2'>Logo :</label>
              <input
                type='file'
                className='w-75'
                onChange={(e) => {
                  console.log(e.target.files);
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
                onClick={handleEdit}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default StoreItem;
