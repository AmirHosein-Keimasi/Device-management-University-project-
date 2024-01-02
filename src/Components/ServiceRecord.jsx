import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Add, Chat, DownloadDone } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  TextField,Typography,
  CardContent,
  Slide
} from "@mui/material";
import { DateSchema } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import Record from "../Assets/Record.png";
import "../App.css";
import { addProductService, getProductServiceTime } from "../Server/servises";
import { useParams } from "react-router-dom";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { DataGrid } from "@mui/x-data-grid";
import { borderBottom, styled } from '@mui/system';


const ServiceRecord = ({ helmetTitle }) => {
  const { itemId } = useParams();
  const [loading, setLoading] = useState(false);
  const [ProductServiceTime, setProductServiceTime] = useState({});
  const [Datevalue, setDatesetValue] = React.useState(new Date());
 


  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getProductServiceTime(itemId);
        let values = Object.values(data);
        setProductServiceTime(values);
      } catch (error) {
        console.log(error);
      }
    };
    return () => {
      fetchDate();
    };
  }, []);
  console.log(ProductServiceTime);
  function convertToTimestamp(dateString) {
    return Date.parse(dateString);
  }

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
      console.log(itemId, values.Datediscription, Datevalue);
      resetForm();
    },
    validationSchema: DateSchema,
  });
  const columns = [
    { field: "id", headerName: "ردیف", width: 70,   },
    { field: "service_date", headerName: "تاریخ", width: 130  },
    { field: "discription", headerName: "توضیحات", width: 200 },
  ];
  const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-columnHeader': {
      fontSize: '20px',
      borderBottom:"solid 5px #bd93f9",
       backgroundColor: "white"
      
     
    },
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
          {/* <Grid container> */}
          <Grid
            // xs={9}
            // sm={9}
            // md={9}
            // lg={7}
            // xl={7}
            sx={{ p: 4 }}
            spacing={4}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid md={5}>
              <Slide
                direction="right"
                in={loading}
                style={{
                  transitionDelay: loading ? "500ms" : "0ms",
                }}
              >
                <div dir="rtl">
                  <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DesktopDatePicker
                      sx={{ my: 2 }}
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
                        setDatesetValue(convertToTimestamp(newValue));
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
                  transitionDelay: loading ? "600ms" : "0ms",
                }}
              >
                <TextField   sx={{ my: 2  }}
               
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

            <Grid md={6}>
              <Slide
                direction="right"
                in={loading}
                style={{
                  transitionDelay: loading ? "800ms" : "0ms",
                }}
              >
                <div style={{ height: 500, width: "100%" }}>
                  <Typography variant="body3" sx={{ backgroundColor: "white"}}>تاریخچه سرویس های گذشته</Typography>
                  <StyledDataGrid
                    rows={ProductServiceTime}
                    columns={columns}
                    pageSize={10}
                    columnHeaderHeight={65}
                    componentsProps={{
                      cell: { style: {  backgroundColor: "white" } },
                      columnHeaders: { style: {fontSize: 'bold'   } },
                    }}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize:7},
                      },
                    }}
                    pageSizeOptions={[10]}
                  />
                </div>
              </Slide>
            </Grid>

           
          </Grid>

          {/* <Grid
              xs={3}
              sm={3}
              md={3}
              lg={5}
              xl={5}
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
                height="350px"
                style={{
                  justifyContent: "center",
                  position: "absolute",
                  left: "1px",
                  opacity: "80%",
                  zIndex: "-100",
                }}
              />
            </Grid> */
          /* </Grid> */}
        </CardContent>
      </form>
    </>
  );
};

export default ServiceRecord;
