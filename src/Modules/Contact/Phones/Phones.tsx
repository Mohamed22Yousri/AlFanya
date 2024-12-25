const Phones = () => {
  return (
    <>
      <div className="Phones">
        <div className="container text-center mb-5">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 my-1">
              <a
                href="tel:01116000899"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <span className="mt-2">
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <span className="mx-2">01116000899</span>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-1">
              <a
                href="tel:01006180362"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <span className="mt-2">
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <span className="mx-2">01006180362</span>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-1">
              <a
                href="tel:01000085853"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <span className="mt-2">
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <span className="mx-2">01000085853</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phones;
