import React from "react";
import "./sucursales.css";
import mapsbs from "../../assets/mapas.jpg";
import mapscba from "../../assets/mapscba.png";

export const Sucursales = () => {
  return (
    <section className="sucursales-container">
        < div className="sucursales">
        <h2>Sucursales Buenos Aires</h2>
      <div className="maps">
        <img src={mapsbs} alt="maps" />
      </div>
      <div className="info-sobre-sucursales">
        <article>
          <div className="informacion-sucursal">
            <h3> <span> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
              color="white" 
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg></span> Av 25 de Mayo al 105, 2do Piso, CABA</h3>
            <p>Telefono: +54 11 38098054</p>
            <p>Email: sucursal25demayo@rentsale.com</p>
          </div>
        </article>
        <article>
          <div className="informacion-sucursal">
            <h3> <span> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
              color="white" 
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg></span> Av Adolfo Alsina al 1206, 1er Piso, CABA</h3>
            <p>Telefono: +54 11 37974375</p>
            <p>Email: sucursaladolfoalsina@rentsale.com</p>
          </div>
        </article>
      </div>
    </div>
    < div className="sucursales">
      <h2>Sucursales Cordoba</h2>
      <div className="maps">
        <img src={mapscba} alt="maps" />
      </div>
      <div className="info-sobre-sucursales">
        <article>
          <div className="informacion-sucursal">
            <h3> <span> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
              color="white" 
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg></span> Av Arturo M al 203, 1er Piso, Cordoba</h3>
            <p>Telefono: +54 11 38098054</p>
            <p>Email: sucursal25demayo@rentsale.com</p>
          </div>
        </article>
        <article>
          <div className="informacion-sucursal">
            <h3> <span> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
              color="white" 
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg></span> Av Ricardo de Tejeda, 1er Piso, Cordoba</h3>
            <p>Telefono: +54 11 37974375</p>
            <p>Email: sucursaladolfoalsina@rentsale.com</p>
          </div>
        </article>
      </div>
    </div>
    </section>
  );
};
