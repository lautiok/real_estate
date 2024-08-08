import React from 'react';
import './FilterPage.css';
import { useFilter } from '../../hooks/useFilter';
import { Card } from '../Card/Card';
import { Filters } from '../Filters/Filters';
import { Isloading } from '../Isloading/IsLoading';

export const FilterPage = () => {
  const { filteredProperties, isLoading } = useFilter();

  return (
    <section className='filter-card'>
      <Filters />
      <div className='filter-card-container'>
        {isLoading ? (
          <div className='isloading'><Isloading /> </div> // Mensaje de carga mientras se está cargando los resultados
        ) : filteredProperties.length > 0 ? ( 
          filteredProperties.map((property) => (
            <Card
              key={property._id}
              id={property._id}
              images={property.images}
              direction={property.direccion}
              location={property.localidad}
              provincia={property.provincia}
              descripcion={property.descripcion}
              metersCuadrados={property.mcuadrados}
              ambientes={property.ambientes}
              habitaciones={property.dormitorios}
              banos={property.banos}
              contacto={property.contacto}
              price={property.price}
              type={property.type}
            />
          ))
        ) : (
          <div className='no-results'>No hay resultados</div> // Mensaje cuando no hay resultados
        )}
      </div>
    </section>
  );
};
