
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <section>
        <div className="container border py-5">
          <h1>Hi i am App Component</h1>
            <Home></Home>
        </div>  
      </section>      
    </>
  )
}

export default App
