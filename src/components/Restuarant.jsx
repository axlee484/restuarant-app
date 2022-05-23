import Footer from "./restuarant/Footer";
import Food from "../api";
import Navbar from "./restuarant/Navbar";
import Menu from "./restuarant/Menu";

function Restuarant() {
  return (
    <>
      <Navbar Food={Food} />
      <Menu />
      <Footer />
    </>
  );
}

export default Restuarant;
