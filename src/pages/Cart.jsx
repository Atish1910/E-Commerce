import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
    setTotalItems(cart.reduce((acc, curr) => acc + curr.quantity, 0));
  }, [cart]);

  return (
    <div className="container">
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
                Total Items: ${totalItems}
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
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "80vh" }}
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
