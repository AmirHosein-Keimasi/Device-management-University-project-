import { COMMENT, PURPLE } from "../Layouts/Themes/colors";
import { Link, Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import { Add } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button, Slide } from "@mui/material";
import FormPng from "../Assets/FormPng.png";

import "../App.css";
import { addProduct } from "../Server/servises";
import { Box } from "dracula-ui";

const AddItem = ({ helmetTitle, CategoryAlldata }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const createContactForm = async (values) => {
    // values.preventDefault();
    try {
      // setLoading((prevLoading) => !prevLoading);                      refactor white immer

      // await contactSchema.validate(contact,{abortEarly:false})
      const { status, data } = await addProduct(values);
      if (status === 201) {
        // const allContacts = [...contacts, data];                         refactor white immer
        // setContacts(allContacts);
        // setFilterdContacts(allContacts);

        Navigate("./");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
      <Grid direction="row" justifyContent="center" alignItems="center">
        <Grid
          spacing={1}
          sx={{
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

        <Grid xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="row mt-5 d-flex m-5">
            <div className="col-md-6">
              {/* {errors?.map((error,index)=>(
                    <p key={index} className="text-danger">{error.message}</p>
                  ))} */}
              <Formik
                initialValues={{
                  name: "",
                  categorys: "",
                  discription: "",
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
                      transitionDelay: loading ? "400ms" : "0ms",
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

                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? "500ms" : "0ms",
                    }}
                  >
                    <div className="mb-2">
                      <Field
                        name="categorys"
                        as="select"
                        className="form-control"
                      >
                        <option value="">انتخاب دسته بندی </option>
                        {CategoryAlldata.length > 0 &&
                          CategoryAlldata.map((group) => (
                            <option
                              key={group.id}
                              value={group.name}
                              className="p-4 m-2"
                            >
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
                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? "600ms" : "0ms",
                    }}
                  >
                    <div className="mb-2">
                      <Field
                        name="description"
                        
                        type="discription"
                        className="form-control"
                        placeholder=" توضیحات"
                      />

                      <ErrorMessage
                        name="description"
                        render={(msg) => (
                          <div className="text-danger">{msg}</div>
                        )}
                      />
                    </div>
                  </Slide>
                </Form>
              </Formik>
              <Slide
                direction="right"
                in={loading}
                style={{
                  transitionDelay: loading ? "850ms" : "0ms",
                }}
              >
                <div className="mt-">
                  <Link  type="submit"
                    to={"/"}
                    className="btn mx-2"
                    style={{ backgroundColor: PURPLE }}
                  >
                    ایتم ساخته شد{" "}
                  </Link>
                  <Link
                    to={"/"}
                    className="btn mx-2"
                    style={{ backgroundColor: COMMENT }}
                  >
                    انصراف
                  </Link>
                </div>
              </Slide>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AddItem;
