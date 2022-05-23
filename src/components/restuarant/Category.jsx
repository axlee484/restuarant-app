function Category({ type, updateMenu }) {
  return (
    <>
      {type.map((currElement) => {
        return (
          <button
            style={{ flex: "0 33% auto" }}
            className="btn btn-primary"
            onClick={() => updateMenu(currElement)}
          >
            {currElement}
          </button>
        );
      })}
    </>
  );
}

export default Category;
