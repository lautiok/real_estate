import { createContext, useState } from "react";
import { getObtenerPropertyRes, getPropertiesAllRes } from "../api/propertiesAll";

export const PropertiesContext = createContext()

export const PropertiesProvider = ({ children }) => {
    const [propertieAll, setPropertieAll,] = useState([])
    const [properties, setProperties,] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const propertiesAll = async () => {
        try {
            setIsLoading(true);
            const res = await getPropertiesAllRes();
            setPropertieAll(res.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            throw error;
        }
    }
 

    const PropertiesOwner = async (id) => {
        try {
            setIsLoading(true);
            const res = await getObtenerPropertyRes(id);
            setProperties(res.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            throw error;
        }
    };


    return (
        <PropertiesContext.Provider value={{
            PropertiesOwner,
            properties,
            isLoading,
            propertieAll,
            propertiesAll

        }}>
            {children}
        </PropertiesContext.Provider>
    )
}