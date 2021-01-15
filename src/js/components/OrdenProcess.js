import React from 'react';
import { Link } from 'react-router-dom';
import {FaExternalLinkAlt} from 'react-icons/fa'

const OrdenProcess = ({numOrden, fecha, estado}) => {
  return ( 
    <div className="cont-orden-process">
      <div className="num-orden">{numOrden}</div>
      <div className="fecha">{fecha}</div>
      <div className="estado">
        <div className={estado === "terminado" ? "circle-finish" : "circle-inProcess"}></div>
        {estado}
      </div>
      <div className="ver-detalle">
        <Link to={`/orden/${numOrden}`} >
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
   );
}
 
export default OrdenProcess;