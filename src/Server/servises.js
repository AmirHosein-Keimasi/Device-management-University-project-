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
export const addProduct = (itemId, ProductName, discription) => {
  const url = `${SERVER_URL}add_product.php?id_category=${itemId}&name_product=${ProductName}&discription=${discription}`;
  return axios.post(url, {
    id_category: itemId,
    name_product: ProductName,
    discription: discription,
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
