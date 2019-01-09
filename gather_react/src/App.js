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
  //******************STATE********************* */
  state = {
    menu: [],
    items: []
  };

  async componentDidMount() {
    const itemsJSON = await fetch(`http://localhost:5000/items`);
    const items = await itemsJSON.json();
    console.log("hey");
    this.setState({
      // menus: menu,
      ...items
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Menu />
          <ItemsList items={this.state.items} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/userprofile" component={() => <UserProfile />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
