import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const shades = {
  // Capstone green
  primary: {
    100: "#ccd4ce",
    200: "#99aa9d",
    300: "#677f6c",
    400: "#34553b",
    500: "#012a0a",
    600: "#012208",
    700: "#011906",
    800: "#001104",
    900: "#000802",
  },
  // Capstone orange
  secondary: {
    100: "#fdedd3",
    200: "#fbdba7",
    300: "#f9ca7b",
    400: "#f7b84f",
    500: "#f5a623",
    600: "#c4851c",
    700: "#936415",
    800: "#62420e",
    900: "#312107",
  },
  //Capstone tan
  neutral: {
    100: "#e7e8dd",
    200: "#d0d1ba",
    300: "#b8bb98",
    400: "#a1a475",
    500: "#898d53",
    600: "#6e7142",
    700: "#525532",
    800: "#373821",
    900: "#1b1c11",
  },
  // Capstone white
  light: {
    100: "#fcfbfb",
    200: "#f9f8f7",
    300: "#f6f4f2",
    400: "#f3f1ee",
    500: "#f0edea",
    600: "#c0bebb",
    700: "#908e8c",
    800: "#605f5e",
    900: "#302f2f",
  },
  // Capstone blue
  info: {
    100: "#e5f0f0",
    200: "#cce0e0",
    300: "#b2d1d1",
    400: "#99c1c1",
    500: "#7fb2b2",
    600: "#668e8e",
    700: "#4c6b6b",
    800: "#334747",
    900: "#192424",
  },
  //Capstone black
  dark: {
    100: "#d2d4d4",
    200: "#a6a9a9",
    300: "#797f7d",
    400: "#4d5452",
    500: "#202927",
    600: "#1a211f",
    700: "#131917",
    800: "#0d1010",
    900: "#060808",
  },
  // Capstone red
  error: {
    100: "#fdd9d7",
    200: "#fbb4af",
    300: "#f88e86",
    400: "#f6695e",
    500: "#f44336",
    600: "#c3362b",
    700: "#922820",
    800: "#621b16",
    900: "#310d0b",
  },

  success: {
    100: "#cfe8cf",
    200: "#9fd19f",
    300: "#70ba70",
    400: "#40a340",
    500: "#108c10",
    600: "#0d700d",
    700: "#0a540a",
    800: "#063806",
    900: "#031c03",
  },
};

// export const breakpoints = {
//   values: { mobile: 320, md: 768, desktop: 1280 },
// };

// const breakpoints = createTheme({ breakpoints }).breakpoints;

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
      main: shades.primary[500],
      light: shades.primary[200],
      dark: shades.primary[800],
      contrastText: "#fff",
    },
    secondary: {
      main: shades.secondary[500],
      light: shades.secondary[200],
      dark: shades.secondary[800],
      contrastText: "#fff",
    },
    neutral: {
      main: shades.neutral[500],
      light: shades.neutral[200],
      dark: shades.neutral[800],
      contrastText: "#fff",
    },
    light: {
      main: shades.light[500],
      light: shades.light[200],
      dark: shades.light[800],
      contrastText: shades.dark[500],
    },
    dark: {
      main: shades.dark[500],
      light: shades.dark[200],
      dark: shades.dark[800],
      contrastText: "#fff",
    },
    info: {
      main: shades.info[500],
      light: shades.info[200],
      dark: shades.info[800],
      contrastText: "#fff",
    },
    error: {
      main: shades.error[500],
      light: shades.error[200],
      dark: shades.error[800],
      contrastText: "#fff",
    },
    success: {
      main: shades.success[500],
      light: shades.success[200],
      dark: shades.success[800],
      contrastText: "#fff",
    },
    divider: shades.dark[200],
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontWeight: 700,
      fontSize: "33px",
      lineHeight: 1.333,
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: 1.666,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: 1.571,
    },
    body1: {
      fontSize: "14px",
      lineHeight: 1.571,
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
