import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0); // Products ammount set & define 
  const [totalItems, setTotalItems] = useState(0); // Products quantity set & define

  // we can increase No of selected product 
  // if i select cloth & i want to imcrease Quantity we can do it by below code
  useEffect(() => {
    setTotalAmount(
      cart.reduce((prevItem, currItem) => prevItem + currItem.price * currItem.quantity, 0)
    );
    setTotalItems(cart.reduce((prevItem, currItem) => prevItem + currItem.quantity, 0));
  }, [cart]);

  return (
    <div className="container">
      {/* if the cart item more then 0 we show component */}
      {cart.length > 0 ? (
        <div className="row justify-content-between my-5">
          <div className="col-12 col-lg-8 px-lg-3">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="col-lg-4 mt-5 py-5 border rounded-3">
            <div className="d-flex flex-column gap-3">
              <h4 className="text-success fw-semibold">Your Cart</h4>
              <h1 className="text-success display-5 fw-bold mt-n2">Summary</h1>
              <p className="fs-5 text-secondary fw-semibold">
                Total Items: {totalItems}
              </p>
            </div>

            <div className="d-flex flex-column">
              <p className="fs-5 fw-bold">Total Amount: ${totalAmount}</p>
              {/* <button className="btn btn-success fw-bold fs-5">
                CheckOut Now
              </button> */}
            </div>
          </div>
        </div>
      ) : (
        // if now cart item is selected then we show below compoent 
        <div
          className="d-flex flex-column align-items-center justify-content-center 100-vh"
        >
          <h4 className="text-secondary fw-semibold mb-3">
            Your cart is empty!
          </h4>
          <Link to="/">
            <button className="btn btn-success px-4 py-2 fw-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
