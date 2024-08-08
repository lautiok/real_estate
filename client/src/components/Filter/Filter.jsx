import React, { useEffect, useState } from "react";
import "./Filter.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../hooks/useFilter";
import { propertyTypeOptions, locationOptions, priceRangeOptions } from "../../utils/OptionSelect";

export const Filter = () => {
  const [activeButton, setActiveButton] = useState('Sale'); 
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const { Filter} = useFilter();

  const navigate = useNavigate();

  const handleSearch = () => {
    const filters = {
      type: activeButton,
      propertyType: propertyType || undefined,
      provincia: location || undefined,
      priceRange: priceRange || undefined,
    };
    Filter(filters);
    navigate('/filter')
  };
  



  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '10px',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #000',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#474747',
    }),
  };

  return (
    <section className="filter">
      <div className="filter-container-br">
        <button
          className={`filter-btn ${activeButton === 'Sale' ? 'active' : ''}`}
          onClick={() => setActiveButton('Sale')}
        >
          Buys
        </button>
        <button
          className={`filter-btn ${activeButton === 'Rent' ? 'active' : ''}`}
          onClick={() => setActiveButton('Rent')}
        >
          Rent
        </button>
      </div>
      <div className="filter-container-select">
        <div className="select-filter-container">
          <h2>Property Type</h2>
          <Select
            className="filter-select"
            placeholder="Select Property"
            options={propertyTypeOptions}
            styles={customStyles}
            onChange={(selectedOption) => setPropertyType(selectedOption?.value || '')}
          />
        </div>
        <div className="select-filter-container">
          <h2>Location</h2>
          <Select
            className="filter-select"
            placeholder="Select Location"
            options={locationOptions}
            styles={customStyles}
            onChange={(selectedOption) => setLocation(selectedOption?.value || '')}
          />
        </div>
        <div className="select-filter-container price-range">
          <h2>Price Range</h2>
          <Select
            className="filter-select"
            placeholder="Select Price"
            options={priceRangeOptions}
            styles={customStyles}
            onChange={(selectedOption) => setPriceRange(selectedOption?.value || '')}
          />
        </div>
      </div>
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </section>
  );
};
