
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import MyAccount from "./components/MyAccount";
import Register from "./login/Register";
import Login from "./login/Login";
import { useEffect, useState } from "react";

function App() {
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
    <>
    <section className="bg-light py-3 border">
    <Navbar isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />
    </section>
      <section>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes" element={<Home category="clothes" />} />
            <Route path="/nuevo" element={<Home category="nuevo" />} />
            <Route path="/furniture" element={<Home category="furniture" />} />
            <Route path="/shoes" element={<Home category="shoes" />} />
            <Route path="/miscellaneous" element={<Home category="miscellaneous" />} />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/my-account" element={<MyAccount></MyAccount>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/login" setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser} element={<Login></Login>} />


          </Routes>
        </div>
      </section>      
    </>
  )
}

export default App
