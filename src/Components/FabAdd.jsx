import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const FabAdd = () => {
  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
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
