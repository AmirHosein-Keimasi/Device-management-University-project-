import { useFormik } from "formik";
import { FormSchema } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import { Add, Chat, Devices } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Helmet } from "react-helmet-async";
import {
  Button,
  CardContent,
  InputAdornment,
  Slide,
  TextField,
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import FormPng from "../Assets/FormPng.png";
import "../App.css";
import { getCategory, addProduct } from "../Server/servises";
import { useEffect, useState } from "react";
import Addinputs from "./Addinputs";
import Inputs from "./Inputs";

const AddItem = ({ helmetTitle, CategoryAlldata }) => {
  const [loading, setLoading] = useState(false);
  const [IdCategory, setIdCategory] = useState();

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  function handleChange(event) {
    
    setIdCategory(event.target.value);
    // formik.handleChange(event); // Call this to ensure formik's state is updated
    
   
  }




  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>{" "}
      <CustomDivider
        bColor="#primary.main"
        cColor="primary"
        align="center"
        CustomDivider
        text={
          <h5 className="btn CustomDivider" to={""}>
            {" "}
            <Add /> اضافه کردن ایتم جدید
          </h5>
        }
      />
      <CardContent sx={{ flexDirection: "column" }}>
        <Grid container>
          <Grid
            xs={12}
            sm={11}
            md={10}
            lg={8}
            xl={8}
            sx={{ p: 2 }}
            container
            spacing={2}
          >
            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
              <Slide
                direction="right"
                in={loading}
                style={{
                  transitionDelay: loading ? "400ms" : "0ms",
                }}
              >
                <TextField
                  id="outlined-select-currency-native"
                  label="انتخاب دسته بندی "
                  focused
                  fullWidth
                  select
                  color="text"
                  name="categorys"
                  variant="outlined"
                  SelectProps={{
                    native: true,
                  }}
                  onChange={handleChange}
                >
                  {CategoryAlldata.length > 0 &&
                    CategoryAlldata.map((group) => (
                      <option
                        key={group.id}
                        value={group.id}
                        className="p-4 m-2"
                      >
                        {group.name}
                      </option>
                    ))}
                </TextField>
              </Slide>
            </Grid>

            <Grid xs={11} sm={112} md={11} lg={10} xl={10}>
              <Inputs IdCategory={IdCategory} />
            </Grid>

          </Grid>
          <Grid
            spacing={1}
            sx={{
              zIndex: "1",
              display: {
                md: "block",
                xs: "none",
                sm: "none",
                xl: "block",
                lg: "block",
              },
            }}
          >
            <img
              className="FormPng"
              src={FormPng}
              height="400px"
              style={{
                top: "280px",
                justifyContent: "center",
                position: "absolute",
                left: "100px",
                opacity: "80%",
                zIndex: "-1000",
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      s
    </>
  );
};

export default AddItem;
