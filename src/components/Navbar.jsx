import React from 'react';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


// in this below component we added a navlinks for each funcation user can redirect on simply clicking on link
// if that funcation is show then we added a active class so user will get idea he is on which component
// in cart icon if user click on any product it will increase count on that icon as per user input

const Navbar = ({ isLoggedIn, loggedInUser }) => {
  // we proovide data of login creential to navbar so we can display user Email in navbar
        const cart = useSelector((state) => state.cart);

  return (
    <div className="container sticky-top">
      <div className="row align-items-center" >
        <div className="col-lg-7">
        <nav className="navbar navbar-expand-lg  navbar-light">
          <div className="">
            <NavLink to="/cart">
                <div className="position-relative ps-3  d-lg-none">
                  <i className="bi bi-cart fs-4 fw-bold text-dark"></i>
                    {cart.length > 0 && (
                      <span 
                      className="count-01" 
                      style={{animation: 'bounce 1s infinite' }}
                      >
                        {/* if user click any product it will increase count */}
                      {cart.length}
                    </span>
                    
                  )}
                </div>
              </NavLink>
            </div>
            <NavLink to="/" className="nav-tab fs-4 fw-bold pe-lg-4 d-lg-none" >Shopi</NavLink>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
          {/* navbar for desktop view */}
          <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarCollapse">
              <div className="navbar-nav">
                {/* // here are all navlinks user can navgate on clicking on them */}
                  <NavLink to="/" className="nav-tab fs-4 fw-bold pe-lg-4 d-none" >Shopi</NavLink>
                      <NavLink to="/" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Home</NavLink>
                      <NavLink to="/nuevo" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Electronics</NavLink>
                      <NavLink to="/furniture" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Furniture</NavLink>
                      <NavLink to="/shoes" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Shoes</NavLink>
                      <NavLink to="/miscellaneous" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Miscellaneous</NavLink>
                      <NavLink to="/my-account" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>My Account</NavLink>
                      {/* <NavLink to="/register" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Register</NavLink>
                      <NavLink to="/login" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Login</NavLink> */}
                      {/* if user is loggedin then show his email id in navbar */}
                      {isLoggedIn ? (
                          <p className='mb-0 d-lg-none'><b>{loggedInUser?.email}</b></p>
                        ) : (
                          <NavLink to="/login" className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"}>Login</NavLink>
                        )}
                      
              </div>
          </div>
      </nav>
        </div>
        <div className="col-5 d-lg-flex align-items-center justify-content-around d-none text-end pe-lg-4">
        {/* cart item for mobile view  */}
        <p className='mb-0'><b>{loggedInUser?.email}</b></p>
            <NavLink to="/cart">
            <div className=" ps-3">
              <i className="bi bi-cart fs-4 fw-bold text-dark position-relative">
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
