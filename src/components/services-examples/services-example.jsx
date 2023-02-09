import "./services-examples.scss";
import ServicesExampleItem from "../service-example-item/service-example-item";

const ServicesExamples = ({ ServicesExamplesData }) => {
  return (
    <section className="services-examples-container container">
      {ServicesExamplesData.map((serviceExample) => (
        <ServicesExampleItem
          key={serviceExample.id}
          serviceExample={serviceExample}
        />
      ))}
    </section>
  );
};

export default ServicesExamples;
