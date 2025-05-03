import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const { cart } = useSelector((state) => state);
  return (
    <div className="container border py-3">
      <div className="row">
        <div className="col-lg-7">
            <nav className="d-flex justify-content-center align-items-center gap-4">
                <h3 className=''></h3>
                <NavLink to="/" className="nav-tab fs-4 fw-bold" >Shopi</NavLink>
                <NavLink to="/" className={({ isActive }) =>isActive ? "nav-tab-active" : "nav-tab"}>Home</NavLink>
                <NavLink to="/nuevo" className={({ isActive }) =>isActive ? "nav-tab-active" : "nav-tab"}>Electronics</NavLink>
                <NavLink to="/furniture" className={({ isActive }) =>isActive ? "nav-tab-active" : "nav-tab"}>Furniture</NavLink>
                <NavLink to="/shoes" className={({ isActive }) =>isActive ? "nav-tab-active" : "nav-tab"}>Shoes</NavLink>
                <NavLink to="/miscellaneous" className={({ isActive }) =>isActive ? "nav-tab-active" : "nav-tab"}>Miscellaneous</NavLink>
            </nav>
        </div>
        <div className="col-lg-5 d-flex justify-content-end pe-5">
            <NavLink to="/cart">
            <div className="position-relative">
              <FaShoppingCart className="nav-tab fs-4" />
              {cart.length > 0 && (
                <span 
                className="count-01" 
                style={{animation: 'bounce 1s infinite' }}
              >
                {cart.length}
              </span>
              
              )}
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
