import React, { FunctionComponent } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type LayoutProps = {};

export const Layout: FunctionComponent<LayoutProps> = (props) => (
  <div>
    <Head>
      <title>My Weather App</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/lux/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);
