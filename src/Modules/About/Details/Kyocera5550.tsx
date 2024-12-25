import { Grid2, Stack, Typography } from "@mui/material";
import logo from "../../../assets/550 (2).png";
import Rating from "@mui/material/Rating";
import { useState } from "react";

const Details = () => {
  const [value, setValue] = useState<number | null>(4);
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
                ( Kyocera 5550ci) is a versatile, high-performance multifunction
                printer offering fast printing and copying speeds of up to 50
                pages per minute in color and black-and-white. It delivers
                sharp, high-resolution prints (1200 x 1200 dpi) and functions as
                a printer, copier, scanner, and optional fax machine. With a
                large paper capacity of up to 7,650 sheets and support for
                various paper sizes, it handles high-volume tasks efficiently.
                The user-friendly touchscreen ensures easy operation, while its
                eco-friendly design reduces waste and energy consumption.
                Advanced security features, including encryption and user
                authentication, protect sensitive data. Additionally, its robust
                connectivity options, such as wireless and mobile printing, make
                it ideal for businesses seeking efficient workflows,
                high-quality outputs, and cost-effective operation.
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
              <Typography>Brand: 5550ci</Typography>
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

export default Details;
