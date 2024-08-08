import React from "react";
import { Helmet } from "react-helmet-async";
import { RentCardPage } from "../components/RentCardPage/RentCardPage";
export const Rent = () => {
  return (
    <>
        <Helmet>
          <title>
            Rent | RentSale Inmobiliaria | venta y alquiler de propiedades en
            Argentina | zona norte | zona oeste | zona sur | zona este | capital
            federal{" "}
          </title>
          <meta
            name="description"
            content=" Rent | RentSale Inmobiliaria | venta y alquiler de propiedades en Argentina |  zona norte | zona oeste | zona sur | zona este | capital federal "
          />
          <meta
            name="keywords"
            content="rentsale, inmobiliaria, alquiler de propiedades en Argentina,  zona norte, zona oeste, zona sur, zona este, capital federal, buenos aires, caba, amba, cordoba, mendoza, tucuman, bariloche"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Spanish" />
          <meta name="author" content="RentSale Inmobiliaria" />
          <meta name="copyright" content="RentSale Inmobiliaria" />
          <meta name="revisit-after" content="1 days" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="title"
            content="Rent | RentSale Inmobiliaria | venta y alquiler de propiedades en Argentina |  zona norte | zona oeste | zona sur | zona este | capital federal "
          />
        </Helmet>
      <main>
        <RentCardPage />
      </main>
    </>
  );
};
