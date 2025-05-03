import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import myprofile from "../assets/img/profile.webp"

const MyAccount = () => {
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

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loggedInUser");
        setIsLoggedIn(false);
        setLoggedInUser(null);
      };

    
    return (
        
    <div>
    {isLoggedIn ? (
        <>
        
          <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 border rounded-3">
                    <div className="text-center">
                        <p>Created By :</p>
                        <img src={myprofile} height="150px" width="150px" className='rounded-pill border' alt="" />
                        <h5>{loggedInUser?.fullName}</h5>
                        <p>User Name : {loggedInUser?.email}</p>
                        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>  
        </>
        ) : (
            <>
            <div className="container py-5 bg-blue vh-100">
                <div className="row justify-content-center">
                    <div className="col-lg-4 border rounded-3 text-center py-5">
                        <h3 className=' text-golden'>register yourself</h3>
                        <NavLink to="/login" className="btn btn-warning"> Login</NavLink>
                    </div>
                </div>
            </div>
            </>
        )}
        </div>
    );
};

export default MyAccount;