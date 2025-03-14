import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imgTwo from "../../assets/550 (2).png";
import imgThree from "../../assets/551ci (2).png";
import imgOne from "../../assets/sam.png";
import imgEight from "../../assets/download.jpg";
import { Link } from "react-router-dom";

const cards = [
  {
    image: imgOne,
    title: "SAMSUNG",
    subheader: "M4370XL",
    description:
      "The Samsung M4370XL is a high-performance multifunction printer designed for businesses with demanding workloads. It delivers fast, professional-quality printing, scanning, copying, and faxing, all in one compact device. Featuring advanced connectivity options...",
    link: "/about/1",
    stock: "Available",
    del: "13500",
    Price: "11000",
  },
  {
    image: imgTwo,
    title: "KYOCERA",
    subheader: "5550CI",
    description:
      "The Kyocera 5550ci is a reliable, cost-efficient multifunction printer designed for professional use. It delivers fast, high-quality printing, copying, scanning, and faxing, making it ideal for businesses of all sizes. With advanced features such as flexible paper handling, customizable workflows...",
    link: "/about/2",
    stock: "Available",
    del: "20000",
    Price: "19000",
  },
  {
    image: imgThree,
    title: "KYOCERA",
    subheader: "5551CI",
    description:
      "The Kyocera 5551ci is a high-performance multifunction printer built for professional environments. It combines speed, efficiency, and advanced technology to deliver outstanding results. With superior print quality, fast processing speeds, and seamless integration into office...",
    link: "/about/3",
    stock: "Available",
    del: "20000",
    Price: "19000",
  },
  {
    image: imgEight,
    title: "KYOCERA",
    subheader: "MA4000",
    description:
      "The Kyocera MA4000 This flexible device is an all-in-one solution for medium and large-sized work groups, offering everything from double-sided print to copying, scanning and faxing, Double-sided print, copy, scan and fax.HyPAS™ solution platform enables powerful customisations...",
    link: "/about/9",
    stock: "Available",
    del: "20000",
    Price: "19000",
  },
  {
    image: imgThree,
    title: "KYOCERA",
    subheader: "5551CI",
    description:
      "The Kyocera 5551ci is a high-performance multifunction printer built for professional environments. It combines speed, efficiency, and advanced technology to deliver outstanding results. With superior print quality, fast processing speeds, and seamless integration into office...",
    link: "/about/3",
    stock: "Available",
    del: "20000",
    Price: "19000",
  },
];

const CardSwiper = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 style={{ marginBottom: "2rem", fontWeight: "bold" }}>Top Category</h2>
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
  );
};

export default CardSwiper;
