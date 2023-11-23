import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import { Undo } from "@mui/icons-material";

const FabAdd = () => {
  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          
          aria-label="Back"
          sx={{ position: "fixed", bottom: 16, right: 16, backgroundColor: "secondary.main",
          "&:hover": {
            backgroundColor: "secondary.dark",
          }, }}
        >
          <Link className="btn" to={"/"}>
            {" "}
            <Undo />
          </Link>
        </Fab>
      </Box>
    </>
  );
};

export default FabAdd;
