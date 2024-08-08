import axios from './axios'

export const getSales = async () => axios.get('/properties/sale')
export const addSale = async (data) => {
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

    return axios.post('/properties/sale', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
export const getSaleByIdResp = async (id) => axios.get(`/properties/sale/${id}`)
export const deleteSaleByIdResp = async (id) => axios.delete(`/properties/sale/${id}`)