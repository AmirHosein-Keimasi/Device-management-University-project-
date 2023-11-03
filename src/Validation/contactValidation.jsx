import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string().required("نام ایتم الزامی می باشد"),
  periodService: Yup.number().required("وارد کردن دوره سرویس الزامی می باشد"),
  createAt: Yup.number().required("تاریخ درست کردن ایتم"),
  discription: Yup.string(),
  categorys: Yup.string().required("انتخاب کتگوری الزامی می باشد"),
});
