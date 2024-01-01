import { useFormik } from "formik";
import { FormSchema } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import {
  Add,
  CalendarToday,
  Category,
  Chat,
  Devices,
  Image,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Helmet } from "react-helmet-async";
import { Button, InputAdornment, Slide, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "../App.css";
import { addCategory } from "../Server/servises";
import { useEffect, useState } from "react";

const AddCategory = ({ helmetTitle, CategoryAlldata }) => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [values, setValues] = useState({});

  const handleAddInput = () => {
    setInputs([...inputs, `input-${inputs.length}`]);
  };
  const handleRemoveInput = () => {
    setInputs(inputs.slice(0, -1));
  };

  const handleChange = (event, name) => {
    setValues({ ...values, [name]: event.target.value });
  };



  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const addCategoryForm = async (
    nameCategory,
    TiemService,
    imgLink,
    description,
    values
  ) => {
    try {
      const result = await addCategory(
        nameCategory,
        TiemService,
        imgLink,
        description,
        values
      );
      if (result) {
        console.log(result);
        toast.success("دسته بندی مورد نظر ثبت شد ", {
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
      toast.error("خطا در افزودن دسته بندی !", {
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

  const Formvalidation = {
    nameCategory: "",
    TiemService: "",
    imgLink: "",
    description: "",
    values: {},
  };
  const formik = useFormik({
    initialValues: Formvalidation,
    onSubmit: (value, { resetForm }) => {
      addCategoryForm(
        value.nameCategory,
        value.TiemService,
        value.imgLink,
        value.description,
        JSON.stringify(values)
      );
      console.log(
        value.nameCategory,
        value.TiemService,
        value.imgLink,
        value.description,
        JSON.stringify(values)
      );

      resetForm();
      window.location.reload();
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
            <Add /> اضافه کردن دسته بندی جدید
          </h5>
        }
      />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid>
          <Slide
            direction="right"
            in={loading}
            style={{
              transitionDelay: loading ? "500ms" : "0ms",
            }}
          >
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              sx={{ mx: 2, p: 2 }}
              onClick={handleAddInput}
              className="SubmitBtn"
            >
              اضافه کردن ورودی
            </Button>
          </Slide>
        </Grid>
        <Grid>
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
              sx={{ mx: 2, p: 2 }}
              onClick={handleRemoveInput}
              className="SubmitBtn"
            >
              حذف کردن ورودی
            </Button>
          </Slide>
        </Grid>
      </Grid>
      <form
        autoComplete="off"
        className="addForm"
        onSubmit={formik.handleSubmit}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item={true.toString()}>
            <Grid sx={{ p: 4 }}>
              <Grid>
                <Slide
                  direction="right"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "600ms" : "0ms",
                  }}
                >
                  <TextField
                    fullWidth
                    sx={{ m: 0.5, width: "50ch" }}
                    color="secondary"
                    label="نام دسته بندی"
                    name="nameCategory"
                    variant="outlined"
                    multiline
                    value={formik.values?.nameCategory}
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
              <Grid>
                <Slide
                  direction="right"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "700ms" : "0ms",
                  }}
                >
                  <TextField
                    sx={{ m: 0.5, width: "50ch" }}
                    type="number"
                    color="secondary"
                    label="  دوره سرویس (روز)"
                    name="TiemService"
                    variant="outlined"
                    multiline
                    value={formik.values?.TiemService}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CalendarToday color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Slide>
              </Grid>
              <Grid>
                <Slide
                  direction="right"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "800ms" : "0ms",
                  }}
                >
                  <TextField
                    sx={{ m: 0.5, width: "50ch" }}
                    color="secondary"
                    label="عکس انتخابی برای دسته بندی (لینک)"
                    name="imgLink"
                    variant="outlined"
                    multiline
                    value={formik.values?.imgLink}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Image color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Slide>
              </Grid>
              <Grid>
                <Slide
                  direction="right"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "900ms" : "0ms",
                  }}
                >
                  <TextField
                    sx={{ m: 0.5, width: "50ch" }}
                    multiline
                    rows={6}
                    color="secondary"
                    label="توضیحات"
                    name="description"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Chat color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                    value={formik.values?.description}
                    onChange={formik.handleChange}
                  />
                </Slide>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            xl={8}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ p: 5 }}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            {inputs.map((input, name) => (
              <Grid item={true.toString()} key={input}>
                <div>
                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? "1000ms" : "0ms",
                    }}
                  >
                    <TextField
                      name={String(name)}
                      className="TextFieldInput"
                      sx={{ width: "50ch" }}
                      color="secondary"
                      label="ویژگی مورد نظر"
                      variant="outlined"
                      value={formik.values?.name}
                      onChange={(event) => handleChange(event, name)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Category color="secondary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Slide>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container sx={{ p: 1 }}>
          <Grid item={true.toString()} xs={12}>
            <Slide
              direction="right"
              in={loading}
              style={{
                transitionDelay: loading ? "1000ms" : "0ms",
              }}
            >
              <Button
                className="SubmitBtn"
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ p: 2 }}
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

export default AddCategory;
