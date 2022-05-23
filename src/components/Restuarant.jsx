import Footer from "./restuarant/Footer";
import Food from "../api";
import Navbar from "./restuarant/Navbar";
import Menu from "./restuarant/Menu";
import { useState } from "react";

function Restuarant() {
  const [menu, setMenu] = useState(Food);

  const updateMenu = (type) => {
    if (type === "All") {
      setMenu(Food);
      return;
    }
    const filteredMenu = Food.filter((currElement) => {
      return currElement.category === type;
    });
    setMenu(filteredMenu);
  };

  return (
    <>
      <Navbar updateMenu={updateMenu} />
      <Menu Food={menu} />
      <Footer />
    </>
  );
}

export default Restuarant;
