import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartLabels: Label[] = ['Bueno', ['Mas', 'ó', 'Menos'], 'Regular', 'Malo', 'Muy Malo'];

    // P1
  public pieChartDataP1: SingleDataSet = [300, 200, 200, 100, 200];

    //P2
  public pieChartDataP2: SingleDataSet = [500, 100, 100, 100, 200];

    //P3
  public pieChartDataP3: SingleDataSet = [500, 100, 100, 100, 200];

    //P4
  public pieChartDataP4: SingleDataSet = [500, 100, 100, 100, 200];

    //P5
  public pieChartDataP5: SingleDataSet = [500, 100, 100, 100, 200];

    //P2
  public pieChartDataP6: SingleDataSet = [500, 100, 100, 100, 200];

  // Bar 
  // para preguntas por servicio si/no
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Si', 'No'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0, 10], label: 'SI' },
    { data: [0, 10], label: 'NO' }
  ];


  /* Iconos */
  faChartLine = faChartLine;

  rows1: any;
  rows2: any;
  rows3: any;

  colums: any;

  constructor(
    private afs: AngularFirestore,
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit() {
    this.getData1();
    this.getData2();
    this.getData3();
  }

  getData1() {
    this.afs.collection('Encuestaexes').valueChanges().subscribe((encuesta) => {
      this.rows1 = encuesta ;
    });
  }
  getData2() {
    this.afs.collection('Encuestareps').valueChanges().subscribe((encuesta) => {
      this.rows2 = encuesta ;
    });
  }
  getData3() {
    this.afs.collection('Encuestatram').valueChanges().subscribe((encuesta) => {
      this.rows3 = encuesta ;
    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
