import { createContext, useEffect, useState } from "react";
import { createOwners, deleteOwnerRes, getOwnerRes, getOwnersRes, updateOwnerRes } from "../api/owner";

export const OwnerContext = createContext();

export const OwnerProvider = ({ children }) => {
    const [owners, setOwners] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getOwners = async () => {
        try {
            setIsLoading(true);
            const response = await getOwnersRes();
            console.log('Owners fetched:', response.data); // Log para verificar la respuesta
            setOwners(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            throw error;
        }
    };

    const getOwner = async (id) => {
        try {
            const res = await getOwnerRes(id);
            return res.data;
        } catch (error) {
            console.error(error); 
            throw error;
        }
    };

    const createOwner = async (data) => {
        try {
            const res = await createOwners(data);
            return res.data;
        } catch (error) {
            console.error(error.response?.data || 'Error during signup');
            throw error;
        }
    };

    const updateOwner = async (id, data) => {
        try {
            const res = await updateOwnerRes(id, data);
            return res.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const deleteOwner = async (id) => {
        try {
            await deleteOwnerRes(id);
            console.log('Owner deleted, fetching owners...'); // Log para verificar eliminación
            getOwners();
        } catch (error) {
            console.error(error);    
            throw error;
        }
    };

    useEffect(() => {
        console.log('Fetching owners...'); // Log para verificar que el useEffect se ejecuta
        getOwners();
    }, []);
    

    return (
        <OwnerContext.Provider value={{
            getOwners,
            owners,
            isLoading,
            deleteOwner,
            createOwner, 
            getOwner,
            updateOwner
        }}>
            {children}
        </OwnerContext.Provider>
    );
};
