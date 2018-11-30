import React, { Component } from "react";

class BoilingVerdict extends Component {
  render() {
    const { celsiusTemp } = this.props;

    return celsiusTemp >= 100 ? (
      <p>The water would boil. 🔥💨</p>
    ) : (
      <p>The water would NOT boil. 💦</p>
    );
  }
}

export default BoilingVerdict;
