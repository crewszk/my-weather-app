import React, { Component } from "react";

interface Props {
  weather: {
    temp: number;
    app_temp: number;
    wind_cdir: string;
    wind_spd: number;
    rh: number;
    dewpt: number;
    weather: {
      icon: string;
      code: string;
      description: string;
    };
    state_code: string;
    country_code: string;
    city_name: string;
    sunrise: string;
    sunset: string;
    lat: number;
    lon: number;
    vis: number;
  };
}

export default class DisplayWeather extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    let { weather } = this.props;
    return (
      <div className="jumbotron row">
        <div className="col">
          <h2 className="display-3">
            <b>{weather.temp}&deg;F</b>
          </h2>
          <h5>
            Feels like <b>{weather.app_temp}&deg;F</b>
          </h5>
          <h6>
            {weather.city_name}, {weather.state_code}, {weather.country_code}
          </h6>
        </div>
        <div className="col">
          <p>
            Wind: {weather.wind_cdir} | {weather.wind_spd} mph
          </p>
          <p>Humidity: {weather.rh}%</p>
          <p>Dewpoint: {weather.dewpt}&deg;F</p>
          <p>{weather.weather.description}</p>
        </div>
      </div>
    );
  }
}
