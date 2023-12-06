import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       background: "transparent",
    //       boxShadow: "none",
    //     },
    //   },
    // },
  },
});

export default theme;
