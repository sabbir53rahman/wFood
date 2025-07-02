"use client";
import { store } from "@/redux/app/store";
import React from "react";
import { Provider } from "react-redux";

const ServerProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ServerProvider;
