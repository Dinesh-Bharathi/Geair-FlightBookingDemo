import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <Link to="/">
      <Button>
        <Home fontSize="1rem" /> Back to Home <Home fontSize="1rem" />
      </Button>
    </Link>
  );
};

export default NoPage;
