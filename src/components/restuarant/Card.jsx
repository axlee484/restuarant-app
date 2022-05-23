function Card({ items }) {
  return (
    <>
      {items.map(function (item) {
        return (
          <>
            <div
              className="card"
              key={item.id}
              style={{ flex: "0 0 33%", minWidth: "20rem" }}
            >
              <img src={item.image} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ margin: "auto" }}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
