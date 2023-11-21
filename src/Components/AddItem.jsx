import { Navigate } from "react-router-dom";
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
  Alert,
} from "@mui/material";
import FormPng from "../Assets/FormPng.png";
import "../App.css";
import { addProduct } from "../Server/servises";
import { useEffect, useState } from "react";
import SucAlert from "./SucAlert";
import ErrorAlert from "./ErrorAlert";

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
      const { status } = await addProduct(categorys, nameProduct, discription);
      if (status === 200) {
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const contactInputNames = { categorys: "", nameProduct: "", discription: "" };
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      addProductForm(
        values.categorys,
        values.nameProduct,
        values.discription
      );
    },
    validationSchema: contactSchema,
  });

  return (
    <>
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

// <div className="row mt-5 d-flex m-5">
//           <div className="col-md-6">
//             {/* {errors?.map((error,index)=>(
//                   <p key={index} className="text-danger">{error.message}</p>
//                 ))} */}
//             <Formik
//               initialValues={{
//                 name: "",
//                 categorys: "",
//                 discription: "",
//               }}
//               validationSchema={contactSchema}
//               onSubmit={(values) => {
//                 createContactForm(values);
//               }}
//             >
//               <Form>
//                 <Slide
//                   direction="right"
//                   in={loading}
//                   style={{
//                     transitionDelay: loading ? "400ms" : "0ms",
//                   }}
//                 >
//                   <div className="mb-2">
//                     <Field
//                       name="name"
//                       type="text"
//                       className="form-control"
//                       placeholder="نام ایتم"
//                     />
//                     <ErrorMessage
//                       name="name"
//                       render={(msg) => (
//                         <div className="text-danger">{msg}</div>
//                       )}
//                     />
//                   </div>
//                 </Slide>

//                 <Slide
//                   direction="right"
//                   in={loading}
//                   style={{
//                     transitionDelay: loading ? "500ms" : "0ms",
//                   }}
//                 >
//                   <div className="mb-2">
//                     <Field
//                       name="categorys"
//                       as="select"
//                       className="form-control"
//                     >
//                       <option value="">انتخاب دسته بندی </option>
//                       {CategoryAlldata.length > 0 &&
//                         CategoryAlldata.map((group) => (
//                           <option
//                             key={group.id}
//                             value={group.name}
//                             className="p-4 m-2"
//                           >
//                             {group.name}
//                           </option>
//                         ))}
//                     </Field>

//                     <ErrorMessage
//                       name="categorys"
//                       render={(msg) => (
//                         <div className="text-danger">{msg}</div>
//                       )}
//                     />
//                   </div>
//                 </Slide>
//                 <Slide
//                   direction="right"
//                   in={loading}
//                   style={{
//                     transitionDelay: loading ? "600ms" : "0ms",
//                   }}
//                 >
//                   <div className="mb-2">
//                     <Field
//                       name="description"
//                       type="discription"
//                       className="form-control"
//                       placeholder=" توضیحات"
//                     />

//                     <ErrorMessage
//                       name="description"
//                       render={(msg) => (
//                         <div className="text-danger">{msg}</div>
//                       )}
//                     />
//                   </div>
//                 </Slide>
//               </Form>
//             </Formik>
//             <Slide
//               direction="right"
//               in={loading}
//               style={{
//                 transitionDelay: loading ? "850ms" : "0ms",
//               }}
//             >
//               <div className="mt-">
//                 <input
//                   type="submit"
//                   value="ساخت مخاطب"
//                   className="btn mx-2"
//                   style={{ backgroundColor: PURPLE }}
//                 >
//                 </input>
//                 <Link
//                   to={"/"}
//                   className="btn mx-2"
//                   style={{ backgroundColor: COMMENT }}
//                 >
//                   انصراف
//                 </Link>
//               </div>
//             </Slide>
//           </div>
//         </div>
