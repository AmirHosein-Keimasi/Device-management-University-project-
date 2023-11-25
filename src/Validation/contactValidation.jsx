import * as Yup from "yup";

export const FornSchema = Yup.object().shape({
  nameProduct: Yup.string().required("نام ایتم الزامی می باشد"),
  categorys: Yup.string().required("انتخاب دسته بندی الزامی می باشد"),
  discription: Yup.string(),
});
export const DateSchema = Yup.object().shape({
  DateTimerPicker: Yup.date().required("وارد کردن تاریخ سرویس الزامی میباشد"),
  discription: Yup.string(),
});
