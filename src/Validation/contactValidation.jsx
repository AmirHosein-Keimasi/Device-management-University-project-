import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  nameProduct: Yup.string().required("نام ایتم الزامی می باشد"),
  categorys: Yup.string().required("انتخاب دسته بندی الزامی می باشد"),
  discription: Yup.string(),
});
export const DateSchema = Yup.object().shape({
  DateTimerPicker: Yup.date(),
  discription: Yup.string(),
});
export const Category = Yup.object().shape({
  DateTimerPicker: Yup.date(),
  discription: Yup.string(),
});
export const Inputss = Yup.object().shape({
  nameProduct: Yup.string().required("نام ایتم الزامی می باشد"),
  CategoryInput: Yup.string().required("نام ایتم الزامی می باشد"),
});