import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web"; // استيراد react-spring

const NavBarTwo = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 }, // يبدأ من الشفافية 0
    config: { duration: 2000 }, // تحديد مدة الأنيمشن بالميلي ثانية (2000ms = 2 ثواني)
  });

  return (
    <animated.nav
      style={{
        ...fadeIn,
      }}
      className="navbar navbar-expand-lg bg-white  rounded"
    >
      <div className="container">
        <Link to="/" style={{ fontSize: "30px" }} className="navbar-brand">
          ALFANIA
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
              <Link to="/print" className="nav-link active" aria-current="page">
                Prints
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link active"
                aria-current="page"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </animated.nav>
  );
};

export default NavBarTwo;
