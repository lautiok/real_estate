import React, { useEffect, useState } from "react";
import { useSale } from "../../hooks/useSale";
import { Card } from "../Card/Card";
import { Isloading } from "../Isloading/IsLoading";

export const SaleCardPage = () => {
  const { properties, getProperties } = useSale();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPropertiesData = async () => {
      await getProperties();
      setIsLoading(false);
    };
    getPropertiesData();
  }, []);

  return (
    <section className="rent-card">
      <h2>Properties for sale</h2>
      <div className="rent-card-container">
        {isloading ? (
          <div className="loading"> <Isloading /> </div>
        ) : (
          properties.map((property) => (
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
        )}
      </div>
    </section>
  );
};
