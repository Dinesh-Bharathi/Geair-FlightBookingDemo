import React from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  List,
  ListItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import {
  AttachMoney,
  Flight,
  Public,
  QuestionAnswer,
  Search,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import TopLogo from "../../assets/images/Top-logo.png";
import theme from "../../assets/styles/theme";

const useStyles = {
  listItem: {
    position: "relative",
    padding: 0,
    color: "#CECECE",
    display: "flex",
    justifyContent: "center",
    "&:not(:first-of-type)::before": {
      content: '""',
      position: "absolute",
      left: 0,
      height: "100%",
      width: "1px",
      border: "1px dashed #CECECE",
    },
  },
  link: {
    textDecoration: "none",
    color: "#CECECE",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#BEBEBE",
    },
  },
};

const StyledButton = styled(Button)({
  backgroundColor: "#82B440",
  padding: "5px 20px !important",
  color: "#fff",
  border: "none",
  fontSize: "14px",
  borderRadius: "4px",
  textDecoration: "none",
  fontWeight: "500",
  margin: "0 0.5em",
  "&:hover": { backgroundColor: "#6f9a36", transition: "0.5s" },
});

export const Topbar = () => {
  return (
    <Box sx={{ position: "sticky", top: 0, left: 0, zIndex: 1 }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "#262626",
            borderBottom: "1px solid #000",
            width: "100%",
            padding: "0.5em 1em",
          }}
        >
          <Grid item xs={6}>
            <Link>
              <img
                src={TopLogo}
                alt="evanto-logo"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <StyledButton variant="contained" size="small">
              Buy now
            </StyledButton>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            p: "2px 15px",
            backgroundColor: "#232b38",
          }}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Flight
              sx={{
                transform: "rotate(90deg)",
                mr: 1,
                color: "#ffa903",
              }}
            />
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "#CECECE" }}
            >
              COVID-19 update & travel requirements
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <List
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ListItem sx={useStyles.listItem}>
                <Link sx={useStyles.link}>
                  <Typography variant="subtitle2" component="p">
                    Corporate Club
                  </Typography>
                </Link>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <Link sx={useStyles.link}>
                  <Typography variant="subtitle2" component="p">
                    Miles&Smiles
                  </Typography>
                </Link>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <Link sx={useStyles.link}>
                  <QuestionAnswer sx={{ fontSize: "15px", mr: 0.5 }} />
                  <Typography variant="subtitle2" component="p">
                    Feedback
                  </Typography>
                </Link>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <Link sx={useStyles.link}>
                  <Search sx={{ fontSize: "15px", mr: 0.5 }} />
                  <Typography variant="subtitle2" component="p">
                    Search
                  </Typography>
                </Link>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <Link sx={useStyles.link}>
                  <AttachMoney sx={{ fontSize: "15px", mr: 0.5 }} />
                  <Typography variant="subtitle2" component="p">
                    Currency
                  </Typography>
                </Link>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <Link sx={useStyles.link}>
                  <Public sx={{ fontSize: "15px", mr: 0.5 }} />
                  <Typography variant="subtitle2" component="p">
                    EN - INT
                  </Typography>
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};
