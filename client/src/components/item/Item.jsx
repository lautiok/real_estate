import React from 'react';
import './Item.css';

export const Item = ({ direccion, localidad, provincia, descripcion, metrosCuadrados, ambientes, habitaciones, baños, contacto, price, type, images, isloading }) => {
  return (
    <section className='item'>
      <div className='imagenes'>
        {images && images.map((image, index) => (
          <img key={index} src={image.url} alt={direccion} />
        ))}
      </div>
      <div className='info'>
        <div className='card-info-elements'>
          <h1>{direccion}</h1>
          <p>{localidad}, {provincia} <span>{type}</span></p>
          <div className='descripcion'>
            {isloading ? <span>Loading...</span> : descripcion && descripcion.slice(0, 400)}
            ...
          </div>
        </div>
        <div className="card-info-details-elements">
          <p>{metrosCuadrados} m<sup>2</sup></p>
          <p>{ambientes} amb</p>
          <p>{habitaciones} dorm</p>
          <p>{baños} baños</p>
        </div>
        <div className="btn-card-container-details">
          <a className="btn-card-wa-contact" href={`https://wa.me/${contacto}`} target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
          <p>{price}<span>USD</span></p>
          <button className='btn'>{type === 'rent' ? 'Rent' : 'Buy'}</button>
        </div>
        <div className='contact'>
          <h3>Contact</h3>
          <div className='card-info-elements-contact'>
            <h3>RentSale Central</h3>
            <p>Dirección: Calle XXXX, Nº XXXX, Localidad XXXX, Provincia XXXX</p>
            <p>Teléfono: +569 XXX XXXX</p>
            <p>Email: mail@mail.com</p>
          </div>
          <div className='card-info-elements-contact'>
            <h3>RentSale Zona Norte</h3>
            <p>Dirección: Calle XXXX, Nº XXXX, Localidad XXXX, Provincia XXXX</p>
            <p>Teléfono: +569 XXX XXXX</p>
            <p>Email: mail@mail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
