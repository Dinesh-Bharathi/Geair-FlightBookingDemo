import React from "react";
import Navbar from "../../common/Navbar";
import { Box, Typography } from "@mui/material";
import BackgroundImage from "../../../assets/images/headerImg2.jpg";
import { BookingTab } from "./BookingTab";

const topStyles = {
  box: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "0 20%",
    position: "relative",
    zIndex: 0,
    minHeight: { xs: "40vh", sm: "50vh", md: "70vh" },
    "&::before": {
      content: '" "',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "#003580",
      opacity: 0.8,
      zIndex: -1,
    },
  },
};

const BookingList = () => {
  return (
    <Box sx={{ background: "#FCFBF6 !important" }}>
      <Box sx={topStyles.box}>
        <Navbar />
        <Box
          sx={{
            padding: { xs: "50px 0 100px", md: "90px 0 125px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "#fff",
              fontSize: "50px",
              fontWeight: "700",
            }}
          >
            Booking List
          </Typography>
        </Box>
        <BookingTab />
      </Box>
    </Box>
  );
};

export default BookingList;
