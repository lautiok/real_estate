import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../hooks/useFilter";
import {
  propertyTypeOptions,
  locationOptions,
  priceRangeOptions,
} from "../../utils/OptionSelect";
import "./filters.css";

export const Filters = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const { Filter, activeFilters } = useFilter();
  const [activeButton, setActiveButton] = useState(activeFilters.type || "Sale"); // Inicializa con el tipo del filtro actual o "Sale" por defecto
  const navigate = useNavigate();

  useEffect(() => {
    // Sincroniza los filtros actuales al montar el componente o cuando activeFilters cambie
    setPropertyType(activeFilters.propertyType || "");
    setLocation(activeFilters.provincia || "");
    setPriceRange(activeFilters.priceRange || "");
    setActiveButton(activeFilters.type || "Sale"); // Sincroniza el botón activo con el filtro
  }, [activeFilters]);

  const handleSearch = () => {
    const filters = {
      type: activeButton,
      propertyType: propertyType || undefined,
      provincia: location || undefined,
      priceRange: priceRange || undefined,
    };
    Filter(filters);
    navigate("/filter");
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "10px",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #000",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#474747",
    }),
  };

  return (
    <section className="filter-page">
      <div className="filter-container-br">
        <button
          className={`filter-btn ${activeButton === "Sale" ? "active" : ""}`}
          onClick={() => setActiveButton("Sale")}
        >
          Buys
        </button>
        <button
          className={`filter-btn ${activeButton === "Rent" ? "active" : ""}`}
          onClick={() => setActiveButton("Rent")}
        >
          Rent
        </button>
      </div>
      <div className="filter-container-select">
        <div className="select-filter-container">
          <h2>Property Type</h2>
          <Select
            className="filter-select"
            placeholder={activeFilters.propertyType || "Select Type"}
            options={propertyTypeOptions}
            styles={customStyles}
            value={
              propertyTypeOptions.find(
                (option) => option.value === propertyType
              ) || null
            }
            onChange={(selectedOption) =>
              setPropertyType(selectedOption?.value || "")
            }
          />
        </div>
        <div className="select-filter-container">
          <h2>Location</h2>
          <Select
            className="filter-select"
            placeholder={activeFilters.provincia || "Select Location"}
            options={locationOptions}
            styles={customStyles}
            value={
              locationOptions.find((option) => option.value === location) || null
            }
            onChange={(selectedOption) =>
              setLocation(selectedOption?.value || "")
            }
          />
        </div>
        <div className="select-filter-container price-range">
          <h2>Price Range</h2>
          <Select
            className="filter-select"
            placeholder={activeFilters.priceRange || "Select Range"}
            options={priceRangeOptions}
            styles={customStyles}
            value={
              priceRangeOptions.find((option) => option.value === priceRange) ||
              null
            }
            onChange={(selectedOption) =>
              setPriceRange(selectedOption?.value || "")
            }
          />
        </div>
      </div>
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </section>
  );
};
