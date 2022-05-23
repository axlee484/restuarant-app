import Card from "./Card";
import Food from "../../api";

function Menu({ newMenu }) {
  const items = Food.map((currElement) => {
    return currElement;
  });
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        flexBasis: "auto",
        justifyContent: "center",
      }}
    >
      <Card items={items} />
    </div>
  );
}

export default Menu;
