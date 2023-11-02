import React from "react";
import notfound from "../Assets/no-found.gif";
import ErrorImg from "../Assets/404.png";
import CustomDivider from "../Constants/CustomDivider";
import { Error } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const NotFound = () => {
  const imageStyle = {
    maxWidth: "100%",
  };
  return (
    <>
      {" "}
      <CustomDivider
        bColor="#primary.main"
        cColor="primary"
        icon={<Error />}
        align="center"
        text={"404  صفحه مورد نظر یافت نشد"}
      />
      <Grid container sx={{}}>
        <Grid
          xs={0}
          sm={0}
          md={0}
          lg={6}
          xl={6}
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          
          }}
        >
          {" "}
          <img src={`${notfound}`}style={imageStyle}></img>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "block",
              xs: "block",
            },
          }}
        >
          {" "}
          <img style={imageStyle} src={`${ErrorImg}`}></img>
        </Grid>
      </Grid>
    </>
  );
};

export default NotFound;
