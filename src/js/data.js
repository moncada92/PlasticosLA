export default function dataOrders () {
  return [
    {
      numero_orden: 1234567,
      cliente: 'empresa 1',
      producto: 'botella plastica',
      cantidad: '5000',
      estado: 'terminado',
      fecha_ini: '02/01/2021',
      fecha_fin: '05/01/2021',
      hora_ini: '7:00',
      hora_fin: '19:00',
      produccion_process: [
        {
          materia_prima_directa: 88000,
          mano_obra_directa: 14000,
          gasto_indirect_fabric: 18000,
        }
      ]
    },
    {
      numero_orden: 1234327,
      cliente: 'empresa 2',
      producto: 'botella plastica',
      cantidad: '10000',
      estado: 'terminado',
      fecha_ini: '05/01/2021',
      fecha_fin: '10/01/2021',
      hora_ini: '9:00',
      hora_fin: '19:00',
      produccion_process: [
        {
          materia_prima_directa: 88000,
          mano_obra_directa: 14000,
          gasto_indirect_fabric: 18000,
        }
      ]
    },
    {
      numero_orden: 1265599,
      cliente: 'empresa 3',
      producto: 'botella plastica',
      cantidad: '8000',
      estado: 'En proceso',
      fecha_ini: '15/01/2021',
      fecha_fin: '20/01/2021',
      hora_ini: '7:00',
      hora_fin: '19:00',
      produccion_process: [
        {
          materia_prima_directa: 88000,
          mano_obra_directa: 14000,
          gasto_indirect_fabric: 18000,
        }
      ]
    },

  ]
}