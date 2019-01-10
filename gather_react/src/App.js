import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
          {/* change to menu list/index */}
          <Route exact path="/" component={() => <Redirect to="/items" />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/menu" component={() => <Menu />} />
          <Route exact path="/items" component={() => <ItemsList />} />
          <Route exact path="/userprofile" component={() => <UserProfile />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
