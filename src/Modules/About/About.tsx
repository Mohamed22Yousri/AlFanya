import { useLocation } from "react-router-dom";
import { Grid2, Rating, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners"; // استيراد PacmanLoader

const About = () => {
  const location = useLocation();
  const [value, setValue] = useState<number | null>(5);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const { image, title, description, stock } = location.state || {};

  if (!location.state) {
    return <Typography>Data is not available!</Typography>;
  }

  return (
    <>
      {loading ? (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "black",
          }}
        >
          <CircleLoader color="blue" size={50} />
        </Stack>
      ) : (
        <Stack>
          <Grid2
            container
            spacing={2}
            sx={{ textAlign: "center", marginBlock: "3rem" }}
          >
            <Grid2
              className="animate__animated animate__backInLeft"
              size={{ md: 6, sm: 12 }}
              sx={{ margin: "auto" }}
            >
              <img style={{ width: "100%" }} src={image} alt="" />
            </Grid2>
            <Grid2
              className="animate__animated animate__slideInUp"
              size={{ md: 6, sm: 12 }}
              sx={{ paddingInline: "20px", paddingBlock: "20px" }}
            >
              <Stack>
                <Typography
                  sx={{
                    maxWidth: "500px",
                    color: "rgb(124, 124, 124)",
                    fontWeight: "700",
                    fontSize: "16px",
                    marginBlock: "2rem",
                  }}
                >
                  {description}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  textAlign: "start",
                  color: "rgb(124, 124, 124)",
                  fontSize: "14px",
                }}
              >
                <Typography>
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={value}
                    onChange={(_event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Typography>
                <Typography>Stock: {stock}</Typography>
                <Typography sx={{ paddingBlock: "3px" }}>
                  Availabilty: In Stock
                </Typography>
                <Typography>{title}</Typography>
                <Typography>
                  {" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginRight: "6px",
                    }}
                  >
                    $14.99{" "}
                  </span>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    from $13
                  </span>
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      )}
    </>
  );
};

export default About;
