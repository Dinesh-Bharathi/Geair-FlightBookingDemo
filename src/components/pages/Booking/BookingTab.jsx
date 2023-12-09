import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import {
  AirplaneTicket,
  ArticleOutlined,
  Brightness4Outlined,
  ConnectingAirports,
  FlightTakeoff,
  ImportExport,
  NightsStayOutlined,
  PendingActions,
  TaskAlt,
  WbSunnyOutlined,
  WbTwilight,
} from "@mui/icons-material";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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

const BookingForm = () => {
  const [departureOptions, setDepartureOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  useEffect(() => {
    const fetchAirportData = async () => {
      try {
        const response = await axios.get(
          "https://6530cc406c756603295f0e02.mockapi.io/Geair"
        );
        setDepartureOptions(response.data);
        setDestinationOptions(response.data);
      } catch (error) {
        console.error("Error fetching airport data:", error);
      }
    };

    fetchAirportData();
  }, []);

  const handleIconClick = () => {
    // Swap the "From" and "To" values
    setFromValue(toValue);
    setToValue(fromValue);
  };

  return (
    <Box>
      <Grid
        container
        sx={{ background: "#F8F3E7", borderRadius: "4px", padding: "0.5em 0" }}
      >
        <Grid item md={4} display={"flex"} position={"relative"}>
          <Autocomplete
            key="from-autocomplete"
            options={departureOptions}
            disableClearable
            value={fromValue}
            onChange={(event, newValue) => setFromValue(newValue)}
            getOptionLabel={(option) => option.name || ""}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                sx={{ pr: 2, background: "none" }}
              />
            )}
          />
          <Autocomplete
            key="to-autocomplete"
            options={destinationOptions}
            disableClearable
            value={toValue}
            onChange={(event, newValue) => setToValue(newValue)}
            getOptionLabel={(option) => option.name || ""}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="To" sx={{ background: "none" }} />
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
            <InputLabel id="demo-simple-select-label">Trip</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Trip"
              fullWidth
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
              value={departDate}
              onChange={(newValue) => setDepartDate(newValue)}
              renderInput={(params) => (
                <TextField {...params} helperText="" format="dd/MM/yyyy" />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Return Date"
              value={returnDate}
              onChange={(newValue) => setReturnDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  helperText=""
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

const DisplayFlights = () => {
  const [changeHeight, setChangeHeight] = useState(false);
  const [sliderValue, setSliderValue] = React.useState([1000, 4500]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
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
            min={300}
            max={5500}
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
                style={{ width: "100px", color: "#571336", fontWeight: "600" }}
              >
                ${sliderValue[0]} - ${sliderValue[1]}
              </span>
            </Typography>
            <Button
              sx={{
                transition: "all .3s ease-out 0s",
                cursor: "pointer",
                minWidth: "68px",
                padding: "9px 12px",
                color: "#571336",
                fontSize: "13px",
                background: "#fbf9f2",
                fontWeight: "600",
                border: "1px solid #ebebeb",
              }}
            >
              Filter
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
              value={"Direct"}
            >
              <MenuItem value={10}>Direct</MenuItem>
              <MenuItem value={20}>One stop</MenuItem>
              <MenuItem value={30}>Two stop</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: "absolute",
        marginTop: changeHeight ? 53 : 30.5,
        minHeight: "100vh",
        width: "100%",
        left: 0,
        right: 0,
        background: "#FBF9F2",
        // padding: "0 6em",
        paddingTop: "4em",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <FilterTab />
          </Grid>
          <Grid item md={8}>
            2
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const BookingTab = () => {
  const [changeHeight, setChangeHeight] = useState(false);

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
          <Grid container p={1}>
            <FormControl component="fieldset">
              <RadioGroup row>
                <FormControlLabel
                  value="Roundtrip"
                  control={<Radio sx={bookingTabStyles.radio} />}
                  label={
                    <span style={bookingTabStyles.radioLable}>Roundtrip</span>
                  }
                />
                <FormControlLabel
                  value="One-way"
                  control={<Radio sx={bookingTabStyles.radio} />}
                  label={
                    <span style={bookingTabStyles.radioLable}>One-way</span>
                  }
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
          <BookingForm />
        </Card>
      </Container>
      <DisplayFlights />
    </Box>
  );
};
