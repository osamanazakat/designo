import "./features.scss";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "PASSIONATE",
      desc: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      id: 2,
      title: "RESOURCEFUL",
      desc: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      id: 3,
      title: "FRIENDLY",
      desc: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
  ];

  return (
    <section className="features">
      <div className="features__container container">
        {features.map(({ id, title, desc, img }) => {
          return (
            <div key={id} className="features__feature">
              <h2 className="features__title">{title}</h2>
              <p className="feature__p">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
