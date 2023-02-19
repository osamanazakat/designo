import React from "react";
import Header from "../../components/home/header/header";
import Services from "../../components/services/services";
import Features from "../../components/home/features/features";
import "./home.scss";

const home = () => {
  return (
    <>
      <Header />
      <div className=" container services">
        <div className="services-left">
          <Services heading="Web Design" className="webImage" />
        </div>
        <div className="services-right">
          <div className="services-right-top">
            <Services heading="App Design" className="appImage" />
          </div>
          <div className="services-right-bottom">
            <Services heading="Graphic Design" className="graphicImage" />
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default home;
