import React from "react";
import { useFormik } from "formik";
import { FormSchema } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import { Category, Devices } from "@mui/icons-material";
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

const Inputs = ({ IdCategory }) => {
  const [loading, setLoading] = useState(false);
  const [CategoryInputs, setCategoryInputs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCategory(IdCategory);
        const inputs = JSON.parse(data[0].inputs);
        setCategoryInputs(inputs);
      } catch (error) {
        console.log(error);
      }
    };
    if (IdCategory) {
      fetchData();
    }
  }, [IdCategory]);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const addProductForm = async (categorys, nameProduct, discription) => {
    try {
      const result = await addProduct(categorys, nameProduct, discription);
      if (result) {
        console.log(result);
        toast.success("ایتم مورد نظر ثبت شد ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error("خطا در افزودن محصول!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  //   const Formvalidation = { categorys: "", nameProduct: "", discription: "" };
  const formik = useFormik({
    // initialValues: Formvalidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      //   addProductForm(values.categorys, values.nameProduct, values.discription);
      //   resetForm();
    },
    validationSchema: FormSchema,
  });

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form
        autoComplete="off"
        className="addForm"
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid xs={11} sm={10} md={9} lg={9} xl={9}>
            <Slide
              direction="right"
              in={loading}
              style={{
                transitionDelay: loading ? "400ms" : "0ms",
              }}
            >
              <TextField
                sx={{ p: 0.5 }}
                fullWidth
                color="secondary"
                label="نام ایتم"
                name="nameProduct"
                variant="outlined"
                multiline
                SelectProps={{
                  native: true,
                }}
                helperText={
                  formik.touched.nameProduct ? formik.errors.nameProduct : null
                }
                error={Boolean(
                  formik.touched.nameProduct && formik.errors.nameProduct
                )}
                value={formik.values?.nameProduct}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Devices color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Slide>
          </Grid>

          {Object.values(CategoryInputs).map((CategoryInput, index) => (
            <Slide
              direction="right"
              in={loading}
              style={{
                transitionDelay: loading ? "400ms" : "0ms",
              }}
            >
              <Grid xs={11} sm={10} md={9} lg={9} xl={9} key={index}>
                <TextField
                  sx={{ p: 0.5 }}
                  fullWidth
                  color="secondary"
                  label={CategoryInput}
                  name={CategoryInput}
                  variant="outlined"
                  multiline
                  SelectProps={{
                    native: true,
                  }}
                  helperText={
                    formik.touched.CategoryInput
                      ? formik.errors.CategoryInput
                      : null
                  }
                  error={Boolean(
                    formik.touched.CategoryInput && formik.errors.CategoryInput
                  )}
                  value={formik.values?.CategoryInput}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Category color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Slide>
          ))}

          <Grid xs={11} sm={10} md={9} lg={9} xl={9}>
            <Slide
              direction="right"
              in={loading}
              style={{
                transitionDelay: loading ? "700ms" : "0ms",
              }}
            >
              <Button
                type="submit"
                color="secondary"
                className="SubmitBtn"
                variant="contained"
                sx={{ mt: 2, py: 2 }}
                fullWidth
              >
                ارسال کن
              </Button>
            </Slide>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Inputs;
