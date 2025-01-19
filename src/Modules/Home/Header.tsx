import { Link } from "react-router-dom";
import logo from "../../assets/Header.png";
import "./CSS/Header.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "#000000" }}>
        <div className="container row">
          <div className="mt-3 ps-5 col-md-7 col-12">
            <div
              className="d-flex text-white mb-2 mt-5"
              style={{ gap: "20px" }}
            ></div>
            <div className="d-flex align-start">
              <motion.p
                initial={{ x: "-100%" }}
                animate={{ x: 0 }} 
                transition={{ duration: 1 }}
              >
                <div style={{ fontSize: "30px", color: "red" }}>KYOCERA</div>
                <p style={{ fontSize: "50px", color: "white" }}>
                  Up to 10% off Voucher
                </p>{" "}
              </motion.p>
            </div>

            <div className="mt-4">
              <div className="d-flex" style={{ gap: "20px" }}>
                <Link
                  to="/print"
                  style={{
                    border: "none",
                    color: "white",
                    fontSize: "20px",
                    width: "180px",
                    height: "46px",
                    borderRadius: "20px",
                    background: "blue",
                    textDecoration: "none",
                    textAlign: "center",
                    paddingTop: "7px",
                  }}
                  className=""
                >
                  Shop Now !
                </Link>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                  className="btn-contact "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="text-white col-md-5 col-12">
            <div className="mt-5">
              <img className="w-100 animate__animated animate__flash" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
