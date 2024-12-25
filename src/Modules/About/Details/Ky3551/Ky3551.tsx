import { Grid2, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../../../assets/3551.png";
const Ky3551 = () => {
  const [value, setValue] = useState<number | null>(4);

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
                (The Kyocera 3551ci) The Kyocera 3551ci is a versatile
                multifunction printer designed for medium to large businesses.
                It prints and copies up to 35 pages per minute in color and
                black-and-white, with sharp, high-resolution output (1200 x 1200
                dpi). Serving as a printer, copier, scanner, and optional fax
                machine, it handles various paper sizes with a capacity of up to
                7,150 sheets. Its intuitive touchscreen ensures easy operation,
                while eco-friendly components reduce waste and energy use. With
                advanced security and flexible connectivity, the Kyocera 3551ci
                delivers reliable, high-quality performance for demanding
                workflows.
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
              <Typography>Brand: 3551CI</Typography>
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

export default Ky3551;
