import {
  CurrencyExchange,
  DirectionsCar,
  FlightClass,
  Hail,
  ImportExport,
  Language,
  LocalAirport,
  PeopleAlt,
  QuestionAnswer,
  RadioButtonChecked,
  Verified,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OfferImage1 from "../../../assets/images/offer_img01.jpg";
import OfferImage2 from "../../../assets/images/offer_img02.jpg";
import OfferImage3 from "../../../assets/images/offer_img03.jpg";
import OfferImage4 from "../../../assets/images/offer_img04.jpg";
import OfferImage5 from "../../../assets/images/offer_img05.jpg";
import DestinationBg from "../../../assets/images/destination_bg.jpg";
import FlyIcon1 from "../../../assets/images/fly_icon01.jpg";
import FlyIcon2 from "../../../assets/images/fly_icon02.jpg";
import FlyIcon3 from "../../../assets/images/fly_icon03.jpg";
import FlyHeadImg1 from "../../../assets/images/offer_img01.jpg";
import FlyHeadImg2 from "../../../assets/images/fly_img02.jpg";
import FlyHeadImg3 from "../../../assets/images/fly_img03.jpg";
import FlyHeadImg4 from "../../../assets/images/fly_img04.jpg";
import FlyHeadImg5 from "../../../assets/images/fly_img05.jpg";
import FlyHeadImg6 from "../../../assets/images/fly_img06.jpg";
import FlyHeadImg7 from "../../../assets/images/fly_img07.jpg";
import FlyHeadImg8 from "../../../assets/images/fly_img08.jpg";
import SliderImg1 from "../../../assets/images/brand_img01.png";
import SliderImg2 from "../../../assets/images/brand_img02.png";
import SliderImg3 from "../../../assets/images/brand_img03.png";
import SliderImg4 from "../../../assets/images/brand_img04.png";
import SliderImg5 from "../../../assets/images/brand_img05.png";
import SliderImg6 from "../../../assets/images/brand_img06.png";
import SliderBg from "../../../assets/images/brand_bg.jpg";
import { useInView } from "react-intersection-observer";

const offerDealsStyles = {
  img: {
    height: { xs: "200px", md: "100px" },
    borderRadius: "4px",
    mb: 2,
    transition: "transform 0.5s ease-in-out",
    transformOrigin: "center",
  },
  cardContent: {
    padding: "1em 1.5em",
    "&:hover": {
      ".cardMedia": {
        transform: "scale(1.1)",
      },
    },
  },
  h2: {
    color: "#21283f",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "5px",
  },
  body2: {
    color: "#6a2e4d",
    fontWeight: "500",
    fontSize: "15px",
    marginBottom: "20px",
  },
  h6: {
    color: "#6a2e4d",
    fontSize: "15px",
    fontWeight: "500",
    marginBottom: "4px",
  },
  h4: {
    fontSize: "18px",
    fontWeight: "600",
  },
};

const FeaturesTab = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease-in-out",
              },
              "&:not(:hover)": {
                transform: "scale(1)", // Styles for mouseleave
                transition: "transform 0.5s ease-in-out",
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "30px",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              <Grid sx={{ marginRight: "1.5em" }}>
                <QuestionAnswer sx={{ fontSize: "53px", color: "#622243" }} />
              </Grid>
              <Grid>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ color: "#21283f", fontWeight: "600", fontSize: "20px" }}
                >
                  We are now available
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "1.3",
                    color: "#606575",
                    fontWeight: "500",
                  }}
                >
                  Call +1 555 666 888 for contact with us
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease-in-out",
              },
              "&:not(:hover)": {
                transform: "scale(1)", // Styles for mouseleave
                transition: "transform 0.5s ease-in-out",
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "30px",
                background: "#fff",
              }}
            >
              <Grid sx={{ marginRight: "1.5em" }}>
                <LocalAirport
                  sx={{
                    fontSize: "53px",
                    color: "#622243",
                    transform: "rotate(45deg)",
                  }}
                />
              </Grid>
              <Grid>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ color: "#21283f", fontWeight: "600", fontSize: "20px" }}
                >
                  International Flight
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "1.3",
                    color: "#606575",
                    fontWeight: "500",
                  }}
                >
                  Call +1 555 666 888 for contact with us
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease-in-out",
              },
              "&:not(:hover)": {
                transform: "scale(1)", // Styles for mouseleave
                transition: "transform 0.5s ease-in-out",
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "30px",
                background: "#fff",
              }}
            >
              <Grid sx={{ marginRight: "1.5em" }}>
                <CurrencyExchange sx={{ fontSize: "53px", color: "#622243" }} />
              </Grid>
              <Grid>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ color: "#21283f", fontWeight: "600", fontSize: "20px" }}
                >
                  Check Refund
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "1.3",
                    color: "#606575",
                    fontWeight: "500",
                  }}
                >
                  Call +1 555 666 888 for contact with us
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const OfferDeals = () => {
  const [hovered, setHovered] = useState({
    cardOne: false,
    cardTwo: false,
    cardThree: false,
    cardFour: false,
    cardFive: false,
  });

  return (
    <Container sx={{ mt: 15 }}>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "14px",
              color: "#ffa903",
              textTransform: "uppercase",
              letterSpacing: "2px",
              display: "block",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            OFFER DEALS
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "36px", color: "#21283f", fontWeight: "700" }}
          >
            Flight Offer Deals
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          sx={{ color: "#6a2e4d" }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "16px", fontWeight: "600" }}
          >
            Best Price Guarantee
          </Typography>
          <Verified sx={{ marginLeft: "0.5em" }} />
        </Grid>
      </Grid>
      <Grid container mt={5} spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{ transition: "all 0.5s ease-in-out" }}
            onMouseEnter={() => setHovered({ cardOne: true })}
            onMouseLeave={() => setHovered({ cardOne: false })}
          >
            {hovered.cardOne ? (
              <CardContent
                sx={{
                  background: "#6A2E4D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "560px",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{ ...offerDealsStyles.h2, color: "#fff" }}
                  >
                    Dhaka to Dubai
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ ...offerDealsStyles.body2, color: "#fff" }}
                  >
                    09 Jun 2022 - 16 Jun 2022
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ ...offerDealsStyles.h6, color: "#fff" }}
                  >
                    Economy from
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ ...offerDealsStyles.h4, color: "#FFA903" }}
                  >
                    $ 980
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "16px",
                      padding: "0.5em 1em",
                      background: "#ffa903",
                      color: "#6A2E4D",
                      fontWeight: "600",
                      mt: 2,
                      width: "100%",
                      "&:hover": {
                        background: "#f3a200",
                        color: "#6A2E4D",
                      },
                    }}
                  >
                    Booking Now
                  </Button>
                  <Button
                    variant="text"
                    sx={{ color: "#fff", width: "100%", mt: 1 }}
                  >
                    Discover
                  </Button>
                </Box>
              </CardContent>
            ) : (
              <>
                <CardMedia
                  title=""
                  image={OfferImage1}
                  sx={{
                    ...offerDealsStyles.img,
                    height: "386px",
                    transition: "transform 0.5s ease-in-out",
                    transformOrigin: "center",
                  }}
                  id="cardMedia"
                />
                <CardContent
                  sx={{
                    padding: "1em 1.5em",
                    "&:hover": {
                      "#cardMedia": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Typography variant="h2" sx={offerDealsStyles.h2}>
                    Dhaka to Dubai
                  </Typography>
                  <Typography variant="body2" sx={offerDealsStyles.body2}>
                    09 Jun 2022 - 16 Jun 2022
                  </Typography>
                  <Typography variant="h6" sx={offerDealsStyles.h6}>
                    Economy from
                  </Typography>
                  <Typography variant="h4" sx={offerDealsStyles.h4}>
                    $ 980
                  </Typography>
                </CardContent>
              </>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card
                onMouseEnter={() => setHovered({ cardTwo: true })}
                onMouseLeave={() => setHovered({ cardTwo: false })}
              >
                {hovered.cardTwo ? (
                  <CardContent
                    sx={{
                      background: "#6A2E4D",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "272px",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h2"
                        sx={{ ...offerDealsStyles.h2, color: "#fff" }}
                      >
                        New York to California
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ ...offerDealsStyles.body2, color: "#fff" }}
                      >
                        09 Jun 2022 - 16 Jun 2022
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ ...offerDealsStyles.h6, color: "#fff" }}
                      >
                        Economy from
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ ...offerDealsStyles.h4, color: "#FFA903" }}
                      >
                        $ 290
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "16px",
                          padding: "0.5em 1em",
                          background: "#ffa903",
                          color: "#6A2E4D",
                          fontWeight: "600",
                          mt: 2,
                          display: "block",
                          width: "100%",
                          "&:hover": {
                            background: "#f3a200",
                            color: "#6A2E4D",
                          },
                        }}
                      >
                        Booking Now
                      </Button>
                      <Button
                        variant="text"
                        sx={{ color: "#fff", width: "100%", mt: 1 }}
                      >
                        Discover
                      </Button>
                    </Box>
                  </CardContent>
                ) : (
                  <CardContent
                    sx={{
                      padding: "1em 1.5em",
                      "&:hover": {
                        ".cardMedia": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    <CardMedia
                      title=""
                      image={OfferImage2}
                      sx={{
                        ...offerDealsStyles.img,
                        transition: "transform 0.5s ease-in-out",
                        transformOrigin: "center",
                      }}
                      className="cardMedia"
                    />
                    <Typography variant="h2" sx={offerDealsStyles.h2}>
                      New York to California
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ ...offerDealsStyles.body2, marginBottom: "16px" }}
                    >
                      09 Jun 2022 - 16 Jun 2022
                    </Typography>
                    <Typography variant="h6" sx={offerDealsStyles.h6}>
                      Economy from
                    </Typography>
                    <Typography variant="h4" sx={offerDealsStyles.h4}>
                      $ 290
                    </Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                onMouseEnter={() => setHovered({ cardThree: true })}
                onMouseLeave={() => setHovered({ cardThree: false })}
              >
                {hovered.cardThree ? (
                  <CardContent
                    sx={{
                      background: "#6A2E4D",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "272px",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h2"
                        sx={{ ...offerDealsStyles.h2, color: "#fff" }}
                      >
                        Malaga to Finland
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ ...offerDealsStyles.body2, color: "#fff" }}
                      >
                        09 Jun 2022 - 16 Jun 2022
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ ...offerDealsStyles.h6, color: "#fff" }}
                      >
                        Economy from
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ ...offerDealsStyles.h4, color: "#FFA903" }}
                      >
                        $ 792
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "16px",
                          padding: "0.5em 1em",
                          background: "#ffa903",
                          color: "#6A2E4D",
                          fontWeight: "600",
                          mt: 2,
                          display: "block",
                          width: "100%",
                          "&:hover": {
                            background: "#f3a200",
                            color: "#6A2E4D",
                          },
                        }}
                      >
                        Booking Now
                      </Button>
                      <Button
                        variant="text"
                        sx={{ color: "#fff", width: "100%", mt: 1 }}
                      >
                        Discover
                      </Button>
                    </Box>
                  </CardContent>
                ) : (
                  <CardContent
                    sx={{
                      padding: "1em 1.5em",
                      "&:hover": {
                        ".cardMedia": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    <CardMedia
                      title=""
                      image={OfferImage3}
                      sx={{
                        ...offerDealsStyles.img,
                        transition: "transform 0.5s ease-in-out",
                        transformOrigin: "center",
                      }}
                      className="cardMedia"
                    />
                    <Typography variant="h2" sx={offerDealsStyles.h2}>
                      Malaga to Finland
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ ...offerDealsStyles.body2, marginBottom: "16px" }}
                    >
                      09 Jun 2022 - 16 Jun 2022
                    </Typography>
                    <Typography variant="h6" sx={offerDealsStyles.h6}>
                      Economy from
                    </Typography>
                    <Typography variant="h4" sx={offerDealsStyles.h4}>
                      $ 792
                    </Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: "2px" }}>
            <Grid item xs={12} sm={6}>
              <Card
                onMouseEnter={() => setHovered({ cardFour: true })}
                onMouseLeave={() => setHovered({ cardFour: false })}
              >
                {hovered.cardFour ? (
                  <CardContent
                    sx={{
                      background: "#6A2E4D",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "272px",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h2"
                        sx={{ ...offerDealsStyles.h2, color: "#fff" }}
                      >
                        Dubai to Maldives
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ ...offerDealsStyles.body2, color: "#fff" }}
                      >
                        09 Jun 2022 - 16 Jun 2022
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ ...offerDealsStyles.h6, color: "#fff" }}
                      >
                        Economy from
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ ...offerDealsStyles.h4, color: "#FFA903" }}
                      >
                        $ 980
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "16px",
                          padding: "0.5em 1em",
                          background: "#ffa903",
                          color: "#6A2E4D",
                          fontWeight: "600",
                          mt: 2,
                          display: "block",
                          width: "100%",
                          "&:hover": {
                            background: "#f3a200",
                            color: "#6A2E4D",
                          },
                        }}
                      >
                        Booking Now
                      </Button>
                      <Button
                        variant="text"
                        sx={{ color: "#fff", width: "100%", mt: 1 }}
                      >
                        Discover
                      </Button>
                    </Box>
                  </CardContent>
                ) : (
                  <CardContent
                    sx={{
                      padding: "1em 1.5em",
                      "&:hover": {
                        ".cardMedia": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    <CardMedia
                      title=""
                      image={OfferImage4}
                      sx={{
                        ...offerDealsStyles.img,
                        transition: "transform 0.5s ease-in-out",
                        transformOrigin: "center",
                      }}
                      className="cardMedia"
                    />
                    <Typography variant="h2" sx={offerDealsStyles.h2}>
                      Dubai to Maldives
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ ...offerDealsStyles.body2, marginBottom: "16px" }}
                    >
                      09 Jun 2022 - 16 Jun 2022
                    </Typography>
                    <Typography variant="h6" sx={offerDealsStyles.h6}>
                      Economy from
                    </Typography>
                    <Typography variant="h4" sx={offerDealsStyles.h4}>
                      $ 980
                    </Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                onMouseEnter={() => setHovered({ cardFive: true })}
                onMouseLeave={() => setHovered({ cardFive: false })}
              >
                {hovered.cardFive ? (
                  <CardContent
                    sx={{
                      background: "#6A2E4D",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "272px",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h2"
                        sx={{ ...offerDealsStyles.h2, color: "#fff" }}
                      >
                        Maldives to New York
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ ...offerDealsStyles.body2, color: "#fff" }}
                      >
                        09 Jun 2022 - 16 Jun 2022
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ ...offerDealsStyles.h6, color: "#fff" }}
                      >
                        Economy from
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ ...offerDealsStyles.h4, color: "#FFA903" }}
                      >
                        $ 350
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "16px",
                          padding: "0.5em 1em",
                          background: "#ffa903",
                          color: "#6A2E4D",
                          fontWeight: "600",
                          mt: 2,
                          display: "block",
                          width: "100%",
                          "&:hover": {
                            background: "#f3a200",
                            color: "#6A2E4D",
                          },
                        }}
                      >
                        Booking Now
                      </Button>
                      <Button
                        variant="text"
                        sx={{ color: "#fff", width: "100%", mt: 1 }}
                      >
                        Discover
                      </Button>
                    </Box>
                  </CardContent>
                ) : (
                  <CardContent
                    sx={{
                      padding: "1em 1.5em",
                      "&:hover": {
                        ".cardMedia": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    <CardMedia
                      title=""
                      image={OfferImage5}
                      sx={{
                        ...offerDealsStyles.img,
                        transition: "transform 0.5s ease-in-out",
                        transformOrigin: "center",
                      }}
                      className="cardMedia"
                    />
                    <Typography variant="h2" sx={offerDealsStyles.h2}>
                      Dubai to New York
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ ...offerDealsStyles.body2, marginBottom: "16px" }}
                    >
                      09 Jun 2022 - 16 Jun 2022
                    </Typography>
                    <Typography variant="h6" sx={offerDealsStyles.h6}>
                      Economy from
                    </Typography>
                    <Typography variant="h4" sx={offerDealsStyles.h4}>
                      $ 350
                    </Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const Destination = () => {
  const [count, setCount] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const countTargetNumber = 5830;
  const percentageTargetNumber = 100;
  const duration = 2000; // Animation duration in milliseconds

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation once
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(countTargetNumber / (duration / 19));

      const animationFrame = () => {
        if (start < countTargetNumber) {
          setCount((prevCount) =>
            Math.min(prevCount + increment, countTargetNumber)
          );
          start += increment;
          requestAnimationFrame(animationFrame);
        }
      };

      animationFrame();
    }
  }, [inView, countTargetNumber]);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(percentageTargetNumber / (duration / 1));

      const animationFrame = () => {
        if (start < percentageTargetNumber) {
          setPercentage((prevCount) =>
            Math.min(prevCount + increment, percentageTargetNumber)
          );
          start += increment;
          requestAnimationFrame(animationFrame);
        }
      };

      animationFrame();
    }
  }, [inView, percentageTargetNumber]);

  return (
    <Box
      sx={{
        mt: 10,
        backgroundImage: `url(${DestinationBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        position: "relative",
        "&:before": {
          content: '" "',
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: "#571336",
          opacity: "0.5",
          zIndex: -1,
        },
      }}
    >
      <Container>
        <Grid container sx={{ padding: "5em 0" }}>
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  background: "#cd7e0f",
                  padding: "5px 18px",
                  borderRadius: "15px",
                  color: "#fff",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  fontWeight: "600",
                  display: "inline-block",
                  mb: "5px",
                }}
              >
                OFFER DEALS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "36px",
                  color: "#fff",
                  fontWeight: "700",
                  mb: "10px",
                }}
              >
                Your Great Destination
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#eae8e8",
                  marginBottom: "25px",
                  fontWeight: "500",
                  width: "75%",
                  fontSize: "16px",
                }}
              >
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free{" "}
                <span style={{ color: "#cd7e0f" }}>Geairinfo.com</span> account
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ borderRadius: "16px" }}>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1.2em 2em !important",
                      }}
                    >
                      <Box ref={ref}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#333333",
                            fontSize: "32px",
                            fontWeight: "700",
                          }}
                        >
                          {count}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#6a2e4d",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          Happy Customers
                        </Typography>
                      </Box>
                      <Box>
                        <PeopleAlt
                          sx={{ fontSize: "54px", color: "#6a2e4d" }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ borderRadius: "16px" }}>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1.2em 2em !important",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#333333",
                            fontSize: "32px",
                            fontWeight: "700",
                          }}
                        >
                          {percentage}%
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#6a2e4d",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          Client Satisfied
                        </Typography>
                      </Box>
                      <Box>
                        <Language sx={{ fontSize: "54px", color: "#6a2e4d" }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Typography
                variant="h6"
                sx={{ color: "#eae8e8", fontSize: "16px", mt: 2 }}
              >
                Discover the latest offers & news and start planning
                <span
                  style={{
                    fontSize: "14px",
                    color: "#fff",
                    background: "#ffa903",
                    borderRadius: "15px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    padding: "5px 11px",
                    marginLeft: "10px",
                    display: "inline-block",
                  }}
                >
                  CONTACT US
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const FlynextPackage = () => {
  const [selectedCategory, setSelectedCategory] = useState("flights");
  const cardData = [
    {
      id: 1,
      headImg: FlyHeadImg1,
      from: "Dubai (DXB)",
      to: "Dubai (DXB)",
      img: FlyIcon1,
      price: "$195",
      category: ["flights", "taxis"],
    },
    {
      id: 2,
      headImg: FlyHeadImg2,
      from: "Switzerland (SWL)",
      to: "New York (USA)",
      img: FlyIcon2,
      price: "$800",
      category: ["flights", "taxis", "carRentals"],
    },
    {
      id: 3,
      headImg: FlyHeadImg3,
      from: "Denmark (DEK)",
      to: "New York (USA)",
      img: FlyIcon3,
      price: "$350",
      category: ["flights", "taxis"],
    },
    {
      id: 4,
      headImg: FlyHeadImg4,
      from: "Jakarta (DXB)",
      to: "New York (USA)",
      img: FlyIcon1,
      price: "$220",
      category: ["flights", "carRentals"],
    },
    {
      id: 5,
      headImg: FlyHeadImg5,
      from: "Dubai (DXB)",
      to: "New York (USA)",
      img: FlyIcon3,
      price: "$195",
      category: ["flights", "taxis"],
    },
    {
      id: 6,
      headImg: FlyHeadImg6,
      from: "Dubai (DXB)",
      to: "New York (USA)",
      img: FlyIcon2,
      price: "$175",
      category: ["flights", "carRentals"],
    },
    {
      id: 7,
      headImg: FlyHeadImg7,
      from: "Switzerland (SWL)",
      to: "New York (USA)",
      img: FlyIcon1,
      price: "$195",
      category: ["flights", "taxis", "carRentals"],
    },
    {
      id: 8,
      headImg: FlyHeadImg8,
      from: "Turkish (SWL)",
      to: "New York (USA)",
      img: FlyIcon2,
      price: "$350",
      category: ["flights", "taxis"],
    },
  ];

  const FilterCard = (props) => {
    return (
      <Grid item md={3} sm={6} xs={12} sx={{ transition: "linear 1s" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Card
            sx={{
              transition: "all 0.5s",
              "&:hover .cardMedia": {
                transform: "scale(1.1)",
                transition: "ease-in-out 0.5s",
              },
              "&:not(:hover) .cardMedia": {
                transform: "scale(1)",
                transition: "ease-in-out 0.5s",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  overflow: "hidden",
                  borderRadius: "8px 8px 0 0",
                  mb: 2,
                }}
              >
                <CardMedia
                  className="cardMedia"
                  image={props.headImg}
                  sx={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                  }}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#622243",
                    fontWeight: "500",
                    fontSize: "14px",
                    marginBottom: "8px",
                  }}
                >
                  09 Jun 2022 - 16 Jun 2022
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "18px", fontWeight: "600", color: "#622243" }}
                >
                  {props.from}
                </Typography>
                <ImportExport
                  sx={{
                    transform: "rotate(90deg)",
                    fontWeight: "600",
                    color: "#622243",
                    fontSize: "30px",
                    mt: "8px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontSize: "18px", fontWeight: "600", color: "#622243" }}
                >
                  {props.to}
                </Typography>
                <img
                  src={props.img}
                  alt="flyIcon1"
                  style={{ margin: "8px 0" }}
                />
              </Box>
              <Divider />
              <Typography
                variant="h6"
                sx={{
                  marginBottom: "3px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#622243",
                  mt: "18px",
                }}
              >
                Economy from
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#21283f", fontSize: "20px", fontWeight: "600" }}
              >
                {props.price}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    );
  };

  const filterCards = (category) => {
    if (category === "all") {
      return cardData;
    }
    return cardData.filter((data) => data.category.includes(category));
  };

  return (
    <Box sx={{ background: "#FBF9F2", padding: "4em 0" }}>
      <Container>
        <Box textAlign={"center"}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              color: "#ffa903",
              letterSpacing: "2px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            FLYNEXT PACKAGE
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#21283f", fontWeight: "700", fontSize: "36px" }}
          >
            Your Great Destination
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={1}
          className="filterButtons"
          sx={{
            // flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
          }}
        >
          <Button
            onClick={() => setSelectedCategory("flights")}
            variant="contained"
            size="large"
            startIcon={
              <RadioButtonChecked
                className="radioIcon"
                sx={{
                  mr: 2,
                  color: selectedCategory === "flights" ? "#e79b0a" : "#606575",
                }}
              />
            }
            endIcon={<FlightClass sx={{ ml: 1 }} />}
            sx={{
              background: selectedCategory === "flights" ? "#ffa903" : "#fff",
              color: selectedCategory === "flights" ? "#2A2A2A" : "#606575",
              fontSize: "14px",
              fontWeight: "600",
              padding: "10px 16px 10px 16px",
              transition: "ease-in-out 0.5s",
              margin: { xs: "0.5em", sm: "0.5em 6px" },
              "&:hover": {
                background: "#ffa903",
                color: "#2A2A2A",
                ".radioIcon": {
                  color: "#e79b0a",
                  transition: "color 0.5s ease-in-out 0.5s",
                },
              },
            }}
          >
            Flights
          </Button>
          <Button
            onClick={() => setSelectedCategory("carRentals")}
            variant="contained"
            size="large"
            startIcon={
              <RadioButtonChecked
                className="radioIcon"
                sx={{
                  mr: 2,
                  color:
                    selectedCategory === "carRentals" ? "#e79b0a" : "#606575",
                }}
              />
            }
            endIcon={<DirectionsCar sx={{ ml: 1 }} />}
            sx={{
              background:
                selectedCategory === "carRentals" ? "#ffa903" : "#fff",
              color: selectedCategory === "carRentals" ? "#2A2A2A" : "#606575",
              fontSize: "14px",
              fontWeight: "600",
              padding: "10px 16px 10px 16px",
              transition: "ease-in-out 0.5s",
              margin: { xs: "0.5em", sm: "0.5em 6px" },
              "&:hover": {
                background: "#ffa903",
                color: "#2A2A2A",
                ".radioIcon": {
                  color: "#e79b0a",
                  transition: "color 0.5s ease-in-out 0.5s",
                },
              },
            }}
          >
            Car Rentals
          </Button>
          <Button
            onClick={() => setSelectedCategory("taxis")}
            variant="contained"
            size="large"
            startIcon={
              <RadioButtonChecked
                className="radioIcon"
                sx={{
                  mr: 2,
                  color: selectedCategory === "taxis" ? "#e79b0a" : "#606575",
                }}
              />
            }
            endIcon={<Hail sx={{ ml: 1 }} />}
            sx={{
              background: selectedCategory === "taxis" ? "#ffa903" : "#fff",
              color: selectedCategory === "taxis" ? "#2A2A2A" : "#606575",
              fontSize: "14px",
              fontWeight: "600",
              padding: "10px 16px 10px 16px",
              transition: "ease-in-out 0.5s",
              margin: { xs: "0.5em", sm: "0.5em 6px" },
              "&:hover": {
                background: "#ffa903",
                color: "#2A2A2A",
                ".radioIcon": {
                  color: "#e79b0a",
                  transition: "color 0.5s ease-in-out 0.5s",
                },
              },
            }}
          >
            Taxis
          </Button>
        </Box>
        <Box mt={7}>
          <Grid container spacing={4}>
            {filterCards(selectedCategory).map((data) => (
              <FilterCard
                key={data.id}
                headImg={data.headImg}
                from={data.from}
                to={data.to}
                img={data.img}
                price={data.price}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const Slider = () => {
  const sliderImages = [
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change the interval as needed (e.g., 3000ms for 3 seconds)
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${SliderBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        zIndex: 1,
        padding: "100px 0",
        "&:before": {
          content: '" "',
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: "#622243",
          opacity: 0.95,
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          margin: { xs: "0 2em", sm: "0 5em" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "transform 0.5s ease",
            transform: `translateX(-${
              currentIndex * (100 / sliderImages.length)
            }%)`,
          }}
        >
          {sliderImages.map((img, index) => (
            <Box
              key={index}
              sx={{
                flex: `0 0 ${100 / sliderImages.length}%`,
                padding: { xs: "0 2.5em", sm: "0 3.5em" },
              }}
            >
              <img src={img} alt="" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const Body = () => {
  return (
    <Box
      sx={{
        minHeight: "1000px",
        transform: "translateY(-80px)",
        position: "relative",
        zIndex: "0",
        pt: 15,
      }}
    >
      <FeaturesTab />
      <OfferDeals />
      <Destination />
      <FlynextPackage />
      <Slider />
    </Box>
  );
};

export default Body;
