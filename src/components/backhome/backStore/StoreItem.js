import React from "react";

const StoreItem = ({
  setStoreList,
  list: { id, name, address, hashtag, contact, image },
}) => {
  return (
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
        <span className=''>{image}</span>
      </div>

      <div className='mt-2'>
        <button className='btn btn-success fontSize'>Edit</button>
        <button className='btn btn-danger fontSize ms-2'>Delete</button>
      </div>
    </div>
  );
};

export default StoreItem;
