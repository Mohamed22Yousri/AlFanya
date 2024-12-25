import { Grid2, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../../../assets/4551.png";
const Ky4551 = () => {
  const [value, setValue] = useState<number | null>(5);
  return (
    <>
      <Stack>
        <Grid2
          container
          spacing={2}
          sx={{ textAlign: "center", marginBlock: "3rem" }}
        >
          <Grid2 size={{ md: 6, sm: 12 }}  sx={{margin:"auto"}}>
            <img style={{ width: "100%" }} src={logo} alt="" />
          </Grid2>
          <Grid2
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
                (Kyocera 4551ci) is a high-performance multifunction printer
                designed for businesses with high-volume printing needs. It
                prints and copies up to 45 pages per minute in both color and
                black-and-white, delivering sharp, high-quality prints (1200 x
                1200 dpi). With its multifunctionality as a printer, copier,
                scanner, and optional fax machine, it supports a variety of
                paper sizes and has a large capacity of up to 7,150 sheets. The
                intuitive touchscreen and eco-friendly design ensure ease of use
                and cost efficiency. Additionally, enhanced security features
                and flexible connectivity options make it ideal for businesses
                seeking efficient, secure, and reliable document management.
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
              <Typography>Stock: 59</Typography>
              <Typography sx={{ paddingBlock: "3px" }}>
                Availabilty: In Stock
              </Typography>
              <Typography>Brand: 4551ci</Typography>
              <Typography>
                {" "}
                <span
                  style={{ textDecoration: "line-through", marginRight: "6px" }}
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
    </>
  );
};

export default Ky4551;
