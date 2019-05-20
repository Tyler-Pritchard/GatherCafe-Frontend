import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <h1>Gather Cafe</h1>
        <h2>44 Tehama Street</h2>
        <h2>San Francisco, CA 94105</h2>
        <button className="ui circular facebook icon button">
          <i className="facebook icon" />
        </button>
        <button className="ui circular twitter icon button">
          <i className="twitter icon" />
        </button>
        <button className="ui circular linkedin icon button">
          <i className="linkedin icon" />
        </button>
        <button className="ui circular yelp  icon button">
          <i className="yelp  icon" />
        </button>
      </div>
    );
  }
}

export default Footer;
