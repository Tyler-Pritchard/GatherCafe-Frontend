import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/coffee-logo-design-creative-idea-logo-elements-2.png";



class Footer extends Component {
  state = {};

  render() {

    return (
      <div>
        <ul className="footer">
          <div className="footer__logo-box">
            <img 
              src={logo}
              className="footer__logo"
              alt="Galvanize"
            />
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link to="http://www.galvanize.com" target="_blank" className="footer__link"
                    >
                      Company
                    </Link>
                    <Link to="http://www.google.com" target="_blank"className="footer__link">
                      Contact Us
                    </Link>
                    <Link to="https://www.google.com" target="_blank"className="footer__link">
                      Careers
                    </Link>
                    <Link to="https://www.google.com" target="_blank"className="footer__link">
                      Privacy
                    </Link>
                    <Link to="https://www.google.com" target="_blank"className="footer__link">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-1-of-2 footer__copybox">
              <p className="footer__copyright">
                Copyright &copy;  
                <Link 
                  to="https://www.tylerrobertpritchard.com" target="_blank"
                >  
                  Tyler Pritchard, 2020
                </Link>

              </p>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
export default Footer;
