import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  /* Iconos */
  faChartLine = faChartLine;

  rows1: any;
  colums: any;

  constructor(
    private encuestaex: EncuestaService,
    private encuestas: EncuestaService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.getData1();
  }

  getData1() {
    this.afs.collection('Encuestaexes').valueChanges().subscribe((encuesta) => {
      this.rows1 = encuesta ;
    });
  }

}
