import axios from "axios";


const SERVER_URL="http://localhost/v1/"

// Route const"http://localhost:9000/contacts/:contactId "
//Get Categorys
export const getcategorys=()=>{
    const url = `${SERVER_URL}get_category_list.php`
    return axios.get(url)
}

//Get Product
export const getProduct=(itemId)=>{
    const url = `${SERVER_URL}get_product_list.php?id_category=${itemId}`
    return axios.get(url)
}

//Post Create Contacts
export const addProduct=(contact)=>{
    const url = `${SERVER_URL}/contacts`
    return axios.post(url,contact)
}
//Get All Groups
export const getAllGroups=()=>{
    const url = `${SERVER_URL}/groups`
    return axios.get(url)
}

//Get Groups
export const getGroups=(groupstId)=>{
    const url = `${SERVER_URL}/groups/${groupstId}`
    return axios.get(url)
}



//PUT Update Contacts
export const UpdateContacts=(contact,contactId)=>{
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.put(url,contact)
}
//Delete Contacts
export const DeleteContacts=(contactId)=>{
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.delete(url)
}