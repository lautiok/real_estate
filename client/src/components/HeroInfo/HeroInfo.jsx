import React from "react";
import "./HeroInfo.css";
import requisitos from "../../assets/requisitos.svg";
import contratos from "../../assets/contrato.svg";
import megafono from "../../assets/megafono.svg";

export const HeroInfo = () => {
  return (
    <section className="hero-info-container">
      <article className="hero-info">
        <div className="circule-info">
          <img src={requisitos} alt="requisitos" />
        </div>
        <div className="text-info">
          <h2>Requisitos para alquilar</h2>
          <p>
            Conocé los requisitos para alquilar una <br /> propiedad
          </p>
        </div>
      </article>
      <article className="hero-info">
        <div className="circule-info">
          <img src={contratos} alt="requisitos" />
        </div>
        <div className="text-info">
          <h2>Guía para comprar </h2>
          <p>
            Paso a paso y superfácil, todo lo que <br /> necesitás saber para
            comprar.
          </p>
        </div>
      </article>
      <article className="hero-info">
        <div className="circule-info">
          <img src={megafono} alt="requisitos" />
        </div>
        <div className="text-info">
          <h2>Conocé RentSale</h2>
          <p>
            Toda la información sobre cómo usar <br /> nuestra web
          </p>
        </div>
      </article>
    </section>
  );
};
