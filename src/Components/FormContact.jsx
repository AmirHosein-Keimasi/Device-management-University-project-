import React from "react";
import { useFormik } from "formik";
import { contactSchema } from "../Validation/contactValidation";
import {

  CardContent,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  Face6Rounded,
} from "@mui/icons-material";

const FormContact = () => {
  const contactInputNames = {
    name: "",
    categorys: "",
    discription: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
    validationSchema: contactSchema,
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent sx={{ backgroundColor: "#fffff1" }}>
        <Grid xs={12} md={6}>
          <TextField
            sx={{ p: 0.5 }}
            fullWidth
            size="small"
            color="warning"
            label="نام و نام خانوادگی"
            name="fullname"
            variant="outlined"
            helperText={formik.touched.fullname ? formik.errors.fullname : null}
            error={Boolean(formik.touched.fullname && formik.errors.fullname)}
            value={formik.values?.fullname}
            onChange={formik.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment postion="end">
                  <Face6Rounded />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid xs={12} md={12}>
          <TextField
            sx={{ p: 0.5 }}
            fullWidth
            multiline
            rows={6}
            size="small"
            color="warning"
            label="متن پیام"
            name="message"
            variant="outlined"
            helperText={formik.touched.message ? formik.errors.message : null}
            error={Boolean(formik.touched.message && formik.errors.message)}
            value={formik.values?.message}
            onChange={formik.handleChange}
          />
        </Grid>
      </CardContent>
    </form>
  );
};

export default FormContact;
