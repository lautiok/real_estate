import React, { useEffect } from "react";
import { Item } from "../../components/item/Item";
import { useRent } from "../../hooks/useRent";
import { useParams } from "react-router-dom";

export const ItemRent = () => {
  const { id } = useParams();
  const { propertyRent, getPropertyByIdRent, isloading } = useRent();

  useEffect(() => {
    getPropertyByIdRent(id);
  }, []);
  return (
    <main>
      <Item
        direccion={propertyRent.direccion}
        localidad={propertyRent.localidad}
        provincia={propertyRent.provincia}
        descripcion={propertyRent.descripcion}
        metrosCuadrados={propertyRent.mcuadrados}
        ambientes={propertyRent.ambientes}
        habitaciones={propertyRent.dormitorios}
        baños={propertyRent.banos}
        contacto={propertyRent.contacto}
        price={propertyRent.price}
        type={propertyRent.type}
        images={propertyRent.images}
        isloading={isloading}
      />
    </main>
  );
};
