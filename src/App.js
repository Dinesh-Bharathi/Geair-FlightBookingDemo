import "./App.css";
import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LoaderGif from "./assets/images/Double Ring-1s-200px.svg";
import BackToTop from "./components/common/BackToTop";

const Home = lazy(() => import("./components/pages/Home/Home"));
const BookingList = lazy(() =>
  import("./components/pages/Booking/BookingList")
);
const NoPage = lazy(() => import("./components/common/NoPage"));

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={LoaderGif} alt="loader" />
    </Box>
  );
};  

function App() {
  return (
    <Box>
      <BackToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/bookinglist"
          element={
            <Suspense fallback={<Loader />}>
              <BookingList />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<Loader />}>
              <NoPage />
            </Suspense>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
