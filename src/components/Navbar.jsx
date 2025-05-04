import React from 'react';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { cart } = useSelector((state) => state);
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [loggedInUser, setLoggedInUser] = useState(null);
      
        useEffect(() => {
          const storedLogin = localStorage.getItem("isLoggedIn");
          const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      
          if (storedLogin === "true" && storedUser) {
            setIsLoggedIn(true);
            setLoggedInUser(storedUser);
          }
        }, []);
  return (
    <div className="container sticky-top">
      <div className="row align-items-center" >
        <div className="col-lg-7">
        <nav className="navbar navbar-expand-lg  navbar-light">
          <div className="">
            <NavLink to="/cart">
                <div className="position-relative ps-3  d-lg-none">
                  <i class="bi bi-cart fs-4 fw-bold text-dark"></i>
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
                  <NavLink to="/" className="nav-tab fs-4 fw-bold pe-lg-4 d-lg-none" >Shopi</NavLink>
          <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarCollapse">
              <div className="navbar-nav">
                  <NavLink to="/" className="nav-tab fs-4 fw-bold pe-lg-4 d-none" >Shopi</NavLink>
                      <NavLink to="/" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Home</NavLink>
                      <NavLink to="/nuevo" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Electronics</NavLink>
                      <NavLink to="/furniture" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Furniture</NavLink>
                      <NavLink to="/shoes" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Shoes</NavLink>
                      <NavLink to="/miscellaneous" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Miscellaneous</NavLink>
                      <NavLink to="/my-account" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>My Account</NavLink>
                      {/* <NavLink to="/register" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Register</NavLink>
                      <NavLink to="/login" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Login</NavLink> */}
                      <p className='mb-0 d-lg-none'><b>{loggedInUser?.email}</b></p>
              </div>
          </div>
      </nav>
        </div>
        <div className="col-5 d-lg-flex align-items-center justify-content-around d-none text-end pe-lg-4">
        <p className='mb-0'><b>{loggedInUser?.email}</b></p>
            <NavLink to="/cart">
            <div className=" ps-3">
              <i class="bi bi-cart fs-4 fw-bold text-dark position-relative">
                {cart.length > 0 && (
                  <span 
                  className="count-01" 
                  style={{animation: 'bounce 1s infinite' }}
                  >
                  {cart.length}
                </span>
              )}
              </i>
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
