
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <section>
        <div className="container">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes" element={<Home category="clothes" />} />
            <Route path="/nuevo" element={<Home category="nuevo" />} />
            <Route path="/furniture" element={<Home category="furniture" />} />
            <Route path="/shoes" element={<Home category="shoes" />} />
            <Route path="/miscellaneous" element={<Home category="miscellaneous" />} />
          </Routes>
        </div>
      </section>      
    </>
  )
}

export default App
