// Malachite	#26d333	Primary
// Rangitoto	#2f3424	Info
// Apple	#41ba47	Success
// Sahara	#beaa0f	Warning
// Pomegranate	#f44336	Danger
// #e05a33 nav tabs

export const primary = {
  100: "#d4f6d6",
  200: "#a8edad",
  300: "#7de585",
  400: "#51dc5c",
  500: "#26d333",
  600: "#1ea929",
  700: "#177f1f",
  800: "#0f5414",
  900: "#082a0a",
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
};

export const darkAccent = {
  100: "#e9e8d4",
  200: "#d3d2aa",
  300: "#bebb7f",
  400: "#a8a555",
  500: "#928e2a",
  600: "#757222",
  700: "#585519",
  800: "#3a3911",
  900: "#1d1c08",
};

export const light = {
  100: "#fdfdfd",
  200: "#fafbfb",
  300: "#f8faf9",
  400: "#f5f8f7",
  500: "#f3f6f5",
  600: "#c2c5c4",
  700: "#929493",
  800: "#616262",
  900: "#313131",
};

export const lightAccent = {
  100: "#fef2cf",
  200: "#fde69f",
  300: "#fdd96e",
  400: "#fccd3e",
  500: "#fbc00e",
  600: "#c99a0b",
  700: "#977308",
  800: "#644d06",
  900: "#322603",
};

export const info = {
  100: "#d5d6d3",
  200: "#acaea7",
  300: "#82857c",
  400: "#595d50",
  500: "#2f3424",
  600: "#262a1d",
  700: "#1c1f16",
  800: "#13150e",
  900: "#090a07",
};

export const success = {
  100: "#d9f1da",
  200: "#b3e3b5",
  300: "#8dd691",
  400: "#67c86c",
  500: "#41ba47",
  600: "#349539",
  700: "#27702b",
  800: "#1a4a1c",
  900: "#0d250e",
};

export const warning = {
  100: "#f2eecf",
  200: "#e5dd9f",
  300: "#d8cc6f",
  400: "#cbbb3f",
  500: "#beaa0f",
  600: "#98880c",
  700: "#726609",
  800: "#4c4406",
  900: "#262203",
};

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
};

export const navbarMain = {
  100: "#f9ded6",
  200: "#f3bdad",
  300: "#ec9c85",
  400: "#e67b5c",
  500: "#e05a33",
  600: "#b34829",
  700: "#86361f",
  800: "#5a2414",
  900: "#2d120a",
};

export const themeColors = {
  primary,
  dark,
  darkAccent,
  light,
  lightAccent,
  success,
  info,
  warning,
  error,
  navbarMain,
  divider: dark[200],
  background: {
    default: dark[100],
  },
  text: {
    primary: dark[900],
    secondary: dark[800],
    disabled: dark[400],
  },
};
