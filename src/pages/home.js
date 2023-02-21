import React from "react";
import Header from "../components/home/header/header";
import Service from "../components/service-category/service";
import Features from "../components/home/features/features";
import "../styles/service-categories-section.scss";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <Header />
      <div className=" container services">
        <div className="services-left">
          <Link to="/webdesign">
            <Service heading="Web Design" className="webImage" />
          </Link>
        </div>
        <div className="services-right">
          <div className="services-right-top">
            <Link to="/appdesign">
              <Service heading="App Design" className="appImage" />
            </Link>
          </div>
          <div className="services-right-bottom">
            <Link to="/graphicdesign">
              <Service heading="Graphic Design" className="graphicImage" />
            </Link>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default home;
