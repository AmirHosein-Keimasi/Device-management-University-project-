import axios from "axios";


const SERVER_URL="http://localhost/v1"

// Route const"http://localhost:9000/contacts/:contactId "
//Get All Contacts
export const getcategorys=()=>{
    const url = `${SERVER_URL}/get_category_list.php`
    return axios.get(url)
}

//Get Contact
export const getContact=(contactId)=>{
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.get(url)
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

//Post Create Contacts
export const CreateContacts=(contact)=>{
    const url = `${SERVER_URL}/contacts`
    return axios.post(url,contact)
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