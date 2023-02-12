import LocationAddress from "../components/locations/location-address/location-address";
import Img1 from "../assets/locations/desktop/image-map-canada.png";
import Img2 from "../assets/locations/desktop/image-map-australia.png";
import Img3 from "../assets/locations/desktop/image-map-united-kingdom.png";

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
        image={Img1}
      />
    </>
  );
};

export default Locations;
