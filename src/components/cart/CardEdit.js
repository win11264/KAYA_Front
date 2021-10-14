import React from "react";

const CardEdit = ({ add, remove, item, deleteItem }) => {
  console.log("card edit", item);

  const handleClickBtnAdd = e => {
    e.preventDefault();
    add(item);
  };

  const handleClickBtnRemove = e => {
    e.preventDefault();
    remove(item);
  };

  const handleClikeBtnDelete = e => {
    e.preventDefault();
    deleteItem(item);
  };

  return (
    <div
      className="w-100 bg-sucess d-flex justify-content-center align-items-center"
      style={{ height: "30px", marginTop: "-10px" }}
    >
      <form>
        <button
          className="btn btn-warning pt-1 "
          style={{ fontSize: "10px", width: "15px", height: "22px" }}
          onClick={handleClickBtnRemove}
        >
          -
        </button>
        <span style={{ fontSize: "10px" }} className="w-25 mx-2">
          {item.qty}
        </span>
        <button
          // type="button"
          className="btn btn-warning pt-1"
          style={{ fontSize: "10px", width: "15px", height: "22px" }}
          // onClick={() => add(item)}
          onClick={handleClickBtnAdd}
        >
          +
        </button>
        <button
          // type="button"
          className="btn btn-danger pt-1 mx-1 fw-bold ps-2 "
          style={{ fontSize: "10px", width: "50px", height: "22px" }}
          onClick={handleClikeBtnDelete}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default CardEdit;
