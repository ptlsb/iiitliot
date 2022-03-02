import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignUp/SignIn";
import { Router, Routes, Route } from "react-router-dom";

// Custom Css
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SignIn/>
      <SignUp/>
      <Footer />
      {/* <Router>
        <div>
          <Routes>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/forget-password" component={ForgetPasswordPage} />
            <Route path="/home" component={Home} />
            <Route path="/">
              <Navbar />
              <Home />
              <Footer />
            </Route>
          </Routes>
        </div>
      </Router> */}
    </div>
  );
};
export default App;
