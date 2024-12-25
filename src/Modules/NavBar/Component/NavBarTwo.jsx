import { Link } from "react-router-dom";

const NavBarTwo = () => {
  return (
    <>
      <nav
        style={{ position: "sticky", top: "0", zIndex: "3" }}
        className="navbar navbar-expand-lg bg-white shadow-lg p-3  bg-body-tertiary rounded"
      >
        <div className="container">
          <Link
            to="/"
            style={{ fontSize: "30px" }}
            className="navbar-brand"
            href="#"
          >
            ALFANYA
          </Link>
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
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ fontSize: "20px" }}
            >
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/print"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Prints
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarTwo;
