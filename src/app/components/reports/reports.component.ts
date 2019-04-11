import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { ChartType, ChartOptions } from 'chart.js';
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
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

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
