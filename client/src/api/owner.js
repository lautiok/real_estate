import axios from "./axios"

export const getOwnersRes = () => axios.get(`/user/owners`)
export const createOwners = data => axios.post(`/user/owners`, data)
export const getOwnerRes = (id) => axios.get(`/user/owners/${id}`)
export const updateOwnerRes = (id, data) => axios.put(`/user/owners/${id}`, data)
export const deleteOwnerRes = id => axios.delete(`/user/owners/${id}`)