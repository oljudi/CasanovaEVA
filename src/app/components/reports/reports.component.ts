import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { Observable } from 'rxjs';

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
    this.ccp1mb = this.afs.collection('Contadores', ref => ref);
    this.cp1mb = this.ccp1mb.doc('Pregunta1').collection('MuyBueno/').get().subscribe.length;
    this.ccp1b = this.afs.collection('Contadores', ref => ref);
    this.cp1b = this.ccp1b.doc('Pregunta1').collection('Bueno/').get().subscribe.length;
    this.ccp1r = this.afs.collection('Contadores', ref => ref);
    this.cp1r = this.ccp1r.doc('Pregunta1').collection('Regular/').get().subscribe.length;
    this.ccp1m = this.afs.collection('Contadores', ref => ref);
    this.cp1m = this.ccp1m.doc('Pregunta1').collection('Malo/').get().subscribe.length;
    this.ccp1mm = this.afs.collection('Contadores', ref => ref);
    this.cp1mm = this.ccp1mm.doc('Pregunta1').collection('MuyMalo/').get().subscribe.length;
   
    this.ccp2mb = this.afs.collection('Contadores', ref => ref);
    this.cp2mb = this.ccp2mb.doc('Pregunta2').collection('MuyBueno/').get().subscribe.length;
    this.ccp2b = this.afs.collection('Contadores', ref => ref);
    this.cp2b = this.ccp2b.doc('Pregunta2').collection('Bueno/').get().subscribe.length;
    this.ccp2r = this.afs.collection('Contadores', ref => ref);
    this.cp2r = this.ccp2r.doc('Pregunta2').collection('Regular/').get().subscribe.length;
    this.ccp2m = this.afs.collection('Contadores', ref => ref);
    this.cp2m = this.ccp2m.doc('Pregunta2').collection('Malo/').get().subscribe.length;
    this.ccp2mm = this.afs.collection('Contadores', ref => ref);
    this.cp2mm = this.ccp2mm.doc('Pregunta2').collection('MuyMalo/').get().subscribe.length;

    this.ccp3mb = this.afs.collection('Contadores', ref => ref);
    this.cp3mb = this.ccp3mb.doc('Pregunta3').collection('MuyBueno/').get().subscribe.length;
    this.ccp3b = this.afs.collection('Contadores', ref => ref);
    this.cp3b = this.ccp3b.doc('Pregunta3').collection('Bueno/').get().subscribe.length;
    this.ccp3r = this.afs.collection('Contadores', ref => ref);
    this.cp3r = this.ccp3r.doc('Pregunta3').collection('Regular/').get().subscribe.length;
    this.ccp3m = this.afs.collection('Contadores', ref => ref);
    this.cp3m = this.ccp3m.doc('Pregunta3').collection('Malo/').get().subscribe.length;
    this.ccp3mm = this.afs.collection('Contadores', ref => ref);
    this.cp3mm = this.ccp3mm.doc('Pregunta3').collection('MuyMalo/').get().subscribe.length;

    this.ccp4mb = this.afs.collection('Contadores', ref => ref);
    this.cp4mb = this.ccp4mb.doc('Pregunta4').collection('MuyBueno/').get().subscribe.length;
    this.ccp4b = this.afs.collection('Contadores', ref => ref);
    this.cp4b = this.ccp4b.doc('Pregunta4').collection('Bueno/').get().subscribe.length;
    this.ccp4r = this.afs.collection('Contadores', ref => ref);
    this.cp4r = this.ccp4r.doc('Pregunta4').collection('Regular/').get().subscribe.length;
    this.ccp4m = this.afs.collection('Contadores', ref => ref);
    this.cp4m = this.ccp4m.doc('Pregunta4').collection('Malo/').get().subscribe.length;
    this.ccp4mm = this.afs.collection('Contadores', ref => ref);
    this.cp4mm = this.ccp4mm.doc('Pregunta4').collection('MuyMalo/').get().subscribe.length;

    this.ccp5mb = this.afs.collection('Contadores', ref => ref);
    this.cp5mb = this.ccp5mb.doc('Pregunta5').collection('MuyBueno/').get().subscribe.length;
    this.ccp5b = this.afs.collection('Contadores', ref => ref);
    this.cp5b = this.ccp5b.doc('Pregunta5').collection('Bueno/').get().subscribe.length;
    this.ccp5r = this.afs.collection('Contadores', ref => ref);
    this.cp5r = this.ccp5r.doc('Pregunta5').collection('Regular/').get().subscribe.length;
    this.ccp5m = this.afs.collection('Contadores', ref => ref);
    this.cp5m = this.ccp5m.doc('Pregunta5').collection('Malo/').get().subscribe.length;
    this.ccp5mm = this.afs.collection('Contadores', ref => ref);
    this.cp5mm = this.ccp5mm.doc('Pregunta5').collection('MuyMalo/').get().subscribe.length;

    this.ccp6mb = this.afs.collection('Contadores', ref => ref);
    this.cp6mb = this.ccp6mb.doc('Pregunta6').collection('MuyBueno/').get().subscribe.length;
    this.ccp6b = this.afs.collection('Contadores', ref => ref);
    this.cp6b = this.ccp6b.doc('Pregunta6').collection('Bueno/').get().subscribe.length;
    this.ccp6r = this.afs.collection('Contadores', ref => ref);
    this.cp6r = this.ccp6r.doc('Pregunta6').collection('Regular/').get().subscribe.length;
    this.ccp6m = this.afs.collection('Contadores', ref => ref);
    this.cp6m = this.ccp6m.doc('Pregunta6').collection('Malo/').get().subscribe.length;
    this.ccp6mm = this.afs.collection('Contadores', ref => ref);
    this.cp6mm = this.ccp6mm.doc('Pregunta6').collection('MuyMalo/').get().subscribe.length;
    
    this.ccp7mb = this.afs.collection('Contadores', ref => ref);
    this.cp7mb = this.ccp7mb.doc('Pregunta7').collection('MuyBueno/').get().subscribe.length;
    this.ccp7b = this.afs.collection('Contadores', ref => ref);
    this.cp7b = this.ccp7b.doc('Pregunta7').collection('Bueno/').get().subscribe.length;
    this.ccp7r = this.afs.collection('Contadores', ref => ref);
    this.cp7r = this.ccp7r.doc('Pregunta7').collection('Regular/').get().subscribe.length;
    this.ccp7m = this.afs.collection('Contadores', ref => ref);
    this.cp7m = this.ccp7m.doc('Pregunta7').collection('Malo/').get().subscribe.length;
    this.ccp7mm = this.afs.collection('Contadores', ref => ref);
    this.cp7mm = this.ccp7mm.doc('Pregunta7').collection('MuyMalo/').get().subscribe.length;

    this.ccp8mb = this.afs.collection('Contadores', ref => ref);
    this.cp8mb = this.ccp8mb.doc('Pregunta8').collection('MuyBueno/').get().subscribe.length;
    this.ccp8b = this.afs.collection('Contadores', ref => ref);
    this.cp8b = this.ccp8b.doc('Pregunta8').collection('Bueno/').get().subscribe.length;
    this.ccp8r = this.afs.collection('Contadores', ref => ref);
    this.cp8r = this.ccp8r.doc('Pregunta8').collection('Regular/').get().subscribe.length;
    this.ccp8m = this.afs.collection('Contadores', ref => ref);
    this.cp8m = this.ccp8m.doc('Pregunta8').collection('Malo/').get().subscribe.length;
    this.ccp8mm = this.afs.collection('Contadores', ref => ref);
    this.cp8mm = this.ccp8mm.doc('Pregunta8').collection('MuyMalo/').get().subscribe.length;

    this.ccp9mb = this.afs.collection('Contadores', ref => ref);
    this.cp9mb = this.ccp9mb.doc('Pregunta9').collection('MuyBueno/').get().subscribe.length;
    this.ccp9mm = this.afs.collection('Contadores', ref => ref);
    this.cp9mm = this.ccp9mm.doc('Pregunta9').collection('MuyMalo/').get().subscribe.length;
   
    this.ccp10mb = this.afs.collection('Contadores', ref => ref);
    this.cp10mb = this.ccp10mb.doc('Pregunta10').collection('MuyBueno/').get().subscribe.length;
    this.ccp10mm = this.afs.collection('Contadores', ref => ref);
    this.cp10mm = this.ccp10mm.doc('Pregunta10').collection('MuyMalo/').get().subscribe.length;
    
    
   }
   ccp1mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp1b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp1r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp1m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp1mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp1mb: number;
   cp1b: number;
   cp1r: number;
   cp1m: number;
   cp1mm: number;

   ccp2mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp2mb: number;
   cp2b: number;
   cp2r: number;
   cp2m: number;
   cp2mm: number;

   ccp3mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp3mb: number;
   cp3b: number;
   cp3r: number;
   cp3m: number;
   cp3mm: number;

   ccp4mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp4mb: number;
   cp4b: number;
   cp4r: number;
   cp4m: number;
   cp4mm: number;

   ccp5mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp5mb: number;
   cp5b: number;
   cp5r: number;
   cp5m: number;
   cp5mm: number;

   ccp6mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp6mb: number;
   cp6b: number;
   cp6r: number;
   cp6m: number;
   cp6mm: number;

   ccp7mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp7mb: number;
   cp7b: number;
   cp7r: number;
   cp7m: number;
   cp7mm: number;

   ccp8mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp8mb: number;
   cp8b: number;
   cp8r: number;
   cp8m: number;
   cp8mm: number;

   ccp9mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp9mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp9mb: number;
   cp9mm: number;

   ccp10mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp10mm: AngularFirestoreCollection<EncuestaexInterface>;
   cp10mb: number;
   cp10mm: number;

   



  ngOnInit() {
    this.getData1();
    this.getData2();
    this.getData3();  
  }
  
  getData1() {
    this.afs.collection('Contadores').doc('Pregunta1').collection('MuyBueno/').get().subscribe.length;
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
    
    this.getDataleng();

    this.afs.collection('Encuestaexes').valueChanges().subscribe((encuesta) => {
      this.rows1 = encuesta ;
    });
  }
  getDataleng(){
  
    this.pieChartDataP1 = [1,1,2,1,1];
    console.log(this.cp1mb+'/'+this.cp1b+'/'+this.cp1r+'/'+this.cp1m+'/'+this.cp1mm);
    console.log(this.cp2mb+'/'+this.cp2b+'/'+this.cp2r+'/'+this.cp2m+'/'+this.cp2mm);
    console.log(this.cp3mb+'/'+this.cp3b+'/'+this.cp3r+'/'+this.cp3m+'/'+this.cp3mm);
    console.log(this.cp4mb+'/'+this.cp4b+'/'+this.cp4r+'/'+this.cp4m+'/'+this.cp4mm);
    console.log(this.cp5mb+'/'+this.cp5b+'/'+this.cp5r+'/'+this.cp5m+'/'+this.cp5mm);
    console.log(this.cp6mb+'/'+this.cp6b+'/'+this.cp6r+'/'+this.cp6m+'/'+this.cp6mm);
    console.log(this.cp7mb+'/'+this.cp7b+'/'+this.cp7r+'/'+this.cp7m+'/'+this.cp7mm);
    console.log(this.cp8mb+'/'+this.cp8b+'/'+this.cp8r+'/'+this.cp8m+'/'+this.cp8mm);
    console.log(this.cp9mb+'/'+this.cp9mm);
    console.log(this.cp10mb+'/'+this.cp10mm);
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
