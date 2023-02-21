import "./category-menu.scss";
import MenuItem from "../menu-item/menu-item";

const CatMenu = ({ menuItems }) => {
  return (
    <section className="services-examples-container container">
      {menuItems.map((item) => (
        <MenuItem item={item} />
      ))}
    </section>
  );
};

export default CatMenu;
