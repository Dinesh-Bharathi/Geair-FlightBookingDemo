import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Topbar } from "../../common/Topbar";
// import Appbar from "../../common/Appbar";
import Navbar from "../../common/Navbar";
import ImageOne from "../../../assets/images/headerImg1.jpg";
import ImageTwo from "../../../assets/images/headerImg2.jpg";
import ImageThree from "../../../assets/images/headerImg3.jpg";
import { Menu } from "@mui/icons-material";
import Test from "../../common/Test";

const images = [ImageOne, ImageTwo, ImageThree];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const useStyles = {
    box: {
      backgroundImage: `url(${images[currentImageIndex]})`,
      backgroundPosition: "100%",
      backgroundSize: "100%",
      transition: "background-position 1s ease-in-out",
      width: "100%",
      position: "relative",
      minHeight: "87vh",
      left: "0px",
      top: "0px",
      zIndex: "0",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background: "#003580",
        opacity: "0.85",
        zIndex: "-1",
      },
    },
  };

  return (
    <Box position={"relative"}>
      <Topbar />
      <Box sx={useStyles.box}>
        <Navbar />
        {/* <Test /> */}
      </Box>
    </Box>
  );
};

export default Home;
