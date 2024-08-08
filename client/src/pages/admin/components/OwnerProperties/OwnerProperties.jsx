import React, { useEffect } from 'react'
import './OwnerProperties.css'
import {useParams} from 'react-router-dom'
import { useProperties } from '../../../../hooks/useProperties'
import { Card } from '../../../../components/Card/Card'
import { HeaderDash } from '../HeaderDash/HeaderDash'
export const OwnerProperties = () => {

    const { PropertiesOwner, properties, isloading } =  useProperties()

    const {id} = useParams()

    useEffect(() => {
        PropertiesOwner(id)
    }, [])

  return (
    <>
    <HeaderDash />
    <section className='owner-properties'>
        <div className='owner-properties-container'>
        {isloading ? (
          <div className="loading">Cargando...</div>
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
            />
          ))
        )}
        </div>
    </section>
    </>
  )
}
