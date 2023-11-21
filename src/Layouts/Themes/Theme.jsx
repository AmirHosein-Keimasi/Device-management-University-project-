import { createTheme } from "@mui/material";


//NOTE Create Custom Theme
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#6272a4",
    },
    secondary: {
      main: "#bd93f9",
    },
    divider: "#f8f8f2",
    error: {
      main: "#ff79c6",
    },
    warning: {
      main: "#de903d",
    },
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});

export const darktheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    text: {
      main: "#040D12",
    },
    primary: {
      main: "#EAD7BB",
    },
    error: {
      main: "#BCA37F",
    },
    info: {
      main: "#113946",
    },
    warning:{
      main:"#6f6f10"
    },
    success:{
      main:"#EAD4BB"
    }
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});