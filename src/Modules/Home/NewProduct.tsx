import logo1 from "../../assets/7.jpg"
import logo2 from "../../assets/8.jpg"
import logo3 from "../../assets/6.jpg"
import logo4 from "../../assets/551ci.png"
import logo5 from "../../assets/tank.png"
import "./CSS/NewProducts.css";
const ProductsSection = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: logo1,
      alt: "Card 1",
      title: "Toner",
    },
    {
      id: 2,
      imgSrc: logo2,
      alt: "Card 2",
      title: "Drum Unit",
    },
    {
      id: 3,
      imgSrc: logo3,
      alt: "Card 3",
      title: "Pickup Rollers",
    },
    {
      id: 4,
      imgSrc: logo5,
      alt: "Card 4",
      title: "Tank",
    },
  ];

  return (
    <div className="new-products pt-5 mb-5">
      <div className="px-5 title d-flex align-center justify-space-between">
        <h2
          className="mb-5"
          style={{ fontSize: "30px", fontWeight: "900", textAlign: "left" }}
        >
          Products
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 col-md-7 pt-16 order-1 order-md-0 d-flex mt-5"
            style={{ alignItems: "center" }}
          >
            <div
              style={{ gap: "20px" }}
              className="d-flex flex-column flex-sm-row justify-content-center align-items-center pb-13 px-5 row"
            >
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="card col-12 col-sm-6 col-md-4 mb-3"
                  style={{
                    width: "50%",
                    maxWidth: "300px", // لتحديد أقصى عرض للكروت في الشاشات الأكبر
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative", // مهم لتموضع النص داخل الكرت
                    overflow: "hidden", // إخفاء النصوص أو العناصر التي تخرج عن الكرت
                    cursor: "pointer",
                    transition: "background-color 0.3s ease", // تأثير تدرج اللون
                  }}
                >
                  <div
                    className="img-parent"
                    style={{
                      height: "170px",
                      overflow: "hidden",
                      position: "relative",
                      transition: "transform 0.3s ease", // تأثير التغيير في الصورة
                    }}
                  >
                    <img
                      src={card.imgSrc}
                      alt={card.alt}
                      className="w-100"
                      style={{
                        height: "100%",
                        transition: "transform 0.5s ease", // تأثير التغيير في الصورة
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <h2>{card.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-5">
            <img
              className="w-100"
              src={logo4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
