import React, { Component } from "react";
import { Layout } from "../myComponents/Layout";

class Forecast extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <div>
          <style jsx>{`
            * {
              font-family: Verdana, Arial, sans-serif;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default Forecast;
