import React from "react";
import { Card } from "../Card/Card";
import "./PageFilter.css";

export const PageFilter = ({ properties }) => {
  return (
    <div className="page-filter">
      {properties.map(property => (
        <Card 
        key={property._id}
        id={property._id}
        image={property.images.url}
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
        />
      ))}
    </div>
  );
};
