import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import Verify from "../Auth/Verify";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Sensor from "../Sensor/Sensor";
import Footer from "../Footer/Footer";

// Custom Css
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/:email" element={<Verify />} />
          <Route
            path="/sensor"
            element={[<Navbar />, <Sensor />, <Footer />]}
          />
          <Route path="/" element={[<Navbar />, <Home />, <Footer />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
