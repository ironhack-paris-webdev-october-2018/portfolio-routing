import React, { Component } from "react";

import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <section className="NotFound">
        <h2>404 Not Found</h2>
        <p>Sorry! The page you are looking for doesn't exist.</p>
        <p>Here's a unicorn.</p>
        <h1>🦄</h1>
      </section>
    );
  }
}

export default NotFound;
