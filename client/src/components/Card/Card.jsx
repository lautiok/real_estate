import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({
  id,
  images,
  price,
  direction,
  location,
  provincia,
  descripcion,
  metrosCuadrados,
  ambientes,
  habitaciones,
  baños,
  contacto,
  type
}) => {
  return (
    <article className="card" key={id}>
      <div className="card-img">
        <img src={images[0].url} alt={direction} />
      </div>
      <div className="card-info-title">
        <h3>{direction}</h3>
        <p>{location}, {provincia}</p>
      </div>
      <div className="card-info-details">
        <p>{descripcion.substring(0, 70)}...</p>
        <div className="card-info-details-elements">
          <p>{metrosCuadrados} m<sup>2</sup></p>
          <p>{ambientes} amb</p>
          <p>{habitaciones} dorm</p>
          <p>{baños} baños</p>
        </div>
      </div>
      <div className="btn-container-card">
        <div>
          <p className="price-card">{price}<span>USD</span></p>  
        </div>
        <div className="btn-card-container-details">
          <a className="btn-card-wa" href={`https://wa.me/${contacto}`} target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
          <Link className="btn-card" to={`/item/${type}/${id}`}>
            See details
          </Link>
        </div>
      </div>
    </article>
  );
};
