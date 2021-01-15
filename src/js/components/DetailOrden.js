import React, {Fragment, useState} from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {FaLongArrowAltLeft} from 'react-icons/fa'

const DetailOrden = ({getOrden}) => {

  const [openOrden, setOpenOrden] = useState(false);

  const days = parseInt(getOrden.fecha_fin.substr(0,2)) - parseInt(getOrden.fecha_ini.substr(0,2))

  const minToal = (12 * 60) * days;
  const productXmin =  (parseInt(getOrden.cantidad) / minToal).toFixed(2) 
  
  const openOrdenHandler = () => {
    setOpenOrden(!openOrden)
  }

  return ( 
    <Fragment>
      <Navbar />
      <main>
        <div className="container">
        <div className="back">
          <Link to="/">
            <FaLongArrowAltLeft /> Atras
          </Link>
        </div>
          <h2>Numero de orden: {getOrden.numero_orden}</h2>
          {
            getOrden.estado === "terminado" ?
            <div className="table-data">
              <div>Material Prima Directa: {getOrden.produccion_process[0].materia_prima_directa}</div>
              <div>Mano de Obra Directa: {getOrden.produccion_process[0].mano_obra_directa}</div>
              <div>Gastos indirectos de fabrica: {getOrden.produccion_process[0].gasto_indirect_fabric}</div>
              <div>Total: {
                getOrden.produccion_process[0].materia_prima_directa +
                getOrden.produccion_process[0].mano_obra_directa +
                getOrden.produccion_process[0].gasto_indirect_fabric
  
              }</div>
            </div>
            :
            <h3>Estos Datos estaran disponibles cuando la producción finalice</h3>
          }
          {
            getOrden.estado === "terminado" &&
            <div>
              <h3>Cantidad Producida por minuto: {productXmin}</h3>
            </div>
          }
          <div>
            <button onClick={openOrdenHandler}>{
              openOrden ?
              'Ocultar Orden de Producción'
              : 'Ver Orden de Producción'
            }</button>
          </div>
          {
            openOrden &&
            <div className="container-orden">
              <div>Nombre Cliente: {getOrden.cliente}</div>
              <div>Producto: {getOrden.producto}</div>
              <div>Cantidad: {getOrden.cantidad}</div>
              <div>Estado: {getOrden.estado}</div>
              <div>Fecha Inicio: {getOrden.fecha_ini}</div>
              <div>Fecha Fin: {getOrden.fecha_fin}</div>

            </div>
          }
        </div>
        
      </main>
    </Fragment>
   );
}
 
export default DetailOrden
