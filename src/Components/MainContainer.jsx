import { Box, Grid } from "@mui/material";
import React from "react";
import CustomDivider from "../Constants/CustomDivider";
import { Add, RemoveRedEye } from "@mui/icons-material";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <Box sx={{}}>
        <Grid container>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <CustomDivider
              bColor="#primary.main"
              cColor="primary"
              icon={<Add />}
              align="center"
              text={<Link to={"/add"} className="btn mx-2">اضافه کردن یک ایتم</Link>}
            >
              {" "}
            </CustomDivider>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <CustomDivider
              bColor="#primary.main"
              cColor="primary"
              icon={<RemoveRedEye />}
              align="center"
              text={<Link to={"/CloseServises"} className="btn mx-2">نزدیک ترین سرویس ها</Link>}

            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainContainer;
