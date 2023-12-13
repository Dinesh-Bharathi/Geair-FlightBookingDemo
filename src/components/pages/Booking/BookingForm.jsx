import React from "react";
import {
  Grid,
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
} from "@mui/material";
import { FlightTakeoff, ImportExport } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
import * as Yup from "yup";
import { airportsJson } from "./airports";
import { bookingTabStyles } from "./BookingTab";

export const BookingForm = () => {
  const today = new Date();

  const validationSchema = Yup.object({
    tripType: Yup.string().required("Trip type is required"),
    fromValue: Yup.string().required("From location is required"),
    toValue: Yup.string().required("To location is required"),
    tourType: Yup.string().required("Tour type is required"),
    departDate: Yup.date().required("Departure date is required"),
    returnDate: Yup.date()
      .required("Return date is required")
      .min(Yup.ref("departDate"), "Return date must be after departure date"),
  });

  const formik = useFormik({
    initialValues: {
      tripType: "RoundTrip",
      fromValue: "",
      toValue: "",
      tourType: "",
      departDate: null,
      returnDate: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Your form submission logic goes here
      //   formData = { fromLocation: formik.values.fromValue,
      //   toLocation: formik.values.toValue,
      //  };
      console.log(formik.values);
      // console.log("Form values", formik.values);
      // console.log("Error", formik.errors);
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
        sx={{ background: "#F8F3E7", borderRadius: "4px", padding: "0.5em 0" }}
      >
        <Grid item xs={12} md={4} display={"flex"} position={"relative"}>
          <Autocomplete
            id="fromAutoComplete"
            options={airportsJson.map((airport) => airport.stateAirportName)}
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
              />
            )}
          />
          <Autocomplete
            id="toAutoComplete"
            options={airportsJson.map((airport) => airport.stateAirportName)}
            disableClearable
            value={formik.values.toValue}
            onChange={(event, newValue) =>
              formik.setFieldValue("toValue", newValue)
            }
            getOptionLabel={(option) => option || ""}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="To" fullWidth />
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
              value={formik.values.departDate}
              minDate={today}
              onChange={(newValue) => {
                formik.setFieldValue("departDate", [
                  {
                    fullDate: newValue,
                    date: newValue.getDate(),
                    day: newValue.toLocaleDateString("en-US", {
                      weekday: "long",
                    }),
                  },
                ]);
                console.log(formik.values.departDate);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText="" format="dd/MM/yyyy" />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Return Date"
              value={formik.values}
              minDate={formik.values.departDate}
              onChange={(newValue) =>
                formik.setFieldValue("returnDate", newValue)
              }
              renderInput={(params) => (
                <TextField {...params} helperText="" format="dd/MM/yyyy" />
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
            disabled={!formik.isValid}
            type="submit"
            variant="contained"
            // disabled={!formik.isValid}
            onSubmit={formik.handleSubmit}
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
