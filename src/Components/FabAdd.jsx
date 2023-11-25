import {Fab,Tooltip,Box} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const FabAdd = () => {





  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Tooltip title="اضافه کردن ایتم" arrow>
        <Fab
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            backgroundColor: "primary.main",

            "&:hover": {
              backgroundColor: "#4a61a5",
            },
          }}
        >
          <Link className="btn" to={"/MainPage/add"}>
            {" "}
            <AddIcon />
          </Link>
        </Fab>
        </Tooltip>
      </Box>
    </>
  );
};

export default FabAdd;
