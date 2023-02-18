import LocationAddress from "../components/locations/location-address/location-address";

const Locations = () => {
  return (
    <>
      <LocationAddress
        heading="Canada"
        office="Designo Central Office"
        address="3886 Wellington Street
        Toronto, Ontario M9C 3J5"
        phone="+1 253-863-8967"
        email="contact@designo.co"
      />
      <LocationAddress
        className="section2"
        heading="Australia"
        office="Designo AU Office"
        address="19 Balonne Street
        New South Wales 2443"
        phone="(02) 6720 9092"
        email="contact@designo.au"
      />
      <LocationAddress
        className="section3"
        heading="United kingdom"
        office="Designo UK Office"
        address="13 Colorado Way
        Rhyd-y-fro SA8 9GA"
        phone="078 3115 1400"
        email="contact@designo.uk"
      />
    </>
  );
};

export default Locations;
