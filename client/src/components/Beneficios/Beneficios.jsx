import React from "react";
import "./Beneficios.css";
export const Beneficios = () => {
  return (
    <section className="benefits-page-container">
      <div className="benefits-page">
        <h1>Búsqueda clara y rápida</h1>
        <p>
          Pensamos nuestros filtros, mapas y comparadores de avisos para
          simplificarte la experiencia.
        </p>
      </div>
      <div className="benefits-page">
        <h1>Tenés tu propia sección</h1>
        <p>
          Desde tu cuenta podés acceder de forma segura a los avisos
          contactados, favoritos, las notas que creaste y más.
        </p>
      </div>
      <div className="benefits-page">
        <h1>Variedad de anunciantes</h1>
        <p>
          Inmobiliarias y dueños directos de todo el país ofrecen las mejores
          opciones de propiedades para vos.
        </p>
      </div>
    </section>
  );
};
