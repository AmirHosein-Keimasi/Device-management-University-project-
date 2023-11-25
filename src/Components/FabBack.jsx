import { Fab, Tooltip, Box } from "@mui/material";

import { Link } from "react-router-dom";
import { Undo } from "@mui/icons-material";

const FabAdd = () => {
  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        {" "}
        <Tooltip title="بازگشت" arrow>
          <Fab
            aria-label="Back"
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            <Link className="btn" to={"/"}>
              {" "}
              <Undo />
            </Link>
          </Fab>
        
        </Tooltip>
      </Box>
    </>
  );
};

export default FabAdd;
