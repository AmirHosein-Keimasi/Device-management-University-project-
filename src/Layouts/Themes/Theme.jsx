import { createTheme } from "@mui/material";

const themeColors = {
  primary: {
    main: "#2e1534",
    light: "#6a3d87",
    dark: "#1a0017",
  },
  secondary: {
    main: "#000000",
    light: "#de718c",
    dark: "#9c1c45",
  },
  error: {
    main: "#ff3d57",
  },
  warning: {
    main: "#ffb300",
  },
  info: {
    main: "#50c5e8",
  },
  success: {
    main: "#37bc9b",
  },
};

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    ...themeColors,
  },
});

// import { createTheme } from "@mui/material/styles";

// //NOTE Create Custom Theme
// export const lightTheme = createTheme({
//   direction: "rtl",
//   palette: {
//     mode: "light",
//     text: {
//       main: "#040D12",
//     },
//     primary: {
//       main: "#EAD7BB",
//     },
//     error: {
//       main: "#BCA37F",
//     },
//     info: {
//       main: "#113946",
//     },
//     warning:{
//       main:"#6f6f10"
//     },
//     success:{
//       main:"#EAD4BB"
//     }
//   },
//   typography: {
//     fontFamily: "tanha, vazir, roboto",
//   },
// });
