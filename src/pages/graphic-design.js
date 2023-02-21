import ServicesHero from "../components/services-hero/services-hero";
import CatMenu from "../components/category-menu/category-menu";
import BoxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import Change from "../assets/graphic-design/desktop/image-change.jpg";
import Science from "../assets/graphic-design/desktop/image-science.jpg";
import Service from "../components/service-category/service";
import { Link } from "react-router-dom";
import "../styles/service-categories-section.scss";

const GraphicDesign = () => {
  const menuItems = [
    {
      id: 12,
      title: "BOXED WATER",
      image: <img style={{ width: "100%" }} src={BoxedWater} />,
      par: "Solving the problem of poor air quality by filtering the air",
    },
    {
      id: 13,
      title: "Change",
      image: <img style={{ width: "100%" }} src={Change} />,
      par: "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      id: 14,
      title: "SCIENCE",
      image: <img style={{ width: "100%" }} src={Science} />,
      par: "Get to meet your favorite internet superstar with the faceit app",
    },
  ];
  return (
    <>
      <ServicesHero
        heading="Graphic Design"
        par="We deliver eye-catching branding materials that are tailored to meet your business objectives"
      />
      <CatMenu menuItems={menuItems} />
      <div className=" container services">
        <Link to="/appdesign">
          <Service heading="App Design" className="appImage" />
        </Link>
        <Link to="/webdesign">
          <Service heading="Web Design" className="webImage" />
        </Link>
      </div>
    </>
  );
};

export default GraphicDesign;
