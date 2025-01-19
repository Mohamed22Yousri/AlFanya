import icon1 from "../../assets/Icon-Customer service.png";
import icon2 from "../../assets/Icon-secure.png";
import icon3 from "../../assets/Vector 16.png";
const Services = () => {
  const services = [
    {
      icon: icon1,
      text: "24/7 Customer Services",
    },
    {
      icon: icon3,
      text: "Lowest Price Guarantee",
    },
    {
      icon: icon2,
      text: "Longest Warranties Offer",
    },
  ];

  return (
    <div className="services mt-5">
      <div
        className="container w-100 d-flex justify-content-center align-items-center"
        style={{ paddingInline: "auto" }}
      >
        <div
          className="row justify-content-center"
          style={{ display: "flex", flexWrap: "wrap", margin: "12px" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center "
            >
              <div
                style={{
                  borderRadius: "50%",
                  background: "rgb(47 46 48 / 43%)",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="mx-2 p-2"
                  style={{
                    background: "black",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  src={service.icon}
                  alt={service.text}
                />
              </div>
              <div
                style={{
                  marginBlock: "9px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                <span>{service.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
