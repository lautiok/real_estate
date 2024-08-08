import { createContext, useState, useEffect } from "react";
import { postProperty } from "../api/property";

export const FilterContext = createContext();

// Proveedor de filtros
export const FilterProvider = ({ children }) => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Inicializa como falso
  const [activeFilters, setActiveFilters] = useState({}); // Cambia el nombre de isfilter a activeFilters para mayor claridad

  // Método para aplicar filtros
  const Filter = async (filters) => {
    try {
      setIsLoading(true);
      console.log("Sending Filters:", filters);
      const res = await postProperty(filters); // Realiza la llamada al backend
      setFilteredProperties(res.data);
      setActiveFilters(filters); // Guarda los filtros activos
      setIsLoading(false);
    } catch (error) {
      console.log("Filter Error:", error);
      setIsLoading(false); // Asegúrate de establecer false en caso de error
    }
  };

  return (
    <FilterContext.Provider value={{ Filter, filteredProperties, isLoading, activeFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
