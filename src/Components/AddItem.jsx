import { COMMENT, PURPLE } from "../Layouts/Themes/colors";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import { Add } from "@mui/icons-material";
import Lottie from "react-lottie";
import * as iGafVbshdn from "../Assets/iGafVbshdn.json";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DateTimerPicker from "./DateTimerPicker";
import { useEffect, useState } from "react";
import { getCategorys } from "../Container/Contactsservises";
import { Helmet } from "react-helmet-async";
import { Box, Slide } from "@mui/material";
import "../App.css";

const AddItem = ({ helmetTitle }) => {
  const [CategoryAlldata, setCategorydata] = useState([]);
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: iGafVbshdn,
  };

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getCategorys();
        setCategorydata(data);
        // console.log(CategoryAlldata);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchDate();
    };
  }, []);
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
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
  
      >
        <Grid xs={6} sm={6} md={6} lg={6} xl={8} sx={{ mt: 1, ml: 100 }}>
          <Box
            sx={{
              position: "absolute",
              zIndex: "-1",
              opacity: "80%",
            }}
          >

            {/* aks */}
          </Box>

          {/* <img
            src={gorbe}
            height="400px"
            style={{
              position: "absolute",
              zIndex: "-1",
              left: "100px",
              opacity: "50%",
            }}
          /> */}
        </Grid>

        <Grid xs={6} sm={6} md={4} lg={4} xl={4}>
          <div className="row mt-5">
            <div className="col-md-6">
              {/* {errors?.map((error,index)=>(
                    <p key={index} className="text-danger">{error.message}</p>
                  ))} */}
              <Formik
                initialValues={{
                  name: "",
                  daysLeft: "",
                  periodService: "",
                  CreateAt: "",
                  discription: "",
                  categorys: "",
                }}
                validationSchema={contactSchema}
                onSubmit={(values) => {
                  console.log("yo ", values);
                }}
              >
                <Form>
                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? "350ms" : "0ms",
                    }}
                  >
                    <div className="mb-2">
                      <Field
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="نام ایتم"
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <div className="text-danger">{msg}</div>
                        )}
                      />
                    </div>
                  </Slide>
                  {/* <div className="mb-2">
                    <Field
                      name="photo"
                      type="text"
                      className="form-control"
                      placeholder="آدرس تصویر"
                    />

                    <ErrorMessage
                      name="photo"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                  </div> */}
                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? "450ms" : "0ms",
                    }}
                  >
                    <div className="mb-2">
                      <Field
                        name="daysLeft"
                        type="number"
                        className="form-control"
                        placeholder="دوره سرویس"
                      />

                      <ErrorMessage
                        name="daysLeft"
                        render={(msg) => (
                          <div className="text-danger">{msg}</div>
                        )}
                      />
                    </div>
                  </Slide>
                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? "550ms" : "0ms",
                    }}
                  >
                    <div className="mb-2">
                      <Field
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="آدرس ایمیل"
                      />

                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <div className="text-danger">{msg}</div>
                        )}
                      />
                    </div>
                  </Slide>
                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? "650ms" : "0ms",
                    }}
                  >
                    <div className="mb-2">
                      <Field
                        name="job"
                        type="text"
                        className="form-control"
                        placeholder="شغل"
                      />

                      <ErrorMessage
                        name="job"
                        render={(msg) => (
                          <div className="text-danger">{msg}</div>
                        )}
                      />
                    </div>
                  </Slide>
                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? "750ms" : "0ms",
                    }}
                  >
                    <div className="mb-2">
                      <Field
                        name="categorys"
                        as="select"
                        className="form-control"
                      >
                        <option value="">انتخاب گروه</option>
                        {CategoryAlldata.length > 0 &&
                          CategoryAlldata.map((group) => (
                            <option key={group.id} value={group.name}>
                              {group.name}
                            </option>
                          ))}
                      </Field>

                      <ErrorMessage
                        name="categorys"
                        render={(msg) => (
                          <div className="text-danger">{msg}</div>
                        )}
                      />
                    </div>
                  </Slide>
                  <DateTimerPicker />
                </Form>
              </Formik>

              <div className="mt-4">
                <input
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: PURPLE }}
                  value="ساخت مخاطب"
                />
                <Link
                  to={"/"}
                  className="btn mx-2"
                  style={{ backgroundColor: COMMENT }}
                >
                  انصراف
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AddItem;
