import ServicesHero from "../../components/services-hero/services-hero";
import ServicesExamples from "../../components/services-examples/services-example";
import Blogr from "../../assets/web-design/desktop/image-blogr.jpg";
import Builder from "../../assets/web-design/desktop/image-builder.jpg";
import Camp from "../../assets/web-design/desktop/image-camp.jpg";
import Express from "../../assets/web-design/desktop/image-express.jpg";
import Photon from "../../assets/web-design/desktop/image-photon.jpg";
import Transfer from "../../assets/web-design/desktop/image-transfer.jpg";
import Services from "../../components/services/services";
import { Link } from "react-router-dom";

const WebDesign = () => {
  const ServicesExamplesData = [
    {
      id: 1,
      title: "BLOGR",
      image: (
        <img style={{ width: "100%" }} src={Blogr} alt="this is an image" />
      ),
      par: "Blogr is a platform for creating an online blog or publication",
    },
    {
      id: 1,
      title: "BUILDER",
      image: (
        <img style={{ width: "100%" }} src={Builder} alt="this is an image" />
      ),
      par: "Connects users with local contractors based on their location",
    },
    {
      id: 1,
      title: "CAMP",
      image: (
        <img style={{ width: "100%" }} src={Camp} alt="this is an image" />
      ),
      par: "Get expert training in coding, data, design and digital marketing",
    },
    {
      id: 1,
      title: "EXPRESS",
      image: (
        <img style={{ width: "100%" }} src={Express} alt="this is an image" />
      ),
      par: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      id: 1,
      title: "PHOTON",
      image: (
        <img style={{ width: "100%" }} src={Photon} alt="this is an image" />
      ),
      par: "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      id: 1,
      title: "TRANSFER",
      image: (
        <img style={{ width: "100%" }} src={Transfer} alt="this is an image" />
      ),
      par: "Site for low-cost money transfers and sending money within seconds",
    },
  ];

  return (
    <>
      <ServicesHero
        heading="Web Design"
        par="We build websites that serve as powerful marketing tools and bring memorable brand experiences"
      />
      ;
      <ServicesExamples ServicesExamplesData={ServicesExamplesData} />
      <div className=" container services">
        <Link to="/appdesign">
          <Services heading="App Design" className="appImage" />
        </Link>
        <Link to="/graphicdesign">
          <Services heading="Graphic Design" className="graphicImage" />
        </Link>
      </div>
    </>
  );
};

export default WebDesign;
