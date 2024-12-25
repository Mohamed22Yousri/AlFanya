import "./CSS/Category.css"
const Category = () => {

  const category = [
    {
      title: "Drum Unit",
    },
    {
      title: "Pickup Rollers",
    },
    {
      title: "Waste Toner Bottle",
      
    },
    {
      title: "Drum Cleaning Blade",
    },
    {
      title: "Paper Tray",
    },
    {
      title: "Power Supply Unit",
    },
    {
      title: "Main Board",
    },
    {
      title: "Laser Scanner Assembly",
    },
    {
      title: "Toner Cartridge",
    },
    {
      title: "Separation Rollers",
    },
    {
      title: "Main Motor",
      
    },
    {
      title: "Catcher Bin ",
    },
  ];
  return (
    <div>
      <div className="container-fluid mt-2">
        <h3
          className="mb-4"
          style={{ fontWeight: "bold", fontSize: "24px", color: "#09335c" }}
        >
          Top Categories
        </h3>
        <div className="row">
          {category.map((cat, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
              <div
                className="category-card"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold"}}>
                  {cat.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
