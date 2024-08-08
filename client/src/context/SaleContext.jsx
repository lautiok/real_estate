import { createContext, useState } from "react";
import { addSale, deleteSaleByIdResp, getSaleByIdResp, getSales } from "../api/saleApi";
import { useProperties } from "../hooks/useProperties";


export const SaleContext = createContext()

export const SaleProvider = ({ children }) => {
    const [properties, setProperties] = useState([])
    const [propertySale, setPropertySale] = useState([])
    const [isloading, setIsloading] = useState(false)
    const {propertiesAll} = useProperties();
    
    

    const getProperties = async (filters) => {
        try {
            setIsloading(true)
            const res = await getSales(filters);
            setProperties(res.data);
            setIsloading(false)
        } catch (error) {
            console.log(error);
            setIsloading(false)
        }
    }

    const addPropertySale = async (data) => {
        try {
            const res = await addSale(data);
            return res.data;
        } catch (error) {
            console.error(error.response?.data || 'Error during signup');
        }
    }

    const getPropertyByIdSale = async (id) => {
        try {
            setIsloading(true)
            const res = await getSaleByIdResp(id);
            setPropertySale(res.data);
            setIsloading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const delateSale = async (id) => {
        try {
            const res = await deleteSaleByIdResp(id);
            setPropertySale(res.data);
            propertiesAll();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <SaleContext.Provider value={{
            properties,
            getProperties,
            propertySale,
            getPropertyByIdSale,
            delateSale,
            addPropertySale,
            isloading
        }}>
            {children}
        </SaleContext.Provider>
    )
}