import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Add, Chat, DownloadDone } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  TextField,
  CardContent,
  Slide,
} from "@mui/material";
import { DateSchema } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import Record from "../Assets/Record.png";
import "../App.css";
import { addProductService } from "../Server/servises";
import { useParams } from "react-router-dom";
import { DesktopDatePicker } from "@mui/x-date-pickers";

const ServiceRecord = ({ helmetTitle }) => {
  const { itemId } = useParams();
  const [loading, setLoading] = useState(false);
  function convertToTimestamp(dateString) {
    return Date.parse(dateString);
  }
  const [Datevalue, DatesetValue] = React.useState(new Date());

  const addProductServiceform = async (itemId, Datediscription, Datevalue) => {
    try {
      const result = await addProductService(
        itemId,
        Datediscription,
        Datevalue
      );
      if (result) {
        console.log(result);
        toast.success("تاریخ سرویس ایتم مورد نظر ثبت شد ", {
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
      toast.error("خطا در افزودن تاریخ سرویس جدید!", {
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

  //   const location = useLocation();
  //   const { Product } = location.state;
  // console.log(Product);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const Submitvalidation = {
    itemId: "",
    Datediscription: "",
    Datevalue: "",
  };
  const formik = useFormik({
    initialValues: Submitvalidation,
    onSubmit: (values, { resetForm }) => {
      addProductServiceform(itemId, values.Datediscription, Datevalue);
      resetForm();
    },
    validationSchema: DateSchema,
  });

  console.log(Datevalue);
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
            <Add /> ثبت سرویس جدید
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
            mt: 3,
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
                  <div dir="rtl">
                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                      <DesktopDatePicker
                        slotProps={{
                          openPickerButton: {
                            color: "secondary",
                          },
                          textField: {
                            size: "large",
                            color: "secondary",
                            fullWidth: true,
                          },
                        }}
                        minDate={Datevalue}
                        label="تاریخ"
                        value={Datevalue}
                        name="DateTimerPicker"
                        onChange={(newValue) => {
                          DatesetValue(convertToTimestamp(newValue));
                        }}
                        renderInput={(params) => (
                          <TextField
                            name="DateTimerPicker"
                            variant="outlined"
                            fullWidth
                            {...params}
                            SelectProps={{
                              native: true,
                            }}
                            helperText={
                              formik.touched.DateTimerPicker
                                ? formik.errors.DateTimerPicker
                                : null
                            }
                            error={Boolean(
                              formik.touched.DateTimerPicker &&
                                formik.errors.DateTimerPicker
                            )}
                            value={formik.values?.DateTimerPicker}
                            onChange={formik.handleChange}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                </Slide>
                <Slide
                  direction="right"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "400ms" : "0ms",
                  }}
                >
                  <TextField
                    sx={{ my: 2 }}
                    fullWidth
                    color="secondary"
                    label="توضیحات"
                    name="Datediscription"
                    variant="outlined"
                    multiline
                    rows={4}
                    SelectProps={{
                      native: true,
                    }}
                    helperText={
                      formik.touched.Datediscription
                        ? formik.errors.Datediscription
                        : null
                    }
                    error={Boolean(
                      formik.touched.Datediscription &&
                        formik.errors.Datediscription
                    )}
                    value={formik.values?.Datediscription}
                    onChange={formik.handleChange}
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
                    سرویس انجام شد <DownloadDone />
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
                src={Record}
                height="400px"
                style={{
                  justifyContent: "center",
                  position: "absolute",
                  left: "100px",
                  opacity: "80%",
                  zIndex: "-100",
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </>
  );
};

export default ServiceRecord;
