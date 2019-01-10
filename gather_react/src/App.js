import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Menu from "./Components/Menu";
import ItemsList from "./Components/ItemsList";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Menu />
          <ItemsList />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/userprofile" component={() => <UserProfile />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
