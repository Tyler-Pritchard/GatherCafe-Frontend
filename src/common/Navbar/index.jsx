import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../../Components/GoogleAuth";
import { ReactComponent as CartIcon} from '../../Images/Icons/SVG/cart.svg';
import Spinner from '../Spinner';
import logo from "../../assets/logos/coffee-logo-design-creative-idea-logo-elements-2.png";



  class Navbar extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
      const { fixed } = this.state;

      return (
        <ul
          className="navbar"
          fixed={fixed ? "top" : null}
        >
        <div className="navbar__container">
          <div className="navbar__logo-box">
            <Link to="/">
            <img src={logo} alt="Logo" className="navbar__logo" loader={<Spinner />} 
            unloader={"Great Cafe Home"}  
            />
            </Link>
          </div>
            
          <div className="navbar__menu">
            <Link to="/catering">
              Catering
            </Link>
          </div>

          <div className="navbar__menu">
            <Link to="/menu">
              Menu List
            </Link>
          </div>

          <section className="navbar__company">
            <h3>Company Login</h3>
            <div className="navbar__buttons">
              <div 
                className="navbar__button"
                >
                <Link to="/login">Log in</Link>
              </div>

              <div
                className="navbar__button"
              >
                <Link to="/userprofile">Sign Up</Link>
              </div>
            </div>
          </section>
          <div className="navbar__Oauth">
              <h3 className="navbar__OText">Log in with Google</h3>
              <GoogleAuth />
          </div>
          <div className="navbar__cart">
            <Link to="/cart">
                <svg className="navbar__cart-icon">
                  <CartIcon />
                </svg>
            </Link>
          </div>
        </div>
      </ul>
    );
  }
}
export default Navbar;