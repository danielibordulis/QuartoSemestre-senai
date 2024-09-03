import React from 'react'
import Titulo from '../components/Titulo'
import Onibus from '../components/Onibus';

function Portifolio() {
    const buzoes = [
        {
            modelo: 'Mercedes-Benz O500',
            placa: 'ABC-1234',
            ano: 2018,
            id: Date.now() + 1
        },
        {
            modelo: 'Volvo B12M',
            placa: 'DEF-5678',
            ano: 2019,
            id: Date.now() + 2
        },
        {
            modelo: 'Scania K360',
            placa: 'GHI-9012',
            ano: 2020,
            id: Date.now() + 3
        },
        {
            modelo: 'MAN Lion’s City',
            placa: 'JKL-3456',
            ano: 2021,
            id: Date.now() + 4
        },
        {
            modelo: 'Iveco Crossway',
            placa: 'MNO-7890',
            ano: 2017,
            id: Date.now() + 5
        },
        {
            modelo: 'Mercedes-Benz Citaro',
            placa: 'PQR-1234',
            ano: 2020,
            id: Date.now() + 6
        },
        {
            modelo: 'Volvo 7900 Hybrid',
            placa: 'STU-5678',
            ano: 2021,
            id: Date.now() + 7
        },
        {
            modelo: 'Scania Citywide',
            placa: 'VWX-9012',
            ano: 2019,
            id: Date.now() + 8
        },
        {
            modelo: 'MAN A95',
            placa: 'YZA-3456',
            ano: 2018,
            id: Date.now() + 9
        },
        {
            modelo: 'Iveco Urbanway',
            placa: 'BCD-7890',
            ano: 2020,
            id: Date.now() + 10
        },
        {
            modelo: 'Mercedes-Benz Travego',
            placa: 'EFG-1234',
            ano: 2019,
            id: Date.now() + 11
        },
        {
            modelo: 'Volvo B8R',
            placa: 'HIJ-5678',
            ano: 2021,
            id: Date.now() + 12
        },
        {
            modelo: 'Scania Touring',
            placa: 'KLM-9012',
            ano: 2020,
            id: Date.now() + 13
        },
        {
            modelo: 'MAN A22',
            placa: 'NOP-3456',
            ano: 2018,
            id: Date.now() + 14
        },
        {
            modelo: 'Iveco Daily Minibus',
            placa: 'QRS-7890',
            ano: 2021,
            id: Date.now() + 15
        },
        {
            modelo: 'Mercedes-Benz Intouro',
            placa: 'TUV-1234',
            ano: 2017,
            id: Date.now() + 16
        },
        {
            modelo: 'Volvo B11R',
            placa: 'WXY-5678',
            ano: 2020,
            id: Date.now() + 17
        },
        {
            modelo: 'Scania Metrolink',
            placa: 'ZAB-9012',
            ano: 2021,
            id: Date.now() + 18
        },
        {
            modelo: 'MAN A39',
            placa: 'CDE-3456',
            ano: 2019,
            id: Date.now() + 19
        },
        {
            modelo: 'Iveco Magelys',
            placa: 'FGH-7890',
            ano: 2020,
            id: Date.now() + 20
        }
    ];

    // console.log(onibus);
    
  return (
    <div>
      <Titulo texto={"Portifólio"} emoji={"😉👌"}/>
      <p>Estamos na página portifólio</p>

      {buzoes.map((onibus) => (
       <Onibus onibus={onibus} key={onibus.id}/> 
      ))}

      
    </div>
  )
}

export default Portifolio
