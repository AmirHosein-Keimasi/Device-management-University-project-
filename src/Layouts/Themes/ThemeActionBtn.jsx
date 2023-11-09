// import { useContext, useEffect, useState } from "react";
// import { Fab, Box } from "@mui/material";
// import { NightlightOutlined, WbSunnyOutlined } from "@mui/icons-material";
// import { useTheme } from "@emotion/react";


// const ThemeActionBtn = () => {



 
//   const theme = useTheme();


  
//   return (
//     <Box
    
//       position="absolute"
//       sx={{
//         display: {
//           xs: "none",
//           md: "block",
//         },
//       }}
//     >
//       <Fab
//         variant="extended"
//         aria-label="ThemeChenge"
//         size="small"
//         color="error"
//         onClick={() => handelThemeCheng(true)}
//         sx={{
//           backgroundColor:
//             theme.palette.mode === "darktheme" ? "primary.main" : "primary.darktheme",
//           ml: 2,
//         }}
//       >
//         {theme.palette.mode === "darktheme" ? (
//           <WbSunnyOutlined sx={{ mr: 1 }} />
//         ) : (
//           <NightlightOutlined sx={{ mr: 1 }} />
//         )}
//         {theme.palette.mode === "darktheme" ? "تم روز" : "تم شب"}
//       </Fab>
//     </Box>
//   );
// };

// export default ThemeActionBtn;
