import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Help, HelpOutline, Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import theme from "../../assets/styles/theme";
import { Topbar } from "./Topbar";

const useStyles = {
  navbar: {
    background: "#transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
  },
  logo: {
    marginRight: "auto",
  },
  list: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
  },
  listItem: {
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    display: "inline",
    alignItems: "center",
    padding: 0,
    fontWeight: "600",
    "&:hover": {
      color: "#FFA903",
    },
  },
  currency: {
    display: "flex",
    alignItems: "center",
  },
  registerButton: {
    color: "#2a2a2a",
    fontSize: "16px",
    padding: "8px 16px",
    background: "#fff",
    borderRadius: "2px",
    textTransform: "capitalize",
    fontWeight: "600",
    "&:hover": {
      background: "#FFA903",
    },
  },
  signInButton: {
    color: "#2a2a2a",
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "2px",
    textTransform: "capitalize",
    fontWeight: "600",
    marginLeft: "0.5em",
    backgroundColor: "#FFA903",
    "&:hover": {
      background: "#FFF",
    },
  },
  icon: {
    fontSize: "30px",
    transition: "color 2s ease",
  },
  menuItem: {
    padding: "0.5em",
    width: "200px",
  },
  drawer: {
    width: "250px",
  },
};

const Appbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pageAnchorEl, setPageAnchorEl] = useState(null);
  const [blogAnchorEl, setBlogAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pageMenuOpen = Boolean(pageAnchorEl);
  const blogMenuOpen = Boolean(blogAnchorEl);

  const handlePageMouseOver = (event) => {
    setBlogAnchorEl(null);
    setPageAnchorEl(event.currentTarget);
  };

  const handlePageMenuClose = () => {
    setPageAnchorEl(null);
  };

  const handleBlogMouseOver = (event) => {
    setPageAnchorEl(null);
    setBlogAnchorEl(event.currentTarget);
  };

  const handleBlogMenuClose = () => {
    setBlogAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <Grid container sx={useStyles.navbar}>
          <Grid item xs={5} sm={3} sx={useStyles.logo}>
            <NavLink to="/" sx={useStyles.link}>
              <img src={Logo} alt="Geair-logo" />
            </NavLink>
          </Grid>
          <Grid item xs={7} sm={9}>
            <List
              sx={{
                ...useStyles.list,
                justifyContent: { xs: "center", sm: "flex-end" },
              }}
            >
              <List sx={useStyles.list}>
                <ListItem sx={useStyles.listItem}>
                  <NavLink to="/" style={useStyles.link}>
                    Home
                  </NavLink>
                </ListItem>
                <ListItem sx={useStyles.listItem}>
                  <NavLink to="about" style={useStyles.link}>
                    About
                  </NavLink>
                </ListItem>
                <ListItem sx={useStyles.listItem}>
                  <NavLink
                    to="pages"
                    style={useStyles.link}
                    onMouseOver={handlePageMouseOver}
                  >
                    Pages
                  </NavLink>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={pageAnchorEl}
                    open={pageMenuOpen}
                    onClose={handlePageMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <MenuItem
                      onClick={handlePageMenuClose}
                      sx={useStyles.menuItem}
                    >
                      <NavLink
                        to="bookinglist"
                        style={{
                          ...useStyles.link,
                          color: "#000",
                          fontWeight: "500",
                        }}
                      >
                        Booking List
                      </NavLink>
                    </MenuItem>
                    <MenuItem
                      onClick={handlePageMenuClose}
                      sx={useStyles.menuItem}
                    >
                      <NavLink
                        to="bookingdetails"
                        style={{
                          ...useStyles.link,
                          color: "#000",
                          fontWeight: "500",
                        }}
                      >
                        Booking Details
                      </NavLink>
                    </MenuItem>
                  </Menu>
                </ListItem>
                <ListItem sx={useStyles.listItem}>
                  <NavLink
                    to="blog"
                    style={useStyles.link}
                    onMouseOver={handleBlogMouseOver}
                  >
                    Blog
                  </NavLink>
                  <Menu
                    id="blog-menu"
                    anchorEl={blogAnchorEl}
                    open={blogMenuOpen}
                    onClose={handleBlogMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <MenuItem
                      onClick={handleBlogMenuClose}
                      sx={useStyles.menuItem}
                    >
                      <NavLink
                        to="ourblog"
                        style={{
                          ...useStyles.link,
                          color: "#000",
                          fontWeight: "500",
                        }}
                      >
                        Our Blog
                      </NavLink>
                    </MenuItem>
                    <MenuItem
                      onClick={handleBlogMenuClose}
                      sx={useStyles.menuItem}
                    >
                      <NavLink
                        to="blogdetails"
                        style={{
                          ...useStyles.link,
                          color: "#000",
                          fontWeight: "500",
                        }}
                      >
                        Blog Details
                      </NavLink>
                    </MenuItem>
                  </Menu>
                </ListItem>

                <ListItem sx={useStyles.listItem}>
                  <NavLink to="contact" style={useStyles.link}>
                    Contact
                  </NavLink>
                </ListItem>
                <ListItem sx={useStyles.listItem}>
                  <NavLink to="#" style={useStyles.link}>
                    <div style={useStyles.currency}>
                      <Typography variant="subtitle2" component="p">
                        USD
                      </Typography>
                      <Avatar
                        src="https://themehut.co/html/geair/assets/img/icon/united-states.png"
                        sx={{ width: "25px", height: "25px", ml: "0.5em" }}
                      />
                    </div>
                  </NavLink>
                </ListItem>
                <ListItem
                  sx={useStyles.listItem}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <NavLink
                    to="#"
                    style={{
                      ...useStyles.link,
                      display: "flex",
                    }}
                  >
                    {isHovered ? (
                      <Help sx={useStyles.icon} />
                    ) : (
                      <HelpOutline sx={useStyles.icon} />
                    )}
                  </NavLink>
                </ListItem>
                <ListItem sx={useStyles.listItem}>
                  <NavLink to="#" style={useStyles.link}>
                    <Button variant="contained" sx={useStyles.registerButton}>
                      Register
                    </Button>
                  </NavLink>
                </ListItem>
                <ListItem sx={useStyles.listItem}>
                  <NavLink to="#" style={useStyles.link}>
                    <Button variant="contained" sx={useStyles.signInButton}>
                      Sign in
                    </Button>
                  </NavLink>
                </ListItem>
              </List>
            </List>
          </Grid>
        </Grid>

        {/* Responsive Drawer for Small Devices */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          sx={useStyles.drawer}
        >
          <List>
            <List sx={useStyles.list}>
              <ListItem sx={useStyles.listItem}>
                <NavLink to="/" style={useStyles.link}>
                  Home
                </NavLink>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <NavLink to="about" style={useStyles.link}>
                  About
                </NavLink>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <NavLink
                  to="pages"
                  style={useStyles.link}
                  onMouseOver={handlePageMouseOver}
                >
                  Pages
                </NavLink>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={pageAnchorEl}
                  open={pageMenuOpen}
                  onClose={handlePageMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem
                    onClick={handlePageMenuClose}
                    sx={useStyles.menuItem}
                  >
                    <NavLink
                      to="bookinglist"
                      style={{
                        ...useStyles.link,
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      Booking List
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    onClick={handlePageMenuClose}
                    sx={useStyles.menuItem}
                  >
                    <NavLink
                      to="bookingdetails"
                      style={{
                        ...useStyles.link,
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      Booking Details
                    </NavLink>
                  </MenuItem>
                </Menu>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <NavLink
                  to="blog"
                  style={useStyles.link}
                  onMouseOver={handleBlogMouseOver}
                >
                  Blog
                </NavLink>
                <Menu
                  id="blog-menu"
                  anchorEl={blogAnchorEl}
                  open={blogMenuOpen}
                  onClose={handleBlogMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem
                    onClick={handleBlogMenuClose}
                    sx={useStyles.menuItem}
                  >
                    <NavLink
                      to="ourblog"
                      style={{
                        ...useStyles.link,
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      Our Blog
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    onClick={handleBlogMenuClose}
                    sx={useStyles.menuItem}
                  >
                    <NavLink
                      to="blogdetails"
                      style={{
                        ...useStyles.link,
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      Blog Details
                    </NavLink>
                  </MenuItem>
                </Menu>
              </ListItem>

              <ListItem sx={useStyles.listItem}>
                <NavLink to="contact" style={useStyles.link}>
                  Contact
                </NavLink>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <NavLink to="#" style={useStyles.link}>
                  <div style={useStyles.currency}>
                    <Typography variant="subtitle2" component="p">
                      USD
                    </Typography>
                    <Avatar
                      src="https://themehut.co/html/geair/assets/img/icon/united-states.png"
                      sx={{ width: "25px", height: "25px", ml: "0.5em" }}
                    />
                  </div>
                </NavLink>
              </ListItem>
              <ListItem
                sx={useStyles.listItem}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <NavLink
                  to="#"
                  style={{
                    ...useStyles.link,
                    display: "flex",
                  }}
                >
                  {isHovered ? (
                    <Help sx={useStyles.icon} />
                  ) : (
                    <HelpOutline sx={useStyles.icon} />
                  )}
                </NavLink>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <NavLink to="#" style={useStyles.link}>
                  <Button variant="contained" sx={useStyles.registerButton}>
                    Register
                  </Button>
                </NavLink>
              </ListItem>
              <ListItem sx={useStyles.listItem}>
                <NavLink to="#" style={useStyles.link}>
                  <Button variant="contained" sx={useStyles.signInButton}>
                    Sign in
                  </Button>
                </NavLink>
              </ListItem>
            </List>
          </List>
        </Drawer>
      </ThemeProvider>
    </Box>
  );
};

export default Appbar;
