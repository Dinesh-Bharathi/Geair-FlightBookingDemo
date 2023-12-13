import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Container,
  Grid,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  IconButton,
  TextField,
  Autocomplete,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Slider,
  Divider,
  CardContent,
} from "@mui/material";
import {
  AirplaneTicket,
  ArticleOutlined,
  Brightness4Outlined,
  ConnectingAirports,
  ExpandMore,
  Flight,
  FlightTakeoff,
  ImportExport,
  NightsStayOutlined,
  PendingActions,
  RadioButtonUnchecked,
  TaskAlt,
  WbSunnyOutlined,
  WbTwilight,
} from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { airportsJson, airportNames } from "./airports";
import "../../../App.css";
import theme from "../../../assets/styles/theme";
import Image from "../../../assets/images/Decrease_4.jpg";

const bookingTabStyles = {
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#622243",
    padding: "12px",
    cursor: "pointer",
    "&:hover": {
      background: "#ffa903",
      transition: "background 0.5s",
    },
  },
  icon: {
    fontSize: "20px",
    color: "#fff",
    mr: 1,
  },
  tabName: {
    fontSize: "15px",
    color: "#fff",
  },
  radio: {
    color: "#f8f3e7",
    "&.Mui-checked": {
      color: "#ffa903",
      background: "#f8f3e7",
    },
  },
  radioLable: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#6a2e4d",
  },
};

const BookingForm = ({
  setFormData,
  setFilteredAirports,
  setFlightsWithinPriceRange,
}) => {
  const today = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const validationSchema = Yup.object({
    tripType: Yup.string().required("Trip type is required"),
    fromValue: Yup.string().required("From location is required"),
    toValue: Yup.string()
      .required("To location is required")
      .notOneOf(
        [Yup.ref("fromValue")],
        "From and To locations cannot be the same"
      ),
  });

  const formik = useFormik({
    initialValues: {
      tripType: "One-way",
      fromValue: "",
      toValue: "",
      tourType: "",
      departDate: {
        fullDate: today,
        date: today.getDate(),
        day: today.toLocaleDateString("en-US", { weekday: "long" }),
        month: month[today.getMonth()],
      },
      returnDate: {
        fullDate: today,
        date: today.getDate(),
        day: today.toLocaleDateString("en-US", { weekday: "long" }),
        month: month[today.getMonth()],
      },
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log("Form values", formik.values);
      // console.log("Error", formik.errors);
      setFormData(values);
      const filteredAirports = airportsJson.filter(
        (airport) => airport.stateAirportName === values.fromValue
      );
      setFilteredAirports(filteredAirports);
      setFlightsWithinPriceRange(filteredAirports);
      // console.log(filteredAirports);
      // console.log(formik.values.returnDate);
    },
  });

  const handleIconClick = () => {
    formik.setFieldValue("fromValue", formik.values.toValue);
    formik.setFieldValue("toValue", formik.values.fromValue);
  };

  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      <Grid container>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={formik.values.tripType}
            onChange={(event, newValue) => {
              formik.setFieldValue("tripType", newValue);
            }}
            sx={{ margin: "0 1em" }}
          >
            <FormControlLabel
              value="Roundtrip"
              control={<Radio sx={bookingTabStyles.radio} />}
              label={<span style={bookingTabStyles.radioLable}>Roundtrip</span>}
            />
            <FormControlLabel
              value="One-way"
              control={<Radio sx={bookingTabStyles.radio} />}
              label={<span style={bookingTabStyles.radioLable}>One-way</span>}
            />
            <FormControlLabel
              value="Multi-city"
              control={<Radio sx={bookingTabStyles.radio} />}
              label={
                <span style={bookingTabStyles.radioLable}>Multi-city</span>
              }
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid
        container
        sx={{
          background: "#F8F3E7",
          borderRadius: "4px",
          padding: "0.5em 0",
        }}
      >
        <Grid item xs={12} md={4} display={"flex"} position={"relative"}>
          <Autocomplete
            id="fromAutoComplete"
            options={airportNames.map((airport) => airport.stateAirportName)}
            disableClearable
            value={formik.values.fromValue}
            onChange={(event, newValue) =>
              formik.setFieldValue("fromValue", newValue)
            }
            getOptionLabel={(option) => option || ""}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                fullWidth
                sx={{ width: "90%" }}
                error={
                  formik.touched.fromValue && Boolean(formik.errors.fromValue)
                }
                helperText={formik.touched.fromValue && formik.errors.fromValue}
              />
            )}
          />
          <Autocomplete
            id="toAutoComplete"
            options={airportNames.map((airport) => airport.stateAirportName)}
            disableClearable
            value={formik.values.toValue}
            onChange={(event, newValue) =>
              formik.setFieldValue("toValue", newValue)
            }
            getOptionLabel={(option) => option || ""}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                fullWidth
                error={formik.touched.toValue && Boolean(formik.errors.toValue)}
                helperText={formik.touched.toValue && formik.errors.toValue}
              />
            )}
          />

          <IconButton
            onClick={handleIconClick}
            sx={{
              position: "absolute",
              left: "42%",
              top: "8px",
              transform: "rotate(90deg)",
              background: "#FEFDFB",
              zIndex: 1,
              "&:hover": {
                background: "#622243",
                color: "#fff",
                transition: "background 0.5s",
              },
            }}
          >
            <ImportExport />
          </IconButton>
        </Grid>
        <Grid item md={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tour type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tour type"
              fullWidth
              value={formik.values.tourType}
              onChange={(event) =>
                formik.setFieldValue("tourType", event.target.value)
              }
            >
              <MenuItem value="">Tour type</MenuItem>
              <MenuItem value={"Adventure Travel"}>Adventure Travel</MenuItem>
              <MenuItem value={"Family Tours"}>Family Tours</MenuItem>
              <MenuItem value={"Newest Item"}>Newest Item</MenuItem>
              <MenuItem value={"Nature & Wildlife"}>Nature & Wildlife</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} display={"flex"}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Depart Date"
              value={formik.values.departDate.fullDate}
              minDate={today}
              onChange={(newValue) => {
                const monthString = month[newValue.getMonth() + 1];
                formik.setFieldValue("departDate", {
                  fullDate: newValue,
                  date: newValue.getDate(),
                  month: monthString,
                  day: newValue.toLocaleDateString("en-US", {
                    weekday: "long",
                  }),
                });
                // Update returnDate to the same as departDate when departDate changes
                formik.setFieldValue("returnDate", {
                  fullDate: newValue,
                  date: newValue.getDate(),
                  month: monthString,
                  day: newValue.toLocaleDateString("en-US", {
                    weekday: "long",
                  }),
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={
                    formik.touched.departDate && formik.errors.departDate
                  }
                  format="dd/MM/yyyy"
                />
              )}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Return Date"
              value={formik.values.returnDate.fullDate}
              minDate={formik.values.departDate.fullDate || today}
              onChange={(newValue) => {
                const selectedMonthString = month[newValue.getMonth()];
                formik.setFieldValue("returnDate", {
                  fullDate: newValue,
                  date: newValue.getDate(),
                  month: selectedMonthString,
                  day: newValue.toLocaleDateString("en-US", {
                    weekday: "long",
                  }),
                });
              }}
              disabled={formik.values.tripType === "One-way"}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={
                    formik.touched.returnDate && formik.errors.returnDate
                  }
                  format="dd/MM/yyyy"
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={2}>
          <TextField label="Passenger/Class" value={"1Passenger/Economy"} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          p={2}
        >
          <Button
            variant="text"
            sx={{
              fontSize: "16px",
              color: "#945274",
              fontWeight: "600",
              marginRight: "25px",
              textTransform: "capitalize",
            }}
          >
            + Add Promo Code
          </Button>
          <Button
            type="submit"
            variant="contained"
            // disabled={!formik.isValid}
            // onSubmit={formik.handleSubmit}
            sx={{
              background: "#ffa903",
              padding: "12px 20px",
              color: "#22092C",
              fontWeight: "600",
              textTransform: "capitalize",
              "&:hover": { background: "#22092C", color: "#fff" },
            }}
          >
            Show Flights <FlightTakeoff sx={{ ml: 1 }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export const BookingTab = () => {
  const [changeHeight, setChangeHeight] = useState(false);
  const [sliderValue, setSliderValue] = React.useState([900, 1100]);
  const [flightsWithinPriceRange, setFlightsWithinPriceRange] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [sliderChanged, setSliderChanged] = useState(false);
  // const sliderBtnRef = useRef(null);

  const handleFilterBtn = () => {
    const airports = filteredAirports.filter((flight) => {
      const flightPrice = flight.flightDetails[0].flightCost;
      return flightPrice >= sliderValue[0] && flightPrice <= sliderValue[1];
    });

    // Update the state with the filtered flights within the price range
    setFlightsWithinPriceRange(airports);
    // console.log("filteredAirports", filteredAirports);
    // console.log("final", flightsWithinPriceRange);
    setSliderChanged(false);
  };

  const [formData, setFormData] = useState({
    tripType: "One-way",
    fromValue: "",
    toValue: "",
    tourType: "",
    departDate: {
      fullDate: "",
      date: "",
      day: "",
      month: "",
    },
    returnDate: {
      fullDate: "",
      date: "",
      day: "",
      month: "",
    },
  });

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

  const DisplayFlights = () => {
    const [changeHeight, setChangeHeight] = useState(false);

    const handleSliderChange = (event, newValue) => {
      setSliderValue(newValue);
      setSliderChanged(true);
      // setTimeout(() => {
      //   setSliderChanged(false);
      // }, 500);
    };

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

    const FilterTab = () => {
      return (
        <Box sx={{ background: "#fff" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#ffffff",
              fontSize: "22px",
              textAlign: "center",
              background: "#57112f",
              padding: "14px 15px",
            }}
          >
            FILTERS
          </Typography>
          <Box sx={{ p: "35px 30px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                color: "#571336",
                marginBottom: "30px",
                paddingBottom: "15px",
                borderBottom: "1px dashed #d2d2d2",
                fontWeight: "600",
              }}
            >
              Price Range
            </Typography>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              aria-labelledby=""
              valueLabelDisplay="off"
              min={800}
              max={1500}
              step={1}
              sx={{ color: "#57112f", mb: "30px" }}
            />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: "500", color: "#6a2e4d" }}
              >
                Price:{" "}
                <span
                  style={{
                    width: "100px",
                    color: "#571336",
                    fontWeight: "600",
                  }}
                >
                  ${sliderValue[0]} - ${sliderValue[1]}
                </span>
              </Typography>
              <Button
                className={`sliderBtn ${sliderChanged && "ripple"}`}
                onClick={handleFilterBtn}
                sx={{
                  transition: "all .3s ease-out 0s",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  minWidth: "68px",
                  padding: "9px 12px",
                  color: sliderChanged ? "#fff" : "#571336",
                  fontSize: "13px",
                  background: sliderChanged ? "#57112f" : "#fbf9f2",
                  fontWeight: "600",
                  border: "1px solid #ebebeb",
                  "&:hover": {
                    color: sliderChanged && "#57112f",
                  },
                  "&:active": {
                    background: sliderChanged && theme.palette.success.light,
                  },
                }}
              >
                Filter
              </Button>
            </Box>
          </Box>
          <Divider />
          {/* <Box sx={{ p: "35px 30px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                color: "#571336",
                marginBottom: "30px",
                paddingBottom: "15px",
                borderBottom: "1px dashed #d2d2d2",
                fontWeight: "600",
              }}
            >
              DepartureTime
            </Typography>
            <Box>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#ebebee",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#6a2e4d",
                  padding: "13px 20px",
                  width: "100%",
                  textDecoration: "none",
                  mb: 1,
                }}
              >
                <WbTwilight sx={{ color: "#6a2e4d", mr: 2 }} />
                <Typography
                  sx={{
                    p: "0 2em",
                    position: "relative",
                    "&:before": {
                      content: '" "',
                      position: "absolute",
                      width: "3px",
                      background: "#606575",
                      height: "100%",
                      left: "0em",
                    },
                  }}
                >
                  00:00 - 05:59
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#ebebee",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#6a2e4d",
                  padding: "13px 20px",
                  width: "100%",
                  textDecoration: "none",
                  mb: 1,
                }}
              >
                <WbSunnyOutlined sx={{ color: "#6a2e4d", mr: 2 }} />
                <Typography
                  sx={{
                    p: "0 2em",
                    position: "relative",
                    "&:before": {
                      content: '" "',
                      position: "absolute",
                      width: "3px",
                      background: "#606575",
                      height: "100%",
                      left: "0em",
                    },
                  }}
                >
                  06:00 - 11:59
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#ebebee",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#6a2e4d",
                  padding: "13px 20px",
                  width: "100%",
                  textDecoration: "none",
                  mb: 1,
                }}
              >
                <Brightness4Outlined sx={{ color: "#6a2e4d", mr: 2 }} />
                <Typography
                  sx={{
                    p: "0 2em",
                    position: "relative",
                    "&:before": {
                      content: '" "',
                      position: "absolute",
                      width: "3px",
                      background: "#606575",
                      height: "100%",
                      left: "0em",
                    },
                  }}
                >
                  12:00 - 17:59
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#ebebee",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#6a2e4d",
                  padding: "13px 20px",
                  width: "100%",
                  textDecoration: "none",
                  mb: 1,
                }}
              >
                <NightsStayOutlined sx={{ color: "#6a2e4d", mr: 2 }} />
                <Typography
                  sx={{
                    p: "0 2em",
                    position: "relative",
                    "&:before": {
                      content: '" "',
                      position: "absolute",
                      width: "3px",
                      background: "#606575",
                      height: "100%",
                      left: "0em",
                    },
                  }}
                >
                  18:00 - 23:59
                </Typography>
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ p: "35px 30px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                color: "#571336",
                marginBottom: "30px",
                paddingBottom: "15px",
                borderBottom: "1px dashed #d2d2d2",
                fontWeight: "600",
              }}
            >
              Number of stops
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#ebebee",
                padding: "13px 20px",
                position: "relative",
              }}
            >
              <ConnectingAirports sx={{ fontSize: "27px", color: "#5d1b3d" }} />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                sx={{ height: "30px", border: "none" }}
                // value={"Direct"}
                value={10}
              >
                <MenuItem value={10}>Direct</MenuItem>
                <MenuItem value={20}>One stop</MenuItem>
                <MenuItem value={30}>Two stop</MenuItem>
              </Select>
            </Box>
          </Box> */}
        </Box>
      );
    };

    const DisplayFlightData = (props) => {
      const [displayFlightDetails, setDisplayFlightDetails] = useState(false);
      return (
        <Card sx={{ mb: 4 }}>
          <CardContent
            sx={{
              padding: displayFlightDetails
                ? "30px 30px 10px 30px !important"
                : "30px 30px 10px 30px !important",
            }}
          >
            <Grid container display={"flex"} alignItems={"flex-start"} mb={2}>
              <Grid item xs={4}>
                <Box display={"flex"} alignItems={"center"}>
                  <img
                    src={props.flightLogo}
                    alt="flightLogo"
                    style={{ marginRight: "20px" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#571336",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {props.flightName}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    fontSize: "13px",
                    color: "#6a2e4d",
                    mt: 2,
                  }}
                >
                  Operated by {props.operatorName}
                </Typography>
              </Grid>
              <Grid item xs={5} display={"flex"} alignItems={"flex-start"}>
                <Box padding={"0 0.5em"}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#6a2e4d",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {formData.departDate.day},
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#6a2e4d",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {formData.departDate.month} {formData.departDate.date}
                  </Typography>
                </Box>
                <Box padding={"0 0.5em"}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#6a2e4d",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    {props.flightTime}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#6a2e4d",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    DAC
                  </Typography>
                </Box>
                <Box padding={"0 0.5em"}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#6a2e4d",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {props.journeyTime}h
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#6a2e4d",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {props.numberOfStops} Stops
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={3} textAlign={"center"}>
                <Typography
                  variant="h6"
                  sx={{ color: "#6a2e4d", fontWeight: "600", fontSize: "18px" }}
                >
                  US${props.flightCost}
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<FlightTakeoff />}
                  sx={{
                    width: "100%",
                    padding: "11px 50px",
                    background: "#ffa903",
                    color: "#2a2a2a",
                    fontWeight: "600",
                    "&:hover": {
                      background: "#2a2a2a",
                      color: "#fff",
                    },
                  }}
                >
                  Select
                </Button>
              </Grid>
            </Grid>
            <Divider />
            <Grid container mt={1} display={"flex"}>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  variant="text"
                  onClick={() => setDisplayFlightDetails(!displayFlightDetails)}
                  sx={{ color: "#6a2e4d", fontWeight: "500" }}
                  startIcon={
                    <ExpandMore
                      sx={{
                        transform: displayFlightDetails && "rotate(180deg)",
                        transition: "all linear 0.2s",
                      }}
                    />
                  }
                >
                  Flight Details
                </Button>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "13px", fontWeight: "500", color: "#6a2e4d" }}
                >
                  Price per person (incl. taxes & fees)
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          {displayFlightDetails && (
            <motion.div
              initial={{ height: "0" }}
              animate={{ height: "auto" }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <Divider sx={{ borderStyle: "dashed" }} />
              <CardContent sx={{ padding: "1em 3em 2em!important" }}>
                <Grid
                  container
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item xs={3}>
                    <Typography
                      variant="contained"
                      sx={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#ffffff",
                        background: "#ffa903",
                        borderRadius: "3px",
                        padding: "5px 13px",
                        display: "inlineBlock",
                      }}
                    >
                      {formData.departDate.day},{" "}
                      {/* {formData.departDate.month.slice(0, 3)}{" "} */}
                      {formData.departDate.date}
                    </Typography>
                    <Box sx={{ mt: 3, mb: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#571336",
                        }}
                      >
                        {formData.departDate.day}, {formData.departDate.month}{" "}
                        {formData.departDate.date} - {props.flightTime}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#571336",
                          opacity: 0.68,
                        }}
                      >
                        {props.journeyTime}h 15m
                      </Typography>
                    </Box>

                    {formData.tripType !== "One-way" && (
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#571336",
                        }}
                      >
                        {formData.returnDate.day}, {formData.returnDate.month}{" "}
                        {formData.returnDate.date} - 03:20
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={9} pl={2}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#571336",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Flight sx={{ mr: 2 }} /> {props.fromLocation}
                    </Typography>
                    <Grid
                      display={"flex"}
                      alignItems={"center"}
                      sx={{
                        position: "relative",
                        width: "100%",
                        "&::before": {
                          content: '" "',
                          position: "absolute",
                          width: "1px",
                          border: "1px dashed #ebebee",
                          background: "#571336",
                          height: "80%",
                          left: "10px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          background: "#ebebee",
                          margin: "0 1em 0 2.5em",
                          width: "100%",
                          padding: "0.5em 1em !important",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={props.flightLogo}
                          alt="flightLogo"
                          style={{ marginRight: "20px" }}
                        />

                        <Box>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "#6a2e4d",
                              opacity: 0.76,
                            }}
                          >
                            Tpm Line
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "#6a2e4d",
                              opacity: 0.76,
                            }}
                          >
                            Operated by Airlines {props.operatorName} (
                            {props.flightName})
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "#6a2e4d",
                              opacity: 0.76,
                            }}
                          >
                            Economy | Flight EK585 | Aircraft BOEING 777-300ER
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "#6a2e4d",
                              opacity: 0.76,
                            }}
                          >
                            Adult(s): 25KG luggage free
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#571336",
                        marginBottom: "10px",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <RadioButtonUnchecked sx={{ mr: 2 }} />
                      {props.toLocation}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </motion.div>
          )}
        </Card>
      );
    };

    return (
      <Box
        sx={{
          position: "absolute",
          marginTop: changeHeight ? 53 : 30.5,
          minHeight: "50vh",
          width: "100%",
          left: 0,
          right: 0,
          background: "#FBF9F2",
          // padding: "0 6em",
          paddingTop: "4em",
          display: formData.fromValue === "" ? "none" : "block",
          transition: "display ease-out 0.2s",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item md={3} sx={{ display: { sm: "none", md: "block" } }}>
              <FilterTab />
            </Grid>
            <Grid item xs={12} md={9} pb={10}>
              {flightsWithinPriceRange.length > 0 ? (
                flightsWithinPriceRange.map((flight, index) => (
                  <DisplayFlightData
                    key={index} // Make sure to provide a unique key for each element in the array
                    flightLogo={flight.flightDetails[0].flightLogo}
                    flightName={flight.flightDetails[0].flightName}
                    operatorName={flight.flightDetails[0].operatorName}
                    // flightDay={flight}
                    // flightDate={"Jun 16"}
                    journeyTime={flight.flightDetails[0].journeyTime}
                    flightTime={flight.flightDetails[0].flightTime}
                    numberOfStops={flight.flightDetails[0].numberOfStops}
                    flightCost={flight.flightDetails[0].flightCost}
                    fromLocation={
                      flight.airportCode + " - " + flight.airportName
                    }
                    toLocation={
                      airportsJson.find(
                        (airport) =>
                          airport.stateAirportName === formData.toValue
                      )
                        ? airportsJson.find(
                            (airport) =>
                              airport.stateAirportName === formData.toValue
                          ).airportCode +
                          " - " +
                          airportsJson.find(
                            (airport) =>
                              airport.stateAirportName === formData.toValue
                          ).stateAirportName
                        : ""
                    }
                  />
                ))
              ) : (
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <img
                    src={Image}
                    alt="No Data"
                    style={{
                      width: "300px",
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "45%",
                    }}
                  />
                  <Typography variant="h6">No Flights Available</Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };

  return (
    <Box>
      <Container
        sx={{
          transform: {
            xs: "translateY(-40px)",
            sm: "translateY(-48px)",
            md: "translateY(-18px)",
          },
          right: "0",
          left: "0",
          width: "100%",
          position: "absolute",
          zIndex: "0",
          minHeight: "100vh",
          marginTop: changeHeight ? "182px" : "0px",
        }}
      >
        <Card>
          <Grid container>
            <Grid item xs={12} sm={3} sx={bookingTabStyles.grid}>
              <AirplaneTicket sx={bookingTabStyles.icon} />
              <Typography variant="h6" sx={bookingTabStyles.tabName}>
                AIR BOOKING
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={bookingTabStyles.grid}>
              <ArticleOutlined sx={bookingTabStyles.icon} />
              <Typography variant="h6" sx={bookingTabStyles.tabName}>
                MY TRIPS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={bookingTabStyles.grid}>
              <TaskAlt sx={bookingTabStyles.icon} />
              <Typography variant="h6" sx={bookingTabStyles.tabName}>
                CHECK-IN
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={bookingTabStyles.grid}>
              <PendingActions sx={bookingTabStyles.icon} />
              <Typography variant="h6" sx={bookingTabStyles.tabName}>
                FLIGHT STATUS
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <BookingForm
          setFormData={setFormData}
          setFilteredAirports={setFilteredAirports}
          setFlightsWithinPriceRange={setFlightsWithinPriceRange}
        />
      </Container>
      <DisplayFlights />
    </Box>
  );
};
