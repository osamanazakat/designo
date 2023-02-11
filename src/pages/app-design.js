import ServicesHero from "../components/services-hero/services-hero";
import ServicesExamples from "../components/services-examples/services-example";
import Airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import Eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import Faceit from "../assets/app-design/desktop/image-faceit.jpg";
import Loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import Todo from "../assets/app-design/desktop/image-todo.jpg";

const AppDesign = () => {
  const ServicesExamplesData = [
    {
      id: 7,
      title: "AIRFILTER",
      image: <img style={{ width: "100%" }} src={Airfilter} />,
      par: "Solving the problem of poor air quality by filtering the air",
    },
    {
      id: 8,
      title: "EYECAM",
      image: <img style={{ width: "100%" }} src={Eyecam} />,
      par: "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      id: 9,
      title: "FACEIT",
      image: <img style={{ width: "100%" }} src={Faceit} />,
      par: "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      id: 10,
      title: "LOOPSTUDIOS",
      image: <img style={{ width: "100%" }} src={Loopstudios} />,
      par: "A VR experience app made for Loopstudios",
    },
    {
      id: 11,
      title: "TODO",
      image: <img style={{ width: "100%" }} src={Todo} />,
      par: "A todo app that features cloud sync with light and dark mode",
    },
  ];

  return (
    <>
      <ServicesHero
        heading="App Design"
        par="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      ;
      <ServicesExamples ServicesExamplesData={ServicesExamplesData} />
    </>
  );
};

export default AppDesign;
