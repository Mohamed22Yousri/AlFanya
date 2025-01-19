import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import imgOne from "../../../assets/sam.png";
import imgTwo from "../../../assets/550 (2).png";
import imgThree from "../../../assets/551ci (2).png";
import imgFour from "../../../assets/3051cI (2).png";
import imgFive from "../../../assets/3551.png";
import imgSix from "../../../assets/4551.png";
import imgSeven from "../../../assets/2551.png";

const Cards = () => {
  const products = [
    {
      image: imgOne,
      title: "SAMSUNG",
      subheader: "M4370XL",
      description:
        "The Samsung M4370XL is a high-performance multifunction printer designed for businesses with demanding workloads. It delivers fast, professional-quality printing, scanning, copying, and faxing, all in one compact device. Featuring advanced connectivity options, user-friendly controls, and eco-friendly features, it enhances productivity while reducing operational costs. Built for reliability, durability, and efficiency, this printer is the perfect solution for modern offices needing high-volume, secure, and streamlined document management.",
      link: "/about/1",
      stock: "2",
    },
    {
      image: imgTwo,
      title: "KYOCERA",
      subheader: "5550CI",
      description:
        "The Kyocera 5550ci is a reliable, cost-efficient multifunction printer designed for professional use. It delivers fast, high-quality printing, copying, scanning, and faxing, making it ideal for businesses of all sizes. With advanced features such as flexible paper handling, customizable workflows, and robust security, this printer enhances office productivity. Its energy-efficient design and intuitive interface ensure ease of use, while helping businesses save on costs and reduce environmental impact. Perfect for high-volume environments, the Kyocera 5550ci provides reliable, consistent performance.",
      link: "/about/2",
      stock: "2",
    },
    {
      image: imgThree,
      title: "KYOCERA",
      subheader: "5551CI",
      description:
        "The Kyocera 5551ci is a high-performance multifunction printer built for professional environments. It combines speed, efficiency, and advanced technology to deliver outstanding results. With superior print quality, fast processing speeds, and seamless integration into office workflows, it ensures high productivity. The device supports a variety of paper sizes and types, making it versatile for diverse business needs. Designed for efficiency, it helps businesses streamline operations while reducing costs and environmental impact, all while maintaining security and user-friendly operation. Perfect for businesses that demand top-tier performance.",
      link: "/about/3",
      stock: "2",
    },
    {
      image: imgFour,
      title: "KYOCERA",
      subheader: "3051CI",
      description:
        "The Kyocera 3051ci is a versatile and reliable multifunction printer designed for professional use. It combines advanced features, efficiency, and high-quality performance to meet the needs of dynamic office environments. With fast print speeds, exceptional image quality, and multifunction capabilities, it ensures smooth and efficient document handling. Its compact design and eco-friendly features make it a practical choice for businesses looking to streamline operations while reducing costs. The Kyocera 3051ci is built to deliver consistent, top-notch results for businesses of all sizes.",
      link: "/about/4",
      stock: "2",
    },
    {
      image: imgFive,
      title: "KYOCERA",
      subheader: "3551CI",
      description:
        "The Kyocera 3551ci is a high-quality multifunction printer designed for professional use. Combining advanced technology, speed, and reliability, it caters to medium to large businesses. With fast print speeds, superior image quality, and versatile document handling, it supports high-volume tasks with ease. Its intuitive interface and customizable features ensure seamless integration into any business workflow. The Kyocera 3551ci is built for efficiency, helping businesses reduce costs while delivering top-tier performance and reliability in every print, scan, copy, and fax job.",
      link: "/about/5",
      stock: "2",
    },
    {
      image: imgSix,
      title: "KYOCERA",
      subheader: "4551CI",
      description:
        "The Kyocera 4551ci is a high-performance multifunction printer designed for businesses that require fast, efficient, and high-quality document management. With advanced features like rapid print speeds, superior color accuracy, and flexible paper handling, it is perfect for high-demand environments. This printer offers a user-friendly interface, robust security features, and energy-efficient operation. Ideal for medium to large businesses, the Kyocera 4551ci helps streamline document workflows, improve productivity, and reduce operational costs while maintaining excellent print quality.",
      link: "/about/6",
      stock: "2",
    },
    {
      image: imgSeven,
      title: "KYOCERA",
      subheader: "2551CI",
      description:
        "The Kyocera 2551ci is a reliable and efficient multifunction printer designed for small to medium-sized businesses. It provides an ideal solution for efficient document management with fast print speeds, high-quality outputs, and multifunction capabilities. Its compact design makes it perfect for office spaces with limited room, while its energy-efficient features help reduce operational costs. The Kyocera 2551ci streamlines document workflows, offering seamless printing, scanning, and copying, while ensuring businesses maintain high productivity and minimal downtime.",
      link: "/about/7",
      stock: "2",
    },
  ];

  return (
    <div className="Cards">
      <div className="container text-center">
        <div className="row" style={{ justifyContent: "center" }}>
          {products.map((product, index) => (
            <Card
              key={index}
              className="my-5 col-md-4 col-sm-6 col-12 me-3"
              sx={{ maxWidth: 345 }}
            >
              <CardHeader title={product.title} subheader={product.subheader} />
              <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {product.description.split(" ").slice(0, 9).join(" ")}...
                </Typography>
                <Link
                  state={{
                    image: product.image,
                    title: product.title,
                    subheader: product.subheader,
                    description: product.description,
                    stock: product.stock,
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: "1.25rem" }}
                  to={product.link}
                  className="btn btn-outline-danger mt-5 px-4"
                >
                  See details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
