import logo1 from "../../assets/s5an-removebg-preview.png";
import logo2 from "../../assets/8-removebg-preview.png";
import logo3 from "../../assets/6-removebg-preview.png";
import logo5 from "../../assets/tank.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img from "../../assets/FOREARTH_white.png";
import kyo from "../../assets/0304logo-thumb-320x240-162.jpg";
import "./CSS/NewProducts.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const ProductsSection = () => {
  const cards = [
    {
      image: logo1,
      title: "Fuser Unit",
      description:
        "The Fuser Unit in a photocopier or printer is responsible for permanently fixing the toner onto the paper using heat and pressure.It consists of two rollers:",
      link: "/about/2",
      stock: "Available",
      del: "8000",
      Price: "7500",
    },
    {
      image: logo2,
      title: "Drum Unit",
      description:
        "The Drum Unit in a photocopier or laser printer is a critical component responsible for transferring the toner onto the paper to create an image or text.",
      link: "/about/3",
      stock: "Available",
      del: "1500",
      Price: "1200",
    },
    {
      image: logo3,
      title: "Pickup Roller",
      description:
        "The Pickup Roller in a photocopier or printer is responsible for feeding the paper from the tray into the machine.",
      link: "/about/9",
      stock: "Available",
      del: "400",
      Price: "350",
    },
    {
      image: logo5,
      title: "Tank",
      description:
        "Types of Tanks in a Copier:Toner Tank (Toner Cartridge / Hopper)Stores the toner powder, which is used to create the image on the paper.When depleted, it needs to be refilled or replaced.",
      link: "/about/3",
      stock: "Available",
      del: "20000",
      Price: "19000",
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
        <div className="row d-flex align-items-center">
          {/* Swiper Slider */}
          <div className="col-md-7">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.link}>
                  <div className="bg-white p-6 rounded-2xl shadow-md text-center group overflow-hidden">
                    <Link
                      to={card.link}
                      state={{
                        image: card.image,
                        title: card.title,
                        subheader: card.subheader,
                        description: card.description,
                        stock: card.stock,
                        Price: card.Price,
                        del: card.del,
                      }}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="overflow-hidden rounded-2xl">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full category-img h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </Link>
                    <h3 className="text-xl font-bold my-3">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Image جنب الـ Swiper */}
          <div className="col-md-5 text-center">
            <img className="w-100" src={img} alt="Product Image" />
          </div>
        </div>
      </div>

      <img className="w-100" src={kyo} alt="" />
    </div>
  );
};

export default ProductsSection;
