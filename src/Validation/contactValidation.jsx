import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string().required("نام ایتم الزامی می باشد"),
  discription: Yup.string(),
  categorys: Yup.string().required("انتخاب کتگوری الزامی می باشد"),
});
