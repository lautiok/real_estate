import React, { useEffect } from 'react'
import { Item } from '../../components/item/Item'
import { useSale } from '../../hooks/useSale'
import { useParams } from 'react-router-dom'

export const ItemSale = () => {
    const { propertySale, getPropertyByIdSale, isloading } = useSale()
    const { id } = useParams()

    useEffect(() => {
        getPropertyByIdSale(id)
    }, [])


  return (
    <main>
        <Item 
        direccion={propertySale.direccion}
        localidad={propertySale.localidad}
        provincia={propertySale.provincia}
        descripcion={propertySale.descripcion}
        metrosCuadrados={propertySale.mcuadrados}
        ambientes={propertySale.ambientes}
        habitaciones={propertySale.dormitorios}
        baños={propertySale.banos}
        contacto={propertySale.contacto}
        price={propertySale.price}
        type={propertySale.type}
        images={propertySale.images}
        isloading={isloading}
        />
    </main>
  )
}
