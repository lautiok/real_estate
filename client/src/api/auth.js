import axios from "./axios"

export const loginRequest = data => axios.post(`/auth/login`, data)
export const verifyToken = token => axios.post(`/auth/verify`, token)
export const obtenerUsers = () => axios.get(`/auth/users`)
export const getUserRes = id => axios.get(`auth/users/${id}`)
export const updateUserRes = (id, data) => axios.put(`/auth/users/${id}`, data)
export const delateUser = id => axios.delete(`/auth/users/${id}`)
export const register = data => axios.post(`/auth/register`, data)