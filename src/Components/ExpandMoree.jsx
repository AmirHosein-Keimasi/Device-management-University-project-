// import { useState } from "react";
// import styled from "@emotion/styled";
// import { ExpandMoreOutlined } from "@mui/icons-material";
// import {
//   IconButton,

//   Collapse,
//   Typography,
// } from "@mui/material";
// import { Box } from "@mui/system";






// const ExpandMoree = () => {
//   const [expanded, setExpanded] = useState();
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };


//   const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));




//   return (
//     <Box>
//       <ExpandMore
//         expand={expanded}
//         onClick={handleExpandClick}
//         aria-expanded={expanded}
//         aria-label="show more"
//       >
//         <ExpandMoreOutlined />
//       </ExpandMore>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <Typography paragraph></Typography>
//       </Collapse>
//     </Box>
//   );
// };

// export default ExpandMoree;
