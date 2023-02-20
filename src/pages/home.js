import React from "react";
import Header from "../components/home/header/header";
import Item from "../components/service-example-item/service-example-item";
import Features from "../components/home/features/features";

const home = () => {
  return (
    <>
      <Header />
      <Item heading="hello" />
      <Features />
    </>
  );
};

export default home;
