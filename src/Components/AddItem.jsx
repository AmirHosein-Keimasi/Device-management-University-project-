import { COMMENT, PURPLE } from "../Layouts/Themes/colors";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "../Validation/contactValidation";
import CustomDivider from "../Constants/CustomDivider";
import { Add } from "@mui/icons-material";

import gorbe from "../Assets/gorbe.png";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DateTimerPicker from "./DateTimerPicker";

const AddItem = () => {
  const groups = [
    {
      id: "1",
      name: "همکار",
    },
    {
      id: "2",
      name: "دوست",
    },
    {
      id: "3",
      name: "فامیل",
    },
    {
      id: "4",
      name: "سرویس",
    },
    {
      id: "5",
      name: "آشنا",
    },
    {
      id: "6",
      name: "پارتنر",
    },
  ];

  return (
    <>
      {" "}
      <CustomDivider
        bColor="#primary.main"
        cColor="primary"
        icon={<Add />}
        align="center"
        text={"اضافه کردن یک ایتم"}
      />
      <Grid containe className="p-3">
        <Grid xs={6} sm={6} md={6} lg={6} xl={6} sx={{ mt: 1 }}>
          <img
            src={gorbe}
            height="400px"
            style={{
              position: "absolute",
              zIndex: "-1",
              left: "100px",
              opacity: "50%",
            }}
          />
        </Grid>

        <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className="row mt-5">
            <div className="col-md-6">
              {/* {errors?.map((error,index)=>(
                    <p key={index} className="text-danger">{error.message}</p>
                  ))} */}
              <Formik
                initialValues={{
                  fullname: "",
                  photo: "",
                  mobile: "",
                  email: "",
                  job: "",
                  group: "",
                }}
                validationSchema={contactSchema}
                onSubmit={(values) => {
                  console.log("yo ", values);
                }}
              >
                <Form>
                  <div className="mb-2">
                    <Field
                      name="fullname"
                      type="text"
                      className="form-control"
                      placeholder="نام و نام خانوادگی"
                    />
                    <ErrorMessage
                      name="fullname"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                  </div>
                  <div className="mb-2">
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
                  </div>
                  <div className="mb-2">
                    <Field
                      name="mobile"
                      type="number"
                      className="form-control"
                      placeholder="شماره موبایل"
                    />

                    <ErrorMessage
                      name="mobile"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                  </div>
                  <div className="mb-2">
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="آدرس ایمیل"
                    />

                    <ErrorMessage
                      name="email"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                  </div>
                  <div className="mb-2">
                    <Field
                      name="job"
                      type="text"
                      className="form-control"
                      placeholder="شغل"
                    />

                    <ErrorMessage
                      name="job"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                  </div>
                  <div className="mb-2">
                    <Field name="group" as="select" className="form-control">
                      <option value="">انتخاب گروه</option>
                      {groups.length > 0 &&
                        groups.map((group) => (
                          <option key={group.id} value={group.id}>
                            {group.name}
                          </option>
                        ))}
                    </Field>

                    <ErrorMessage
                      name="group"
                      render={(msg) => <div className="text-danger">{msg}</div>}
                    />
                  </div>
                  <div className="mx-2">
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
                </Form>
              </Formik>

              <DateTimerPicker />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AddItem;
