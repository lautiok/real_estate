import axios from "./axios";

export const getRents = async () => axios.get('/properties/rent')
export const addRent = async (data) => {
    const formData = new FormData();

    for (const key in data) {
        if (key === 'images') {
            Array.from(data[key]).forEach(file => {
                formData.append('images', file);
            });
        } else {
            formData.append(key, data[key]);
        }
    }

    return axios.post('/properties/rent', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
export const getRentByIdResp = async (id) => axios.get(`/properties/rent/${id}`)
export const deleteRentByIdResp = async (id) => axios.delete(`/properties/rent/${id}`)