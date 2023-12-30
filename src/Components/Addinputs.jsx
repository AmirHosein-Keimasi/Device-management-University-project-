import { useEffect, useState } from "react";
import { Category, Devices } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { InputAdornment, Slide, TextField } from "@mui/material";
import "../App.css";

const Addinputs = () => {
  //   const [CategoryInput, setCategoryInput] = useState();
  //   //   const [IdCategory, setIdCategory] = useState(250);

  //   useEffect(() => {
  //     const fetchDate = async () => {
  //       try {
  //         const { data } = await CategoryInputs(250);
  //         setCategoryInput(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     return () => {
  //       fetchDate();
  //     };
  //   }, []);


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

  function handleChange(event) {
    setIdCategory(event.target.value);
    
  }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  const CategoryInputs = {
    0: "hdd",
    1: "ssd",
    2: "cpu",
    3: "gpu",
    4: "hard",
    5: "ram",
  };
  const [values, setValues] = useState({});

    function handleChange(event) {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
  return (
    <>
      <form>
        {Object.keys(CategoryInputs).map((key, value) => (
         
            <Grid sx={{ px: 2 , py: 1.25}} >
              <Slide
                direction="right"
                in={loading}
                style={{
                  transitionDelay: loading ? "600ms" : "0ms",
                }}
              >
                <TextField
                  key={CategoryInputs.key}
                  fullWidth
                  sx={{ m: 0.5, width: "50ch" }}
                  color="secondary"
                  label={CategoryInputs[value]}
                  name={CategoryInputs[value]}
                  onChange={handleChange}
                  variant="outlined"
                //   value={formik.values?.CategoryInputs[value]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Category color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Slide>
            </Grid>
        
        ))}
        <button type="button" onClick={() => console.log(values)}>
          Print Values
        </button>
      </form>
    </>
  );
};

export default Addinputs;
