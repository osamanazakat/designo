import React from "react";
import Header from "../components/home/header/header";
import Services from "../components/home/services/services";
import Features from "../components/home/features/features";
import Cta from "../components/cta/cta";

const home = () => {
  return (
    <>
      <Header />
      <Services />
      <Features />
      <Cta />
    </>
  );
};

export default home;
