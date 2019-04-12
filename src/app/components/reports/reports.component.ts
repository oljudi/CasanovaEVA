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

    // P1 El tiempo que trasncurrio para que lo atendieran fue...

  public pieChartDataP1: SingleDataSet = [9, 6, 6, 3, 6];

    // P2 ¿Como calificaría la imagen de nuestras instalaciones?
  public pieChartDataP2: SingleDataSet = [15, 3, 3, 3, 6];

    // P3 La atención que recibió de nuestro asesor de servicio fue….
  public pieChartDataP3: SingleDataSet = [18, 6, 1.5, 1.5, 3];

    // P4 Considera que la imagen de nuestro asesor de servicio es…
  public pieChartDataP4: SingleDataSet = [21, 6, 1.5, .75, .75];

    // P5 Le entregaron su vehículo …
  public pieChartLabels5: Label[] = ['Limpio', 'Sucio'];
  public pieChartDataP5: SingleDataSet = [21, 9];

    // P2 La experiencia en general de su visita a Casanova fue…
  public pieChartDataP6: SingleDataSet = [12, 9, 6, 1.5, 1.5];

  // Bar
  // para preguntas por servicio
  // Express
    // P1_E Informacion de servicio adicional...
    public pieChartLabelP1_E: Label[] = ['SI', 'No'];
    public pieChartDataP1_E: SingleDataSet = [21, 9];
    // P2_E Tiempo de entrega...
    public pieChartLabelP2_E: Label[] = ['SI', 'No'];
    public pieChartDataP2_E: SingleDataSet = [6, 24];
  // Tramite
    // P1_T Informacion de servicio adicional...
    public pieChartLabelP1_T: Label[] = ['SI', 'No'];
    public pieChartDataP1_T: SingleDataSet = [12, 18];
    // P2_T Entrega en tiempo...
    public pieChartLabelP2_T: Label[] = ['SI', 'No'];
    public pieChartDataP2_T: SingleDataSet = [30, 0];
  // Reparacion
    // P1_R Informacion de servicio adicional...
    public pieChartLabelP1_R: Label[] = ['SI', 'No'];
    public pieChartDataP1_R: SingleDataSet = [30, 0];
    // P2_T Entrega en tiempo...
    public pieChartLabelP2_R: Label[] = ['SI', 'No'];
    public pieChartDataP2_R: SingleDataSet = [12, 18];

  /* Iconos */
  faChartLine = faChartLine;

  rows1: any;
  rows2: any;
  rows3: any;

  colums: any;
  contadorre: number;

  constructor(
    private afs: AngularFirestore,
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

   cp1mb: number;
   cp1b: number;
   cp1r: number;
   cp1m: number;
   cp1mm: number;

   cp2mb: number;
   cp2b: number;
   cp2r: number;
   cp2m: number;
   cp2mm: number;

   cp3mb: number;
   cp3b: number;
   cp3r: number;
   cp3m: number;
   cp3mm: number;

   cp4mb: number;
   cp4b: number;
   cp4r: number;
   cp4m: number;
   cp4mm: number;

   cp5mb: number;
   cp5b: number;
   cp5r: number;
   cp5m: number;
   cp5mm: number;

   cp6mb: number;
   cp6b: number;
   cp6r: number;
   cp6m: number;
   cp6mm: number;

   cp7mb: number;
   cp7b: number;
   cp7r: number;
   cp7m: number;
   cp7mm: number;

   cp8mb: number;
   cp8b: number;
   cp8r: number;
   cp8m: number;
   cp8mm: number;

   cp9mb: number;
   cp9mm: number;

   cp10mb: number;
   cp10mm: number;



  ngOnInit() {
    this.getData1();
    this.getData2();
    this.getData3();

    this.afs.collection('Contadores/Pregunta1/MuyBueno').valueChanges().subscribe(values => (this.cp1mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta1/Bueno').valueChanges().subscribe(values => (this.cp1b = values.length) as number);
    this.afs.collection('Contadores/Pregunta1/Regular').valueChanges().subscribe(values => (this.cp1r = values.length) as number);
    this.afs.collection('Contadores/Pregunta1/Malo').valueChanges().subscribe(values => (this.cp1m = values.length) as number);
    this.afs.collection('Contadores/Pregunta1/MuyMalo').valueChanges().subscribe(values => (this.cp1mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta2/MuyBueno').valueChanges().subscribe(values => (this.cp2mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta2/Bueno').valueChanges().subscribe(values => (this.cp2b = values.length) as number);
    this.afs.collection('Contadores/Pregunta2/Regular').valueChanges().subscribe(values => (this.cp2r = values.length) as number);
    this.afs.collection('Contadores/Pregunta2/Malo').valueChanges().subscribe(values => (this.cp2m = values.length) as number);
    this.afs.collection('Contadores/Pregunta2/MuyMalo').valueChanges().subscribe(values => (this.cp2mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta3/MuyBueno').valueChanges().subscribe(values => (this.cp3mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta3/Bueno').valueChanges().subscribe(values => (this.cp3b = values.length) as number);
    this.afs.collection('Contadores/Pregunta3/Regular').valueChanges().subscribe(values => (this.cp3r = values.length) as number);
    this.afs.collection('Contadores/Pregunta3/Malo').valueChanges().subscribe(values => (this.cp3m = values.length) as number);
    this.afs.collection('Contadores/Pregunta3/MuyMalo').valueChanges().subscribe(values => (this.cp3mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta4/MuyBueno').valueChanges().subscribe(values => (this.cp4mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta4/Bueno').valueChanges().subscribe(values => (this.cp4b = values.length) as number);
    this.afs.collection('Contadores/Pregunta4/Regular').valueChanges().subscribe(values => (this.cp4r = values.length) as number);
    this.afs.collection('Contadores/Pregunta4/Malo').valueChanges().subscribe(values => (this.cp4m = values.length) as number);
    this.afs.collection('Contadores/Pregunta4/MuyMalo').valueChanges().subscribe(values => (this.cp4mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta5/MuyBueno').valueChanges().subscribe(values => (this.cp5mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta5/Bueno').valueChanges().subscribe(values => (this.cp5b = values.length) as number);
    this.afs.collection('Contadores/Pregunta5/Regular').valueChanges().subscribe(values => (this.cp5r = values.length) as number);
    this.afs.collection('Contadores/Pregunta5/Malo').valueChanges().subscribe(values => (this.cp5m = values.length) as number);
    this.afs.collection('Contadores/Pregunta5/MuyMalo').valueChanges().subscribe(values => (this.cp5mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta6/MuyBueno').valueChanges().subscribe(values => (this.cp6mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta6/Bueno').valueChanges().subscribe(values => (this.cp6b = values.length) as number);
    this.afs.collection('Contadores/Pregunta6/Regular').valueChanges().subscribe(values => (this.cp6r = values.length) as number);
    this.afs.collection('Contadores/Pregunta6/Malo').valueChanges().subscribe(values => (this.cp6m = values.length) as number);
    this.afs.collection('Contadores/Pregunta6/MuyMalo').valueChanges().subscribe(values => (this.cp6mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta7/MuyBueno').valueChanges().subscribe(values => (this.cp7mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta7/Bueno').valueChanges().subscribe(values => (this.cp7b = values.length) as number);
    this.afs.collection('Contadores/Pregunta7/Regular').valueChanges().subscribe(values => (this.cp7r = values.length) as number);
    this.afs.collection('Contadores/Pregunta7/Malo').valueChanges().subscribe(values => (this.cp7m = values.length) as number);
    this.afs.collection('Contadores/Pregunta7/MuyMalo').valueChanges().subscribe(values => (this.cp7mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta8/MuyBueno').valueChanges().subscribe(values => (this.cp8mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta8/Bueno').valueChanges().subscribe(values => (this.cp8b = values.length) as number);
    this.afs.collection('Contadores/Pregunta8/Regular').valueChanges().subscribe(values => (this.cp8r = values.length) as number);
    this.afs.collection('Contadores/Pregunta8/Malo').valueChanges().subscribe(values => (this.cp8m = values.length) as number);
    this.afs.collection('Contadores/Pregunta8/MuyMalo').valueChanges().subscribe(values => (this.cp8mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta9/Si').valueChanges().subscribe(values => (this.cp9mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta9/No').valueChanges().subscribe(values => (this.cp9mm = values.length) as number);

    this.afs.collection('Contadores/Pregunta10/Si').valueChanges().subscribe(values => (this.cp10mb = values.length) as number);
    this.afs.collection('Contadores/Pregunta10/No').valueChanges().subscribe(values => (this.cp10mm = values.length) as number);

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
