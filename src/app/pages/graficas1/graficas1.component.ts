import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1 = [
    10, 15, 40
  ];

/*   graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [[24, 30, 46], [50, 150, 120], [250, 130, 70]],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [[4500, 6000], [4500, 8000, 7000], [7800, 6000, 7500]],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  }; */
}
