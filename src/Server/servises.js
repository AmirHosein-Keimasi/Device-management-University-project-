import axios from "axios";

const SERVER_URL = "http://localhost/v1/";

//Get Categorys
export const getcategorys = () => {
  const url = `${SERVER_URL}get_category_list.php`;
  return axios.get(url);
};

//Get GetNearService
export const getNearService = () => {
  const url = `${SERVER_URL}get_near_service.php`;
  return axios.get(url);
};

//Get Product
export const getProduct = (itemId) => {
  const url = `${SERVER_URL}get_product_list.php?id_category=${itemId}`;
  return axios.get(url);
};

//Get CategoryInputs
export const getCategory = (CategoryId) => {
  const url = `${SERVER_URL}get_category.php?id_category=${CategoryId}`;
  return axios.get(url);
};

//Add Category
export const addCategory = (
  nameCategory,
  TiemService,
  imgLink,
  description,
  values
) => {
  const url = `${SERVER_URL}add_category.php?name=${nameCategory}&service_period=${TiemService}&img_link=${imgLink}&description=${description}&inputs=${values}`;
  return axios.post(url, {
    nameCategory,
    TiemService,
    imgLink,
    description,
    values,
  });
};

//Post Create Product
//http://localhost/v1/add_product.php?id_category=5&json_values={"nameProduct":"555","color":"red","size":25,"description":"fvfjknvsld;dscksdklvs"}
export const addProduct = (IdCategory, jsonValues) => {
  const url = `${SERVER_URL}add_product.php?id_category=${IdCategory}&json_values=${jsonValues}`;
  return axios.post(url, {
    id_category: IdCategory,
    jsonValues: jsonValues,
  });
};

//Post Date Servis Product
export const addProductService = (itemId, discription, newDate) => {
  const url = `${SERVER_URL}add_product_service_info.php?id_product=${itemId}&discription=${discription}&time_service=${
    newDate / 1000
  }`;
  return axios.post(url, {
    itemId: itemId,

    discription: discription,
    newDate: newDate,
  });
};
