import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../common/Navbar";
import ImageOne from "../../../assets/images/headerImg1.jpg";
import ImageTwo from "../../../assets/images/headerImg2.jpg";
import ImageThree from "../../../assets/images/headerImg3.jpg";

const images = [ImageOne, ImageTwo, ImageThree];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [changeHeight, setChangeHeight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setChangeHeight(scrollHeight > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const useStyles = {
    box: {
      backgroundImage: `url(${images[currentImageIndex]})`,
      backgroundPosition: "100%",
      backgroundSize: "100%",
      //   transition: "background-position 1s ease-in-out",
      width: "100%",
      position: "relative",
      minHeight: changeHeight ? "90vh" : "100vh",
      left: "0px",
      top: "0px",
      zIndex: "1",
      transition: "0.5s",
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
    container: {
      minHeight: "60vh",
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      marginTop: { xs: "1em", sm: "5em" },
    },
    heading: {
      color: "#fff",
      fontSize: "44px",
      fontWeight: "700",
    },
    paragraph: {
      color: "#fff",
      fontWeight: "500",
      letterSpacing: "0.8px",
      marginRight: "11em",
    },
    headerButton: {
      background: "#ffa903",
      borderRadius: "5px",
      color: "#2a2a2a",
      cursor: "pointer",
      fontSize: "0.9rem",
      fontWeight: "600",
      padding: "18px 23px",
      transition: "all 0.3s ease 0s",
      marginTop: "1em",
      "&:hover": {
        background: "#22092C",
        color: "#fff",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box>
      <Box sx={useStyles.box} mb={5}>
        <Navbar />
        <Container sx={useStyles.container}>
          <Grid container>
            <Grid item xs={12} sm={8} sx={{ pt: changeHeight ? "200px" : "0" }}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  ease: "easeInOut",
                  delay: 0.1,
                  duration: 1.5,
                  type: "spring",
                  repeat: "loop",
                  repeatDelay: 5,
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={useStyles.heading}
                >
                  A Lifetime of Discounts? It's Genius.
                </Typography>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  ease: "easeInOut",
                  delay: 0.3,
                  duration: 1.5,
                  type: "spring",
                  repeat: "loop",
                  repeatDelay: 5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  component={"p"}
                  gutterBottom
                  sx={useStyles.paragraph}
                >
                  Get rewarded for your travels – unlock instant savings of 10%
                  or more with a free Geairinfo.com account
                </Typography>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  ease: "easeInOut",
                  delay: 0.5,
                  duration: 1.5,
                  type: "spring",
                  repeat: "loop",
                  repeatDelay: 5,
                }}
              >
                <Button variant="contained" sx={useStyles.headerButton}>
                  Sign In / Register
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <Body /> */}
    </Box>
  );
};

export default Header;
