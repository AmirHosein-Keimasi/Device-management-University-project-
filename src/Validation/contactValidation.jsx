import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  nameProduct: Yup.string().required("نام ایتم الزامی می باشد"),
  categorys: Yup.string().required("انتخاب دسته بندی الزامی می باشد"),
  discription: Yup.string(),
});
