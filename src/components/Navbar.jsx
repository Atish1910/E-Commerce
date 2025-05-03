import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container border py-3">
      <div className="row">
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
    </div>
  );
};

export default Navbar;
