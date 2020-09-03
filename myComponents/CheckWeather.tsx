import React, { Component } from "react";
import DisplayWeather from "./DisplayWeather";
import data from "../myAssets/cities.json";
import { config } from "../myAssets/config";

const locations: any = {};
const states: any = [];
const fetch = require("node-fetch");
const API_KEY: string = config.WEATHER_API_KEY;

for (const [index, value] of Object.entries(data.States)) {
  states.push(index);
  locations[index] = value;
}

export class CheckWeather extends Component {
  state = {
    zipcode: "",
    state: "",
    city: "",
    isSubmitted: false,
    errorCode: "",
    weatherData: {
      temp: 0,
      app_temp: 0,
      wind_cdir: "N/A",
      wind_spd: 0.0,
      rh: 0,
      dewpt: 0.0,
      weather: {
        icon: "N/A",
        code: "N/A",
        description: "N/A",
      },
      state_code: "N/A",
      country_code: "N/A",
      city_name: "N/A",
      sunrise: "N/A",
      sunset: "N/A",
      lat: 0.0,
      lon: 0.0,
      vis: 0,
    },
    unit: "I",
  };

  //Updating state during events
  onZipChange = (e: any) => {
    if (!this.state.isSubmitted) this.setState({ zipcode: e.target.value });
  };

  onStateChange = (e: any) => {
    if (!this.state.isSubmitted) this.setState({ state: e.target.value });
  };

  onCityChange = (e: any) => {
    if (!this.state.isSubmitted) this.setState({ city: e.target.value });
  };

  //Resetting state to defaults
  onReset = (e: any) => {
    this.setState({
      zipcode: "",
      state: "",
      city: "",
      isSubmitted: false,
      errorCode: "",
      weatherData: {
        temp: 0,
        app_temp: 0,
        wind_cdir: "N/A",
        wind_spd: 0.0,
        rh: 0,
        dewpt: 0.0,
        weather: {
          icon: "N/A",
          code: "N/A",
          description: "N/A",
        },
        state_code: "N/A",
        country_code: "N/A",
        city_name: "N/A",
        sunrise: "N/A",
        sunset: "N/A",
        lat: 0.0,
        lon: 0.0,
        vis: 0,
      },
      unit: "I",
    });
  };

  dismissError = (e: any) => this.setState({ errorCode: "" });

  //Submitting the form and calling the weather api for weather information
  onSubmit = async (e: any) => {
    let call: string =
      this.state.zipcode.length == 5
        ? `postal_code=${this.state.zipcode}`
        : this.state.city
        ? `city=${this.state.city},${this.state.state}`.replace(" ", "+")
        : "-";

    if (call === "-") {
      this.setState({
        errorCode:
          "Please provide a State and City, or provide a zipcode that is 5 digits long",
        isSubmitted: false,
      });
      return;
    }

    call = `https://api.weatherbit.io/v2.0/current?${call}&key=${API_KEY}&units=${this.state.unit}`;

    let response = await fetch(call);
    if (response.ok) {
      await response
        .json()
        .then(
          (output: {
            [d: string]: Array<{ [w: string]: string | number | object }>;
          }) => {
            let weatherInput: { [k: string]: string | number | object } = {
              temp: output.data[0].temp,
              app_temp: output.data[0].app_temp,
              wind_cdir: output.data[0].wind_cdir,
              rh: output.data[0].rh,
              dewpt: output.data[0].dewpt,
              weather: output.data[0].weather,
              state_code: output.data[0].state_code,
              country_code: output.data[0].country_code,
              city_name: output.data[0].city_name,
              sunrise: output.data[0].sunrise,
              sunset: output.data[0].sunset,
              lat: output.data[0].lat,
              lon: output.data[0].lon,
              vis: output.data[0].vis,
              wind_spd: output.data[0].wind_spd,
            };

            this.setState({ weatherData: weatherInput, isSubmitted: true });
            console.log(this.state.weatherData);
          }
        );
    } else this.setState({ errorCode: response.status, isSubmitted: false });
  };

  render() {
    return (
      <form className="form-group row">
        <fieldset className="form-group col-lg-4">
          <h3>Search Weather</h3>
          <div>
            <p>Choose One Below - (zipcode takes priority)</p>
            <label htmlFor="zip-input">Zipcode:</label>
            <input
              disabled={this.state.isSubmitted}
              onChange={this.onZipChange}
              type="text"
              value={this.state.zipcode}
              placeholder="Enter Zipcode..."
              className="form-control"
              id="zip-input"
            />
            <hr />
            <label htmlFor="state-input">State:</label>
            <select
              disabled={this.state.isSubmitted}
              onChange={this.onStateChange}
              value={this.state.state}
              className="form-control"
              id="state-input"
            >
              <option value="">Select State...</option>
              {states.map((state: string) => (
                <option value={state}>{state}</option>
              ))}
            </select>
            <label htmlFor="city-input">City:</label>
            <select
              disabled={this.state.isSubmitted || !this.state.state}
              onChange={this.onCityChange}
              value={this.state.city}
              className="form-control"
              id="city-input"
            >
              <option value="">Select City...</option>
              {this.state.state &&
                locations[this.state.state].map((city: string) => (
                  <option value={city}>{city}</option>
                ))}
            </select>
          </div>
          <div>
            <button
              onClick={this.onSubmit}
              type="button"
              className="btn btn-primary mr4"
              disabled={this.state.isSubmitted}
            >
              Search
            </button>
            <button
              onClick={this.onReset}
              type="button"
              className="btn btn-danger"
            >
              Reset
            </button>
            <hr />
          </div>
          {/* Conditionally renders an alert based on the input of the user */}
          {this.state.errorCode && (
            <div className="alert alert-dismissible alert-danger">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                onClick={this.dismissError}
              >
                &times;
              </button>
              <b>ERROR!</b> {this.state.errorCode}
            </div>
          )}
          <style jsx>{`
            p,
            button {
              margin-top: 10px;
              margin-right: 20px;
            }
          `}</style>
        </fieldset>
        <div className="col-lg">
          {this.state.isSubmitted && (
            <DisplayWeather weather={this.state.weatherData} />
          )}
        </div>
      </form>
    );
  }
}
