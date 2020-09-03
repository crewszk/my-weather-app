import React, { Component } from "react";
import { Layout } from "../myComponents/Layout";
import { CheckWeather } from "../myComponents/CheckWeather";

class Index extends Component {
  state = {
    zipcode: "32277",
    city: "Jacksonville",
  };

  render() {
    return (
      <Layout>
        <div>
          <CheckWeather />
        </div>
      </Layout>
    );
  }
}

export default Index;
