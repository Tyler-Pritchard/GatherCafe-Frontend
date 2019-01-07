import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";

class App extends Component {
  render() {
    return (
      // <router>
      <div>
        <Navbar />
        <Login />
        <UserProfile />
        <Footer />
      </div>
      // </router>
    );
  }
}

export default App;
