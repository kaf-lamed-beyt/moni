import React from "react";
import "../styles/globals.css";
import "../styles/variables.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Translate Moni</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#072a4d" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
