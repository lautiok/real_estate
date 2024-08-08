import React, { useEffect, useState } from "react";
import "./CardPropertiesSale.css";
import { Card } from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSale } from "../../hooks/useSale";
import { Isloading } from "../Isloading/IsLoading";

export const CardPropertiesSale = () => {
  const { getProperties, properties } = useSale();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPropertiesData = async () => {
      await getProperties();
      setIsLoading(false);
    };
    getPropertiesData();
  }, []);

  // Configuración dinámica del slider
  const dynamicSettings = {
    dots: true,
    infinite: properties.length >= 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: properties.length >= 3,
          dots: true,
        },
      },
      {
        breakpoint: 884,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: properties.length >= 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: properties.length >= 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: properties.length >= 1,
        },
      },
    ],
  };
  

  return (
    <>
      {isloading ? (
        <div className="loading">
          <Isloading />
        </div>
      ) : (
        <div className="card-properties-sale">
          <h2>Properties for Sale</h2>
          <div className="card-properties">
            <Slider {...dynamicSettings}>
              {properties.map((property) => (
                <Card
                  key={property._id}
                  id={property._id}
                  images={property.images}
                  direction={property.direccion}
                  location={property.localidad}
                  provincia={property.provincia}
                  descripcion={property.descripcion}
                  metrosCuadrados={property.mcuadrados}
                  ambientes={property.ambientes}
                  habitaciones={property.dormitorios}
                  baños={property.banos}
                  contacto={property.contacto}
                  price={property.price}
                  type={property.type}
                />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};
