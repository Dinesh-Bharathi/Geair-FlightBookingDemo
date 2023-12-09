import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  ListItem,
  List,
  Drawer,
  Divider,
  Collapse,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import { Close, ExpandMore, Help, HelpOutline } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/logo.png";
import LogoTwo from "../../assets/images/logo_02.png";
import { Link } from "react-router-dom";

import { Topbar } from "./Topbar";

const useStyles = {
  menuIcon: {
    color: "#fff",
    fontSize: "2rem",
  },
  listItem: {
    "&:hover": {
      borderBottom: "2px solid #ffa903 !important",
      paddingBottom: "0.8em",
      color: "#ffa903",
      transition: "padding 0.5s",
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
  },
  menuLink: {
    textDecoration: "none",
    padding: "0 10px",
    lineHeight: "40px",
    fontWeight: 600,
    color: "#1f252e",
    textTransform: "capitalize",
  },
  registerBtn: {
    color: "#2a2a2a",
    fontSize: "16px",
    padding: "8px 16px",
    background: "#fff",
    textTransform: "capitalize",
    letterSpacing: 0,
    borderRadius: "2px",
    fontWeight: 600,
    marginLeft: "1em",
    cursor: "pointer",
    display: { xs: "none", md: "block" },
    "&:hover": {
      background: "#ffa903 !important",
    },
  },
  signinBtn: {
    color: "#2a2a2a",
    fontSize: "16px",
    padding: "8px 16px",
    background: "#ffa903",
    textTransform: "capitalize",
    letterSpacing: 0,
    borderRadius: "2px",
    fontWeight: 600,
    marginLeft: "0.5em",
    cursor: "pointer",
    display: { xs: "none", md: "block" },
    ":hover": {
      background: "#fff !important",
    },
  },
  drawerLink: {
    textDecoration: "none",
    padding: "10px 25px",
    fontSize: "15px",
    fontWeight: 500,
    color: "#1f252e",
    textTransform: "capitalize",
  },
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pagesAnchorEl, setPagesAnchorEl] = useState(null);
  const [blogAnchorEl, setBlogAnchorEl] = useState(null);
  const [pageCollapse, setPageCollapse] = useState(false);
  const [blogCollapse, setBlogCollapse] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [helpicon, setHelpIcon] = useState(true);
  const pagesMenuOpen = Boolean(pagesAnchorEl);
  const blogMenuOpen = Boolean(blogAnchorEl);

  const handlePagesMenuOpen = (event) => {
    setPagesAnchorEl(event.currentTarget);
  };
  const handleBlogMenuOpen = (event) => {
    setBlogAnchorEl(event.currentTarget);
  };
  const handlePagesMenuClose = () => {
    setPagesAnchorEl(null);
  };
  const handleBlogMenuClose = () => {
    setBlogAnchorEl(null);
  };

  const handleMenuClick = () => {
    setDrawerOpen(!drawerOpen);
    setPageCollapse(false);
    setBlogCollapse(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setShowBackToTop(scrollHeight > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: showBackToTop ? "fixed" : "static",
        width: "100%",
        top: "0",
        zIndex: "1",
        // transition: "position 0.5s ease-in 0.5s",
      }}
    >
      <Topbar bottombar={showBackToTop} />
      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: "none",
          background: showBackToTop && "#232b38",
          transition: "background 0.2s ease-in 0.2s",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: { xs: "0.5em 1em", sm: "1em 1em" },
          }}
        >
          <Link to={"/"}>
            <img src={Logo} alt="geair-logo" />
          </Link>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ListItem sx={useStyles.listItem}>
                  <Link
                    to="/"
                    style={{
                      ...useStyles.link,
                      "&:hover": { color: "#ffa903" },
                    }}
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem sx={useStyles.listItem}>
                  <Link
                    to="about"
                    style={{
                      ...useStyles.link,
                      "&:hover": { color: "#ffa903" },
                    }}
                  >
                    About
                  </Link>
                </ListItem>
                <ListItem
                  sx={useStyles.listItem}
                  onMouseEnter={handlePagesMenuOpen}
                >
                  <Link
                    style={{
                      ...useStyles.link,
                      "&:hover": { color: "#ffa903" },
                    }}
                  >
                    Pages
                  </Link>
                  <Menu
                    id="pagesMenu"
                    anchorEl={pagesAnchorEl}
                    keepMounted
                    open={pagesMenuOpen}
                    onClose={handlePagesMenuClose}
                  >
                    <List>
                      <ListItem>
                        <Link to="bookinglist" style={useStyles.menuLink}>
                          Booking List
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="bookingdetails" style={useStyles.menuLink}>
                          Booking Details
                        </Link>
                      </ListItem>
                    </List>
                  </Menu>
                </ListItem>
                <ListItem
                  sx={useStyles.listItem}
                  onMouseEnter={handleBlogMenuOpen}
                >
                  <Link
                    style={{
                      ...useStyles.link,
                      "&:hover": { color: "#ffa903" },
                    }}
                  >
                    Blog
                  </Link>
                  <Menu
                    id="blogMenu"
                    anchorEl={blogAnchorEl}
                    keepMounted
                    open={blogMenuOpen}
                    onClose={handleBlogMenuClose}
                  >
                    <List>
                      <ListItem>
                        <Link to="ourblog" style={useStyles.menuLink}>
                          Our Blog
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="blogdetails" style={useStyles.menuLink}>
                          Blog Details
                        </Link>
                      </ListItem>
                    </List>
                  </Menu>
                </ListItem>
                <ListItem sx={useStyles.listItem}>
                  <Link
                    to="contact"
                    style={{
                      ...useStyles.link,
                      "&:hover": { color: "#ffa903" },
                    }}
                  >
                    Contact
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box ml={1} sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography variant="button" color="#fff" fontWeight={600}>
                USD
              </Typography>
              <IconButton>
                <Avatar
                  src="https://themehut.co/html/geair/assets/img/icon/united-states.png"
                  sx={{ height: "25px", width: "25px" }}
                />
              </IconButton>
              <IconButton
                sx={{ m: "0 0.5em" }}
                onMouseEnter={() => setHelpIcon(false)}
                onMouseLeave={() => setHelpIcon(true)}
              >
                {helpicon ? (
                  <HelpOutline sx={useStyles.menuIcon} />
                ) : (
                  <Help sx={useStyles.menuIcon} />
                )}
              </IconButton>
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { sm: "block", md: "none" }, mt: 1 }}
              onClick={handleMenuClick}
            >
              <MenuIcon sx={useStyles.menuIcon} />
            </IconButton>
            <Button sx={useStyles.registerBtn}>Register</Button>
            <Button sx={useStyles.signinBtn}>Sign in</Button>
          </Box>
        </Toolbar>

        {/* Drawer */}

        <Drawer
          variant="temporary"
          anchor="right"
          open={drawerOpen}
          onClose={handleMenuClick}
        >
          <Box sx={{ padding: "30px 25px", position: "relative" }}>
            <img src={LogoTwo} alt="geair-logo" />
            <IconButton
              sx={{
                position: "absolute",
                top: "20px",
                right: "8px",
                transform: drawerOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all 1s ease",
              }}
              onClick={handleMenuClick}
            >
              <Close sx={{ color: "#312620" }} />
            </IconButton>
          </Box>
          <Divider />
          <List sx={{ width: "300px" }}>
            <Link to="/" style={useStyles.link} onClick={handleMenuClick}>
              <ListItem sx={useStyles.drawerLink}>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link to="about" style={useStyles.link} onClick={handleMenuClick}>
              <ListItem sx={useStyles.drawerLink}>
                <ListItemText>About</ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <ListItem
              sx={useStyles.drawerLink}
              onClick={() => setPageCollapse(!pageCollapse)}
            >
              <ListItemText>Page</ListItemText>
              <IconButton>
                <ExpandMore
                  sx={{
                    transform: pageCollapse ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                  }}
                />
              </IconButton>
            </ListItem>
            <Divider />
            <Collapse in={pageCollapse} timeout="auto" unmountOnExit>
              <Link
                to="bookinglist"
                style={useStyles.link}
                onClick={handleMenuClick}
              >
                <ListItem sx={useStyles.drawerLink}>
                  <ListItemText sx={{ padding: "0 1em" }}>
                    Booking List
                  </ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <Link
                to="bookingdetail"
                style={useStyles.link}
                onClick={handleMenuClick}
              >
                <ListItem sx={useStyles.drawerLink}>
                  <ListItemText sx={{ padding: "0 1em" }}>
                    Booking Detail
                  </ListItemText>
                </ListItem>
              </Link>
              <Divider />
            </Collapse>
            <ListItem
              sx={useStyles.drawerLink}
              onClick={() => setBlogCollapse(!blogCollapse)}
            >
              <ListItemText>Blog</ListItemText>
              <IconButton>
                <ExpandMore
                  sx={{
                    transform: blogCollapse ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                  }}
                />
              </IconButton>
            </ListItem>
            <Divider />
            <Collapse in={blogCollapse} timeout="auto" unmountOnExit>
              <Link
                to="ourblog"
                style={useStyles.link}
                onClick={handleMenuClick}
              >
                <ListItem sx={useStyles.drawerLink}>
                  <ListItemText sx={{ padding: "0 1em" }}>
                    Our Blog
                  </ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <Link
                to="blogdetail"
                style={useStyles.link}
                onClick={handleMenuClick}
              >
                <ListItem sx={useStyles.drawerLink}>
                  <ListItemText sx={{ padding: "0 1em" }}>
                    Blog Details
                  </ListItemText>
                </ListItem>
              </Link>
              <Divider />
            </Collapse>
            <Link to="contact" style={useStyles.link} onClick={handleMenuClick}>
              <ListItem sx={useStyles.drawerLink}>
                <ListItemText>Contact</ListItemText>
              </ListItem>
            </Link>
            <Divider />
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Navbar;
