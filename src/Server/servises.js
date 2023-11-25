import axios from "axios";

const SERVER_URL = "http://localhost/v1/";

// Route const"http://localhost:9000/contacts/:contactId "
//Get Categorys
export const getcategorys = () => {
  const url = `${SERVER_URL}get_category_list.php`;
  return axios.get(url);
};

//Get Product
export const getProduct = (itemId) => {
  const url = `${SERVER_URL}get_product_list.php?id_category=${itemId}`;
  return axios.get(url);
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
export const ServisProduct = (itemId, ProductName, discription) => {
  const url = `${SERVER_URL}add_product.php?id_category=${itemId}&name_product=${ProductName}&discription=${discription}`;
  return axios.post(url, {
    id_category: itemId,
    name_product: ProductName,
    discription: discription,
  });
};

