import { Grid2, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../../../assets/3051cI (2).png";

const Ky3051 = () => {
  const [value, setValue] = useState<number | null>(5);

  return (
    <>
      <Stack>
        <Grid2
          container
          spacing={2}
          sx={{ textAlign: "center", marginBlock: "3rem" }}
        >
          <Grid2 size={{ md: 6, sm: 12 }}>
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
                (Kyocera 3051ci) is a reliable multifunction printer designed
                for medium-sized business needs. It prints and copies up to 30
                pages per minute in both color and black-and-white with
                high-resolution output (1200 x 1200 dpi). Serving as a printer,
                copier, scanner, and optional fax machine, it supports various
                paper sizes with a capacity of up to 4,100 sheets. The intuitive
                touchscreen ensures easy operation, while its eco-friendly
                design minimizes waste and energy consumption. With advanced
                security features and flexible connectivity options, the Kyocera
                3051ci delivers efficient workflows and high-quality performance
                at a cost-effective rate.
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
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Typography>
              <Typography>Stock: 59</Typography>
              <Typography sx={{ paddingBlock: "3px" }}>
                Availabilty: In Stock
              </Typography>
              <Typography>Brand: 3051ci</Typography>
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

export default Ky3051;
