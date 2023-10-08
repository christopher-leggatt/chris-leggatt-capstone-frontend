// Malachite	#26d333	Primary
// Rangitoto	#2f3424	Info
// Apple	#41ba47	Success
// Sahara	#beaa0f	Warning
// Pomegranate	#f44336	Danger
// #e05a33 nav tabs

export const brown = {
  // Line Stroke
  100: "#dcd6d5",
  200: "#b8aeab",
  // Border
  300: "#958582",
  400: "#715d58",
  // Low Priority form Title/Text
  500: "#4e342e",
  600: "#3e2a25",
  // Paragraph
  700: "#2f1f1c",
  800: "#1f1512",
  // Main Text
  900: "#100a09",
};

// Dark Green
export const primary = {
  100: "#cce0cc",
  200: "#99c199",
  300: "#66a266",
  400: "#338333",
  500: "#006400",
  600: "#005000",
  700: "#003c00",
  800: "#002800",
  900: "#001400",
  main: "#006400",
  contrastText: "#ffffff",
};

// Light Green
export const secondary = {
  100: "#e0ffe0",
  200: "#c2ffc2",
  300: "#a3ffa3",
  400: "#85ff85",
  500: "#66ff66",
  600: "#52cc52",
  700: "#3d993d",
  800: "#296629",
  900: "#143314",
  main: "#66ff66",
  contrastText: "#ffffff",
};

export const light = {
    100: "#fefdf9",
    200: "#fdfaf3",
    300: "#fcf8ec",
    400: "#fbf5e6",
    500: "#faf3e0",
    600: "#c8c2b3",
    700: "#969286",
    800: "#64615a",
    900: "#32312d",
    main: "#faf3e0",
    contrastText: brown[900]

};

export const dark = {
  100: "#d6d8d3",
  200: "#acb0a7",
  300: "#83897a",
  400: "#59614e",
  500: "#303a22",
  600: "#262e1b",
  700: "#1d2314",
  800: "#13170e",
  900: "#0a0c07",
  main: "#303a22",
  contrastText: "#ffffff"
};

// Blue
export const info = {
  50: "#f3f5f9",
  100: "#DBF0FE",
  200: "#B8DEFE",
  300: "#94C9FE",
  400: "#7AB6FD",
  500: "#4E97FD",
  600: "#3975D9",
  700: "#2756B6",
  800: "#183C92",
  900: "#0E2979",
  main: "#4E97FD",
  contrastText: "#FFFFFF",
};

// Gold
export const success = {
    100: "#fff7cc",
    200: "#ffef99",
    300: "#ffe766",
    400: "#ffdf33",
    500: "#ffd700",
    600: "#ccac00",
    700: "#998100",
    800: "#665600",
    900: "#332b00",
    contrastText: brown[900],
};

// Maroon
export const warning = {
  50: "#f3f5f9",
  100: "#F6F2ED",
  200: "#F8DBD1",
  300: "#EBBCB3",
  400: "#D89C98",
  600: "#A3545C",
  700: "#883948",
  800: "#6E2438",
  900: "#5B162F",
  main: "#BE7374",
  contrastText: "#FFFFFF",
};

// Red
export const error = {
  100: "#fdd9d7",
  200: "#fbb4af",
  300: "#f88e86",
  400: "#f6695e",
  500: "#f44336",
  600: "#c3362b",
  700: "#922820",
  800: "#621b16",
  900: "#310d0b",
  main: "#f44336",
  contrastText: "#FFFFFF",
};

export const themeColors = {
  primary,
  secondary,
  brown,  
  success,
  info,
  warning,
  error,
  light,
  divider: brown[200],
  background: {
    default: light[500],
  },
  text: {
    primary: brown[900],
    secondary: brown[800],
    disabled: brown[400],
  },
};
