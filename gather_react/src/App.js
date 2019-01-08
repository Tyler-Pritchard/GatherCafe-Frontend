import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import Item from "./Components/Item";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Menu />
          <Item />
          <Cart />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/userprofile" component={() => <UserProfile />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
