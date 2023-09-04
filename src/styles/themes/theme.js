import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const shades = {
  // Capstone green
  primary: {
    200: "#99aa9d",
    500: "#012a0a",
    800: "#001104",
  },
  // Capstone orange
  secondary: {
    200: "#fbdba7",
    500: "#f5a623",
    800: "#62420e",
  },
  //Capstone tan
  neutral: {
    200: "#d0d1ba",
    500: "#898d53",
    800: "#373821",
  },
  // Capstone white
  light: {
    200: "#f9f8f7",
    500: "#f0edea",
    800: "#605f5e",
  },
  // Capstone blue
  info: {
    200: "#cce0e0",
    500: "#7fb2b2",
    800: "#334747",
  },
  //Capstone black
  dark: {
    200: "#a6a9a9",
    500: "#202927",
    800: "#0d1010",
  },
  // Capstone red
  error: {
    200: "#fbb4af",
    500: "#f44336",
    800: "#621b16",
  },

  warning: {
    200: "#e5d9a2",
    500: "#bda017",
    800: "#4c4009",
  },

  success: {
    200: "#9fd19f",
    500: "#108c10",
    800: "#063806",
  },
};

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
    warning: {
      main: shades.warning[500],
      light: shades.warning[200],
      dark: shades.warning[800],
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
    fontSize: 13,
    pageHeader: {
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: 1.1875, 
    },
    sectionHeader: {
      fontWeight: 600, 
      fontSize: '24px',
      lineHeight: 1.1667, 
    },
    subHeaderMedium: {
      fontWeight: 500, 
      fontSize: '20px',
      lineHeight: 1.2,    
    },
    subHeaderSmall: {
      fontWeight: 500, 
      fontSize: '16px',
      lineHeight: 1.25,   
    },
    subHeaderExtraSmall: {
      fontWeight: 500, 
      fontSize: '10px',
      lineHeight: 1.4,    
    },
    bodyCopyRegular: {
      fontWeight: 400, 
      fontSize: '14px',
      lineHeight: 1.2857,
    },
    bodyCopyAlt: {
      fontWeight: 400, 
      fontSize: '12px',
      lineHeight: 1.3333, 
    },
    footerCopy: {
      fontWeight: 300,
      fontSize: '10px',
      lineHeight: 1.4,  
    },    button: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: 1.666,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
