import React from "react";
import Header from "../components/home/header/header";
import Services from "../components/services/services";
import Features from "../components/home/features/features";

const home = () => {
  return (
    <>
      <Header />
      <Services selectedService={"home"} className={"homeStyle"} />
      <Features />
    </>
  );
};

export default home;
