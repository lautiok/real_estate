import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRent } from "../../hooks/useRent";
import { Card } from "../Card/Card";
import { Isloading } from "../Isloading/IsLoading";

export const CardPropertiesRent = () => {
  const { properties, getProperties } = useRent();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPropertiesData = async () => {
      await getProperties();
      setIsLoading(false);
    };
    getPropertiesData();
  }, []);

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
    { isLoading ? <div className="loading"><Isloading /> </div> : (
      <div className="card-properties-sale">
      <h2>Properties for rent</h2>
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
