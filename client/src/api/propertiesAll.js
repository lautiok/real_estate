import axios from "./axios"


export const getObtenerPropertyRes = (id) => axios.get(`/properties/all/${id}`)
export const getPropertiesAllRes = () => axios.get(`/properties/all`)