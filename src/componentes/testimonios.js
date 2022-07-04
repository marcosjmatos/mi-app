import React from "react";
import '../stylesheets/testimonio.css';

export function Testimonio(props) {
  return (<div className="contenedor-testimonio">
    <img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.image}.jpg`)} alt="foto"/>
    <div className="contenedor-texto-testimonio">
      <p className="nombre-testimonio"><strong>{props.name}</strong> en {props.country}</p>
      <p className="cargo-testimonio">{props.position} en <strong>{props.company}</strong></p>
      <p className="texto-testimonio">"{props.text}"</p>

    </div>
  </div>);
}

