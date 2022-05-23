import Menu from "../../api";
import { useState } from "react";

function Category({ type }) {
  const [food, setFood] = useState(Menu);
  const filterItem = (type) => {
    const menu = Menu.filter((currElement) => {
      return currElement.category === type;
    });
    setFood(menu);
  };
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <button onClick={() => filterItem("breakfast")}>{type}</button>
      </li>
    </ul>
  );
}

export default Category;
