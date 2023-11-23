import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const FabAdd = () => {
  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            backgroundColor: "#00838d",

            "&:hover": {
              backgroundColor: "#005e65",
            },
          }}
        >
          <Link className="btn" to={"/MainPage/add"}>
            {" "}
            <AddIcon />
          </Link>
        </Fab>
      </Box>
    </>
  );
};

export default FabAdd;
