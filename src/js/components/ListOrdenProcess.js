import React from 'react';
import OrdenProcess from './OrdenProcess';

const ListOrdenProcess = ({ordenes}) => {
  return ( 
    <div className="container list-orden">
      <div className="head-orden">
        <div>Numero de orden</div>
        <div>Fecha</div>
        <div>Estado</div>
        <div>Ver info</div>
      </div>
      {
        ordenes.map((orden) =>
        <OrdenProcess
          numOrden={orden.numero_orden}
          fecha={`${orden.fecha_ini} - ${orden.fecha_fin}`}
          estado={orden.estado}
          key={orden.numero_orden}
        />
        )
      }
    </div>
   );
}
 
export default ListOrdenProcess;