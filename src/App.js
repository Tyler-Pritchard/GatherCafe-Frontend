import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import MenusList from "./Components/MenusList";
import ItemsList from "./Components/ItemsList";
import Cart from "./Components/Cart";
import HomepageLayout from "./Components/HomePage";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={() => <Redirect to="/homepage" />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/menu" component={() => <MenusList />} />
          <Route exact path={`${ItemsList}`} component={() => <ItemsList />} />
          <Route exact path="/userprofile" component={() => <UserProfile />} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/homepage" component={() => <HomepageLayout />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
