import React, { Component } from "react";
import { Layout } from "../myComponents/Layout";

class About extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <div>
          <h1>My Weather App!</h1>
          <p>
            Welcome to My Weather App, a simple front end weather application
            that provides a UI for the Weatherbit API!
          </p>
          <p>
            The purpose of this application is to practice and demonstrate basic
            capabilities in React and Next.js, as well as integrating a
            third-party API into an application of any kind. The free version of
            this API provides 500 calls a day with 16 day forecasts, the current
            weather of a location, as well as trial versions for 1 month of past
            historical weather data (at 500 historical calls a day), 48 hour
            forecasts, and Air Quality metrics. This application is also built
            in typescript where I can use it!
          </p>
          <p>
            I am by no means a graphical designer, so the visual's on this
            application quite basic. I will be using the Bootswatch variant of
            Bootstrap. However linked above on the navigation bar I have built
            this same application but using a UI kit built by Creative Tim.
            There was a free version of his Material Dashboard for Next.js so I
            built everything again but using his components showing that not
            only can I build in React using my own components and pages, I can
            also integrate third party components if I need to.
          </p>
        </div>
      </Layout>
    );
  }
}

export default About;
