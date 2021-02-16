import { AppProps } from "next/app";
import React from "react";
import { PusherProvider } from "@harelpls/use-pusher";
import { UserContextProvider } from "../app/context/user-context";
import "../styles/globals.css";

const pusherConfig = {
  clientKey: process.env.NEXT_PUBLIC_PUSHER_KEY,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <UserContextProvider>
    <PusherProvider {...pusherConfig}>
      <Component {...pageProps} />
    </PusherProvider>
  </UserContextProvider>
);

export default MyApp;
