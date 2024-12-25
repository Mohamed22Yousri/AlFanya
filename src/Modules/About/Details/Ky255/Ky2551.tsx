import { Grid2, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../../../assets/2551.png";
const Ky2551 = () => {
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
                (Kyocera 2551ci)is a multifunction printer ideal for small to
                medium-sized businesses. It prints and copies up to 25 pages per
                minute in color and black-and-white, with high-quality output
                (1200 x 1200 dpi). Featuring multifunctionality as a printer,
                copier, scanner, and optional fax machine, it supports various
                paper sizes with a capacity of up to 2,600 sheets. The
                user-friendly touchscreen ensures easy operation, while its
                eco-friendly design reduces energy consumption. With robust
                security features and flexible connectivity, the Kyocera 2551ci
                offers cost-effective, reliable performance for efficient
                document management.
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
              <Typography>Brand: 2551ci</Typography>
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

export default Ky2551;
