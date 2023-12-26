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
import { addProduct } from "../Server/servises";
import { useEffect, useState } from "react";

const Inputs = () => {
  const [inputs, setInputs] = useState([]);
  const [values, setValues] = useState({
    inputs: [],
  });

  const handleAddInput = () => {
    setInputs([...inputs, `input-${inputs.length}`]);
  };

  const arr = { inputs: ["value1", "value2", "value3"] };

  const handleChange = (event) => {
    setValues((prevState) => ({
      inputs: [...prevState.inputs, event.target.value],
    }));
  };

  const handleExtractValues = () => {
    console.log(values);
  };
  const Submitvalidation = {
    itemId: "",
    Datediscription: "",
    Datevalue: "",
  };
  const formik = useFormik({
    initialValues: Submitvalidation,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <div>
      {inputs.map((input) => (
        <div key={input}>
          <Grid xs={12} sm={12} md={7} lg={12} xl={12}>
            <Slide
              direction="right"
              in={loading}
              style={{
                transitionDelay: loading ? "400ms" : "0ms",
              }}
            >
              <TextField
                name={input}
                onChange={handleChange}
                sx={{ p: 0.5 }}
                fullWidth
                color="secondary"
                label=""
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Add color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Slide>
          </Grid>
        </div>
      ))}
      <button onClick={handleAddInput}>اضافه کردن ورودی</button>
      <button onClick={handleExtractValues}>استخراج مقادیر</button>

      <p>تعداد فیلدهای ورودی اضافه شده: {inputs.length}</p>
    </div>
  );
};

export default Inputs;
