import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import myprofile from "../assets/img/profile.webp"
import Navbar from './Navbar';


// in below component we are showing data of user if he loggedin we show all details here 
// phone email & name 
// if user is not logged in then we show him a button login first
const MyAccount = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // check user is loggedin or not
    const [loggedInUser, setLoggedInUser] = useState(null); // storeing login details
  
    // this funcation will only run when componnent render & check if user logged in from local storage or not
    useEffect(() => {
      const storedLogin = localStorage.getItem("isLoggedIn"); // take a status of login
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
      // if user is loggin update status as per 
      if (storedLogin === "true" && storedUser) {
        setIsLoggedIn(true);
        setLoggedInUser(storedUser);
      }
    }, []);

    // it will remove data from local storage
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loggedInUser");
        setIsLoggedIn(false);
        setLoggedInUser(null);
        Navigate("/app"); // redirect to app 
      };

    
    return (
        
    <div>
    {isLoggedIn ? (
        //if user is loggedin thwn we show below data
        <>
        
          <div className="container my-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 border rounded-3 py-3">
                    <div className="text-center">
                        <p>Created By :</p>
                        <img src={myprofile} height="150px" width="150px" className='rounded-pill border' alt="" />
                        <h5>{loggedInUser?.fullName}</h5>
                        <p>User Email : {loggedInUser?.email}</p>
                        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>  
        </>
        ) : (
            //else we show below data(if not loggedin)
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