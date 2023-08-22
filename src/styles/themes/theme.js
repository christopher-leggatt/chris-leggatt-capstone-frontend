import { createTheme } from "@mui/material/styles";

export const shades = {
  // Eucalyptus
  primary: {
    100: "#d3efdb",
    200: "#a7e0b8",
    300: "#7bd094",
    400: "#4fc171",
    500: "#23b14d",
    600: "#1c8e3e",
    700: "#156a2e",
    800: "#0e471f",
    900: "#07230f",
  },
  //Clay creek
  secondary: {
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
  // Pampas
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
  // Gulf stream
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
  //Outer space
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
};

export const breakpoints = {
  values: { mobile: 320, tablet: 768, desktop: 1280 },
};

const muiBreakpoints = createTheme({ breakpoints }).breakpoints;

export const theme = createTheme({
  breakpoints: breakpoints,
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
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 32,
      [muiBreakpoints.up("tablet")]: {
        fontSize: 33,
        lineHeight: 44,
      },
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: 12,
      lineHeight: 20,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 18,
      [muiBreakpoints.up("tablet")]: {
        fontSize: 14,
        lineHeight: 22,
      },
    },
    body1: {
      fontSize: 13,
      lineHeight: 18,
      [muiBreakpoints.up("tablet")]: {
        fontSize: 14,
        lineHeight: 22,
      },
    },
    button: {
      fontWeight: 700,
      fontSize: 10,
      lineHeight: 20,
      [muiBreakpoints.up("tablet")]: {
        fontSize: 12,
        lineHeight: 20,
      },
    },
  },
});
