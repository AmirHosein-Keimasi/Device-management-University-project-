import { useFormik } from "formik";
import { contactSchema } from "../Validation/contactValidation";
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
import { addProduct } from "../Server/servises";
import { useEffect, useState } from "react";

const AddItem = ({ helmetTitle, CategoryAlldata }) => {
  const [loading, setLoading] = useState(false);

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

  const contactInputNames = { categorys: "", nameProduct: "", discription: "" };
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values, { resetForm }) => {
      addProductForm(values.categorys, values.nameProduct, values.discription);
      resetForm();
    },
    validationSchema: contactSchema,
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
        icon={<Add />}
        align="center"
        text={"اضافه کردن یک ایتم"}
      />
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
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
                        <InputAdornment postion="end">
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
                    onChange={formik.handleChange}
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
                        <InputAdornment postion="end">
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
                    color="success"
                    variant="contained"
                    sx={{ mt: 2 }}
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
                  zIndex: "-1",
                  left: "100px",
                  opacity: "80%",
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
