import ServicesHero from "../components/services-hero/services-hero";
import ServicesExamples from "../components/services-examples/services-example";
import Blogr from "../assets/web-design/desktop/image-blogr.jpg";
import Builder from "../assets/web-design/desktop/image-builder.jpg";
import Camp from "../assets/web-design/desktop/image-camp.jpg";
import Express from "../assets/web-design/desktop/image-express.jpg";
import Photon from "../assets/web-design/desktop/image-photon.jpg";
import Transfer from "../assets/web-design/desktop/image-transfer.jpg";

const WebDesign = () => {
  const ServicesExamplesData = [
    {
      id: 1,
      title: "BLOGR",
      image: (
        <img style={{ width: "100%" }} src={Blogr} alt="this is an image" />
      ),
      par: "XXX",
    },
    {
      id: 1,
      title: "BLOGR",
      image: (
        <img style={{ width: "100%" }} src={Builder} alt="this is an image" />
      ),
      par: "XXX",
    },
    {
      id: 1,
      title: "BLOGR",
      image: (
        <img style={{ width: "100%" }} src={Camp} alt="this is an image" />
      ),
      par: "XXX",
    },
    {
      id: 1,
      title: "BLOGR",
      image: (
        <img style={{ width: "100%" }} src={Express} alt="this is an image" />
      ),
      par: "XXX",
    },
    {
      id: 1,
      title: "BLOGR",
      image: (
        <img style={{ width: "100%" }} src={Photon} alt="this is an image" />
      ),
      par: "XXX",
    },
    {
      id: 1,
      title: "BLOGR",
      image: (
        <img style={{ width: "100%" }} src={Transfer} alt="this is an image" />
      ),
      par: "XXX",
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
    </>
  );
};

export default WebDesign;
