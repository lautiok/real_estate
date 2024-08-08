import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/Hero/Hero'
import { Filter } from '../components/Filter/Filter'
import { CardPropertiesSale } from '../components/CardPropertiesSale/CardPropertiesSale'
import { CardPropertiesRent } from '../components/CardPropertiesRent/CardPropertiesRent'
import { HeroInfo } from '../components/HeroInfo/HeroInfo'
import { Beneficios } from '../components/Beneficios/Beneficios'
import { Sucursales } from '../components/Sucursales/Sucursales'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>RentSale Inmobiliaria | venta y alquiler de propiedades en Argentina | zona norte | zona oeste | zona sur | zona este | capital federal</title>
        <meta name="description" content="RentSale Inmobiliaria | venta y alquiler de propiedades en Argentina | zona norte | zona oeste | zona sur | zona este | capital federal" />
        <meta name="keywords" content="rentsale, inmobiliaria, venta y alquiler de propiedades en Argentina, zona norte, zona oeste, zona sur, zona este, capital federal, buenos aires, caba, amba, cordoba, mendoza, tucuman, bariloche" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="RentSale Inmobiliaria" />
        <meta name="copyright" content="RentSale Inmobiliaria" />
        <meta name="revisit-after" content="1 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="RentSale Inmobiliaria | venta y alquiler de propiedades en Argentina | zona norte | zona oeste | zona sur | zona este | capital federal" />
      </Helmet>
      <main>
        <Hero />
        <Filter />
        <HeroInfo />
        <CardPropertiesSale />
        <Beneficios />
        <CardPropertiesRent />
        <Sucursales />
      </main>
    </>
  )
}
