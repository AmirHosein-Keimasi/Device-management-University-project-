import React from "react";
import { useFormik } from "formik";
import { Inputss } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import { Category, Chat, Devices } from "@mui/icons-material";
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
import { useEffect, useState, useRef } from "react";
import Addinputs from "./Addinputs";

const Inputs = ({ IdCategory }) => {
  const [loading, setLoading] = useState(false);
  const [CategoryInputs, setCategoryInputs] = useState([]);
  const [ValueofInputs, setValueofInputs] = useState([]);
  const formRef = useRef();

  const handleChange = (event, CategoryInput) => {
    setValueofInputs({ ...ValueofInputs, [CategoryInput]: event.target.value });
  };

  const jsonValues = JSON.stringify(ValueofInputs);

  useEffect(() => {
    const form = formRef.current;
    for (let i = 0; i < form.elements.length; i++) {
      form.elements[i].value = "";
    }
  }, [IdCategory]);

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
      setValueofInputs();
      setValueofInputs();
      fetchData();
    }
  }, [IdCategory]);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const addProductForm = async (IdCategory, jsonValues) => {
    try {
      const result = await addProduct(IdCategory, jsonValues);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(IdCategory, jsonValues);
    addProductForm(IdCategory, jsonValues);
  };
  const Formvalidation = { nameProduct: "", CategoryInput: "" };
  const formik = useFormik({
    initialValues: Formvalidation,
    onSubmit: (values,IdCategory, jsonValues, { resetForm }) => {
      console.log(IdCategory, jsonValues);
      addProductForm(IdCategory, jsonValues);
      resetForm();
    },
    validationSchema: Inputss,
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
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Grid container spacing={2}>
          <Grid xs={11} sm={10} md={9} lg={9} xl={9}>
            <Slide
              direction="right"
              in={loading}
              style={{
                transitionDelay: loading ? "500ms" : "0ms",
              }}
            >
              <TextField
                sx={{ p: 0.5 }}
                fullWidth
                color="secondary"
                label="نام ایتم"
                name={String("nameProduct")}
                variant="outlined"
                SelectProps={{
                  native: true,
                }}
                type="text"
                onChange={(event) => handleChange(event, "nameProduct")}
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
                transitionDelay: loading ? "300ms" : "0ms",
              }}
              key={index}
            >
              <Grid xs={11} sm={10} md={9} lg={9} xl={9}>
                <TextField
                  type="text"
                  sx={{ p: 0.5 }}
                  fullWidth
                  color="secondary"
                  label={CategoryInput}
                  variant="outlined"
                  name={String(CategoryInput)}
                  multiline
                  SelectProps={{
                    native: true,
                  }}
                  onChange={(event) => handleChange(event, CategoryInput)}
                  // value={formik.values?.CategoryInput}
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
                transitionDelay: loading ? "600ms" : "0ms",
              }}
            >
              <TextField
                type="text"
                sx={{ m: 0.5, width: "50ch" }}
                multiline
                rows={6}
                color="secondary"
                label="توضیحات"
                name="description"
                variant="outlined"
                onChange={(event) => handleChange(event, "description")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Chat color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Slide>
          </Grid>

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
