import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <h1>Gather Cafe</h1>
        <button className="ui circular facebook icon button">
          <i className="facebook icon" />
        </button>
        <button className="ui circular twitter icon button">
          <i className="twitter icon" />
        </button>
        <button className="ui circular linkedin icon button">
          <i className="linkedin icon" />
        </button>
        <button className="ui circular google plus icon button">
          <i className="google plus icon" />
        </button>
      </div>
    );
  }
}

export default Footer;
