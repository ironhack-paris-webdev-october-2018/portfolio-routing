import React, { Component } from "react";

class TemperatureInput extends Component {
  render() {
    const { scale } = this.props;

    return (
      <section className="TemperatureInput">
        <h3>Temperature in {scale === "c" ? "Celsius" : "Fahrenheit"}</h3>

        {/* no <form> because we want changes to happen without submitting */}
        <label>
          Current Temperature:
          <input value={this.props.temperature}
              onChange={event => this.props.onTempChange(event)}
              type="number" name="temperature" placeholder="451" />
        </label>
      </section>
    );
  }
}

export default TemperatureInput;
