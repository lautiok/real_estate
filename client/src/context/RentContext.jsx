import { createContext, useState } from "react";
import {
  addRent,
  deleteRentByIdResp,
  getRentByIdResp,
  getRents,
} from "../api/rentApi";
import { useProperties } from "../hooks/useProperties";
export const RentContext = createContext();

export const RentProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [propertyRent, setPropertyRent] = useState([]);
  const { propertiesAll } = useProperties();
  const [isloading, setIsloading] = useState(false);

  const getProperties = async (filters) => {
    try {
      setIsloading(true);
      const res = await getRents(filters);
      setProperties(res.data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  const addPropertyRent = async (data) => {
    try {
      const res = await addRent(data);
      return res.data;
    } catch (error) {
      console.error(error.response?.data || 'Error during signup');
      throw error;
    }
  };

  const getPropertyByIdRent = async (id) => {
    try {
      setIsloading(true);
      const res = await getRentByIdResp(id);
      setPropertyRent(res.data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  const delateRent = async (id) => {
    try {
      const res = await deleteRentByIdResp(id);
      propertiesAll();
      return res.data;
    } catch (error) {
      console.error(error.response?.data || 'Error during signup');
      throw error;
    }
  };

  return (
    <RentContext.Provider
      value={{
        properties,
        getProperties,
        propertyRent,
        getPropertyByIdRent,
        delateRent,
        addPropertyRent,
        isloading,
      }}
    >
      {children}
    </RentContext.Provider>
  );
};
