import { AppProps } from "next/app";
import React from "react";
import { PusherProvider } from "@harelpls/use-pusher";
import "../styles/globals.css";

const pusherConfig = {
  clientKey: process.env.NEXT_PUBLIC_PUSHER_KEY,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <PusherProvider {...pusherConfig}>
    <Component {...pageProps} />
  </PusherProvider>
);

export default MyApp;
