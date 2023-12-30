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
import { CategoryInputs, addProduct } from "../Server/servises";
import { useEffect, useState } from "react";

const AddItem = ({ helmetTitle, CategoryAlldata }) => {
  const [loading, setLoading] = useState(false);
  const [CategoryInput, setCategoryInput] = useState();
  const [IdCategory, setIdCategory] = useState();

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await CategoryInputs(IdCategory);
        setCategoryInput(data);
      } catch (error) {
        console.log(error);
      }
    };
    return () => {
      fetchDate();
    };
  }, []);

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

  function handleChange(event) {
    setIdCategory(event.target.value);
    formik.handleChange(event); // Call this to ensure formik's state is updated
  }

  const Formvalidation = { categorys: "", nameProduct: "", discription: "" };
  const formik = useFormik({
    initialValues: Formvalidation,
    onSubmit: (values, { resetForm }) => {
      addProductForm(values.categorys, values.nameProduct, values.discription);
      resetForm();
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
      <form
        autoComplete="off"
        className="addForm"
        onSubmit={formik.handleSubmit}
      >
        <CardContent
          sx={{
            flexDirection: "column",
          }}
        >
          <Grid container>
            <Grid lg={6} sx={{ p: 4 }} container spacing={2}>
              <Grid xs={12} sm={12} md={7} lg={12} xl={12}>
                <Slide
                  direction="right"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "500ms" : "0ms",
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
                    helperText={
                      formik.touched.categorys ? formik.errors.categorys : null
                    }
                    error={Boolean(
                      formik.touched.categorys && formik.errors.categorys
                    )}
                    value={formik.values?.categorys}
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
              <Grid xs={12} sm={12} md={7} lg={12} xl={12}>
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
                      formik.touched.nameProduct
                        ? formik.errors.nameProduct
                        : null
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

              <Grid xs={12} sm={12} md={7} lg={12} xl={12}>
                <Slide
                  direction="right"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "600ms" : "0ms",
                  }}
                >
                  <TextField
                    sx={{ p: 0.5 }}
                    fullWidth
                    multiline
                    rows={6}
                    color="secondary"
                    label="توضیحات"
                    name="discription"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Chat color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                    SelectProps={{
                      native: true,
                    }}
                    helperText={
                      formik.touched.discription
                        ? formik.errors.discription
                        : null
                    }
                    error={Boolean(
                      formik.touched.messdiscriptionage &&
                        formik.errors.discription
                    )}
                    value={formik.values?.discription}
                    onChange={formik.handleChange}
                  />
                </Slide>
              </Grid>

              <Grid xs={12} sm={12} md={7} lg={12} xl={12}>
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
                    variant="contained"
                    sx={{ mt: 2, py: 2 }}
                    fullWidth
                  >
                    ارسال کن
                  </Button>
                </Slide>
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
      </form>
    </>
  );
};

export default AddItem;
