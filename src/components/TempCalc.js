import React, { Component } from "react";

import TemperatureInput from "./TemperatureInput.js";
import BoilingVerdict from "./BoilingVerdict.js";

class TempCalc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: "",
      fahrenheit: "",
    };
  }

  syncFahrenheit(event) {
    const { value } = event.target;
    this.setState({
      fahrenheit: value,
      celsius: (value - 32) * 5 / 9,
    });
  }

  syncCelsius(event) {
    const { value } = event.target;
    this.setState({
      fahrenheit: (value * 9 / 5) + 32,
      celsius: value,
    });
  }

  render() {
    const { celsius, fahrenheit } = this.state;

    return (
      <section className="TempCalc">
        <h2>Temperature Calculator</h2>

        {/* Fahrenheit input */}
        <TemperatureInput scale="f" temperature={fahrenheit}
            onTempChange={event => this.syncFahrenheit(event)} />

        {/* Celsius input */}
        <TemperatureInput scale="c" temperature={celsius}
            onTempChange={event => this.syncCelsius(event)} />

        <BoilingVerdict celsiusTemp={celsius} />
      </section>
    );
  }
}

export default TempCalc;
