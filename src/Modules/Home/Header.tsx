import logo from "../../assets/mv-4-sp.webp";
import logo1 from "../../assets/mv-3.webp";
import logo2 from "../../assets/HTB1acgHXIrrK1Rjy1zeq6xalFXaO.jpg_720x720q50.avif";
import "./CSS/Header.css";

const Header = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            style={{ position: "relative" }}
            className="carousel-item active"
            data-bs-interval="6000"
          >
            <img src={logo} className="d-block w-100" alt="..." />
            <div
              className="textLogo"
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                backgroundColor: "#0000008c",
                width: "500px",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  color: "white",
                  padding: "1rem",
                  paddingBottom: "0",
                }}
              >
                Welcome!
              </h2>
              <p style={{ color: "white", padding: "1rem", fontSize: "2rem" }}>
                This is the ALFANIA‘ website. Explore how we are helping
                organizations put knowledge to work to drive change.
              </p>
            </div>
          </div>

          <div
            style={{ position: "relative" }}
            className="carousel-item"
            data-bs-interval="6000"
          >
            <img src={logo1} className="d-block w-100" alt="..." />
            <div
              className="textLogo"
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                backgroundColor: "#0000008c",
                width: "500px",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  color: "red",
                  padding: "1rem",
                  paddingBottom: "0",
                }}
              >
                KYOCERA!
              </h2>
              <p style={{ color: "white", padding: "1rem", fontSize: "2rem" }}>
                Copy, print, and scan with ease! <br />
                Get the best copier for less – Special discounts available!
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img src={logo2} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
