import { Grid2, Rating, Stack, Typography } from "@mui/material";
import logo from "../../assets/sam.jpg";
import { useState } from "react";

const SamsungDeatils = () => {
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
                (Samsung M4370XL) is a high-performance monochrome multifunction
                printer designed for demanding business needs. It prints and
                copies up to 43 pages per minute, delivering sharp,
                professional-quality output (1200 x 1200 dpi). With
                multifunctionality as a printer, copier, scanner, and optional
                fax machine, it supports various paper sizes with a capacity of
                2,650 sheets. The intuitive touchscreen, eco-friendly design,
                and advanced security features make it ideal for medium to large
                businesses seeking efficient, reliable, and cost-effective
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
              <Typography>Brand: M4370XL</Typography>
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

export default SamsungDeatils;
