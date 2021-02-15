import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
