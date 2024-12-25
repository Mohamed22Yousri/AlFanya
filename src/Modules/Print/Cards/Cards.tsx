import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import imgOne from "../../../assets/sam.jpg";
import imgTwo from "../../../assets/550.png";
import imgThree from "../../../assets/551ci.png";
import imgFour from "../../../assets/3051cI (2).png";
import imgFive from "../../../assets/3551.png";
import imgSix from "../../../assets/4551.png";
import imgSeven from "../../../assets/2551.png";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <div className="Cards">
        <div className="container text-center">
          <div className="row">
            <Card
              className="my-5 col-md-4 col-sm-6 col-12 me-3"
              sx={{ maxWidth: 345 }}
            >
              <CardHeader title={"SAMSUNG"} subheader={"M4370XL"} />
              <CardMedia
                component="img"
                height="194"
                image={imgOne}
                alt="Paella dish"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {"The Samsung M4370XL is a high-performance monochrome multifunction printer designed for businesses with demanding printing needs. It offers fast speeds, excellent efficiency, and advanced features to enhance productivity and workflow."
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </Typography>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: "1.25rem" }}
                  to="/product"
                  className="btn btn-outline-danger mt-5 px-4"
                >
                  See details
                </Link>
              </CardContent>
            </Card>
            <Card
              className="my-5 col-md-4 col-sm-6 col-12 me-3"
              sx={{ maxWidth: 345 }}
            >
              <CardHeader title={"KYOCERA"} subheader={"5550CI"} />
              <CardMedia
                component="img"
                height="194"
                image={imgTwo}
                alt="Paella dish"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {" The Kyocera 5550ci is a reliable, cost-efficient multifunction  printer designed for professional use, offering advanced   features for businesses of all sizes."
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </Typography>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: "1.25rem" }}
                  to="/5550ci"
                  className="btn btn-outline-danger mt-5 px-4"
                >
                  See details
                </Link>
              </CardContent>
            </Card>
            <Card
              className="my-5 col-md-4 col-sm-6 col-12 me-3"
              sx={{ maxWidth: 345 }}
            >
              <CardHeader title={"KYOCERA"} subheader={"5551CI"} />
              <CardMedia
                component="img"
                height="194"
                image={imgThree}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {"The Kyocera 5551ci is a high-performance multifunction printer built for professional environments. It combines speed, efficiency, and advanced technology to deliver outstanding results for businesses of all sizes."
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </Typography>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: "1.25rem" }}
                  to="/5551ci"
                  className="btn btn-outline-danger mt-5 px-4"
                >
                  See details
                </Link>
              </CardContent>
            </Card>
            <Card
              className="my-5 col-md-4 col-sm-6 col-12 me-3"
              sx={{ maxWidth: 345 }}
            >
              <CardHeader title={"KYOCERA"} subheader={"3051CI"} />
              <CardMedia
                component="img"
                height="194"
                image={imgFour}
                alt="Paella dish"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {"The Kyocera 3051ci is a versatile and reliable multifunction    printer (MFP) designed for professional use. It combines    advanced features, efficiency, and high-quality performance,        making it ideal for businesses of all sizes."
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </Typography>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: "1.25rem" }}
                  to="/3051"
                  className="btn btn-outline-danger mt-5 px-4"
                >
                  See details
                </Link>
              </CardContent>
            </Card>
            <Card
              className="my-5 col-md-4 col-sm-6 col-12 me-3"
              sx={{ maxWidth: 345 }}
            >
              <CardHeader title={"KYOCERA"} subheader={"3551CI"} />
              <CardMedia
                component="img"
                height="194"
                image={imgFive}
                alt="Paella dish"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {" The Kyocera 3551ci is a high-quality multifunction printe (MFP) designed for professional use. Combining advanced technology, speed, and reliability, it caters to the needs of medium to large businesses. "
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </Typography>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: "1.25rem" }}
                  to="/3551"
                  className="btn btn-outline-danger mt-5 px-4"
                >
                  See details
                </Link>
              </CardContent>
            </Card>
            <Card
              className="my-5 col-md-4 col-sm-6 col-12 me-3"
              sx={{ maxWidth: 345 }}
            >
              <CardHeader title={"KYOCERA"} subheader={"4551CI"} />
              <CardMedia
                component="img"
                height="194"
                image={imgSix}
                alt="Paella dish"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {"The Kyocera 4551ci is a high-performance multifunction printer  designed for businesses that require fast, efficient, and     high-quality document management. It combines advanced            features with reliability, making it an excellent choice for      medium to large businesses."
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </Typography>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: "1.25rem" }}
                  to="/4551"
                  className="btn btn-outline-danger mt-5 px-4"
                >
                  See details
                </Link>
              </CardContent>
            </Card>
            <Card
              className="my-5 col-md-4 col-sm-6 col-12 me-3"
              sx={{ maxWidth: 345 }}
            >
              <CardHeader title={"KYOCERA"} subheader={"2551CI"} />
              <CardMedia
                component="img"
                height="194"
                image={imgSeven}
                alt="Paella dish"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {" The Kyocera 2551ci is a reliable and efficient multifunction             printer designed for small to medium-sized businesses. With             advanced features and high performance, it provides an ideal    solution for efficient document management."
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </Typography>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: "1.25rem" }}
                  to="/2551"
                  className="btn btn-outline-danger mt-5 px-4"
                >
                  See details
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
