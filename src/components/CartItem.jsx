import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed from Cart");
  };

  return (
<div
  className="d-flex align-items-center p-2 p-md-5 justify-content-between border-bottom border-2 border-secondary mt-2 mb-2 mx-md-5">
  <div className="d-flex flex-column flex-md-row p-0 p-md-3 gap-3 align-items-center w-100">

    <div className="w-30">
      <img className="img-fluid object-fit-cover" src={item.category.image} alt={item.title} />
    </div>

    <div className="ms-md-4 align-self-start w-100 w-md-70">
      <h1 className="h5 text-secondary fw-semibold">{item.title}</h1>
      <h1 className="h6 text-secondary fw-medium">{item.description}</h1>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <p className="fw-bold text-success fs-5">${item.price}</p>
        <div
          className="bg-danger bg-opacity-25 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
          style={{ width: '40px', height: '40px', transition: 'all 0.3s ease' }}>
          <button onClick={removeFromCart} className="btn p-0 text-danger border-0"
            style={{ background: 'transparent' }}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

);
};

export default CartItem;