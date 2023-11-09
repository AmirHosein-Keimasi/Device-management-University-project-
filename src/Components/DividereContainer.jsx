import { Box, Grid } from "@mui/material";
import React from "react";
import CustomDivider from "../Constants/CustomDivider";
import { Add, RemoveRedEye } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../App.css"


const DividereContainer = () => {
  return (
    <>
     
        <Grid container>
          <Grid  xs={12} sm={6} md={6} lg={6} xl={6} sx={{mb:1}}>
            <CustomDivider
            
              bColor="#primary.main"
              cColor="primary"
              icon={<Add />}
              align="center"
              text={<Link className="btn" to={"/MainPage/add"} >اضافه کردن یک ایتم</Link>}
            >
              {" "}
            </CustomDivider>
          </Grid>
          <Grid  xs={12} sm={6} md={6} lg={6} xl={6} sx={{}}>
            <CustomDivider
              bColor="#primary.main"
              cColor="primary"
              icon={<RemoveRedEye />}
              align="center"
              text={<Link className="btn" to={"/NearestService"} >نزدیک ترین سرویس ها</Link>}
            />
          </Grid>
        </Grid>
     
    </>
  );
};

export default DividereContainer;
