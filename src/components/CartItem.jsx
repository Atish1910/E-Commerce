import React from "react";
import { useDispatch } from "react-redux";
import {
  remove,
  decreaseItemQuantity,
  addItemQuantity,
} from "../Redux/Slices/CartSlice";
import toast from "react-hot-toast";

// besically in below component we are doing when user add a product in cart we can delete increase & decrease Quantity with help of redux
const CartItem = ({ item }) => { // this item component will receive item from cart via props
  
  // as we want use redux dispatch we are define first
  const dispatch = useDispatch();

  // it will remove item from cart
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed from Cart");
  };

  // there is + icon we can increase quantity from here
  const increaseQuantity = () => {
    dispatch(addItemQuantity(item)); //
  };

  // there is - icon we can decrease quantity from here
  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(item));
  };
  return (
    <>
      <div className="row border py-2 mt-4 rounded-3 align-items-center">
        <div className="col-4">
          <img src={item.category.image} className="cart-img" alt="" />
        </div>
        <div className="col-6">
          <h1 className="text-secondary cart-text ">{item.title}</h1>
          <p className="fw-bold text-success fs-5">${item.price}</p>
          <div className="d-flex  align-items-center justify-content-around">
            <button
              onClick={decreaseQuantity}
              className=" border-0 text-primary h3"
              style={{ background: "transparent" }}
            >
              <i className="bi bi-dash fs-3 border rounded-pill"></i>
            </button>

            <span className=" fs-3 border rounded-pill">{item.quantity}</span>

            <button
              onClick={increaseQuantity}
              className=" border-0 text-primary h3"
              style={{ background: "transparent" }}
            >
              <i className="bi bi-plus fs-3 border rounded-pill"></i>
            </button>
          </div>
        </div>
        <div className="col-2">
          <button
            onClick={removeFromCart}
            className=" border-0 text-danger h3"
            style={{ background: "transparent" }}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;

