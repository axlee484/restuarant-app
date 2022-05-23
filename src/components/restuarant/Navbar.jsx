import Category from "./Category";
import Food from "../../api";

function Navbar({ updateMenu }) {
  const category = [
    ...new Set(
      Food.map((currElement) => {
        return currElement.category;
      })
    ),
  ];
  return (
    <div
      className="container"
      style={{ border: "5px solid violet", borderRadius: "5px" }}
    >
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Category type={category} updateMenu={updateMenu} />
                <button
                  style={{ flex: "0 33% auto" }}
                  className="btn btn-primary"
                  onClick={() => updateMenu("All")}
                >
                  All
                </button>
              </div>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
