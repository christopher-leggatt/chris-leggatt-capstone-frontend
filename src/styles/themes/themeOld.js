import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#2E7D32",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9E9E9E",
      light: "#CFCFCF",
      dark: "#707070",
      contrastText: "#fff",
    },
    neutral: {
      main: "#8D6E63",
      light: "#BAA19C",
      dark: "#614744",
      contrastText: "#fff",
    },
    light: {
      main: "#FAFAFA",
      light: "#FFFFFF",
      dark: "#C7C7C7",
      contrastText: "#5D4037",
    },
    dark: {
      main: "#5D4037",
      light: "#8A6655",
      dark: "#32251C",
      contrastText: "#fff",
    },
    info: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#2E7D32",
      contrastText: "#fff",
    },
    error: {
      main: "#D32F2F",
      light: "#E57373",
      dark: "#C62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#FFA000",
      light: "#FFCC80",
      dark: "#E65100",
      contrastText: "#fff",
    },
    success: {
      main: "#388E3C",
      light: "#66BB6A",
      dark: "#2E7D32",
      contrastText: "#fff",
    },
    divider: "#8A6655",
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: "#4CAF50",
        "&:hover": {
          backgroundColor: "#388E3C",
        },
      },
      containedSecondary: {
        backgroundColor: "#9E9E9E",
        "&:hover": {
          backgroundColor: "#707070",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Inter Variable", "sans-serif"].join(","),
    fontSize: 13,
    pageHeader: {
      fontFamily: "Newsreader Variable",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: 1.1875,
    },
    sectionHeader: {
      fontFamily: "Newsreader Variable",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: 1.1667,
    },
    subHeaderMedium: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: 1.2,
    },
    subHeaderSmall: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
    },
    subHeaderExtraSmall: {
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: 1.4,
    },
    bodyCopyRegular: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.2857,
    },
    bodyCopyAlt: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: 1.3333,
    },
    footerCopy: {
      fontWeight: 300,
      fontSize: "10px",
      lineHeight: 1.4,
    },
    button: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: 1.666,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
