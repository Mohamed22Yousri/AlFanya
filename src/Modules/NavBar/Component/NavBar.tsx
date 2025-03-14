import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web"; // استيراد react-spring

const NavBar = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 }, // يبدأ من الشفافية 0
    config: { tension: 250, friction: 30 }, // التحكم في سرعة التدرج
  });

  return (
    <animated.nav
      style={fadeIn}
      className="navbar navbar-small navbar-expand-lg bg-white"
    >
      <div className="container">
        <div
          className="d-flex"
          style={{
            gap: "12px",
            fontSize: "1rem",
            color: "black",
            alignItems: "center",
          }}
        >
          <span style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-google-plus-g"></i>
            ...
          </span>
          <Link
            to="/location"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
            className="ps-2"
          >
            <i className="fa-solid fa-location-dot"></i>
          </Link>
          <span>2 st, Durrah Al-Fadl, Al-Mhawlat, Trsa</span>
        </div>
        <div
          className="d-flex"
          style={{
            gap: "12px",
            fontSize: "1rem",
            color: "black",
            alignItems: "center",
          }}
        >
          <a
            href="mailto:elfaniacopiercairo@gmail.com"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="mt-1">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <span style={{ marginLeft: "8px" }}>Quick Email</span>
          </a>

          <a
            href="tel:01006180362"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="mt-1">
              <i className="fa-solid fa-phone-volume"></i>
            </span>
            <span style={{ marginLeft: "8px" }}>01006180362</span>
          </a>
        </div>
      </div>
    </animated.nav>
  );
};

export default NavBar;
