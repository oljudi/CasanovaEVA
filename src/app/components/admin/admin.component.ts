import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listadoEncuestaex: any;
  sucursals:string;
  contador: number;
  contadorre: number;

  constructor(
    private encuestaex: EncuestaService,
    private afs: AngularFirestore
  ) { 
    this.listadoEncuestaex = this.encuestaex.getAllEncuestaex();
    
  }
  cont(){
    this.afs.collection('Encuestaexes').valueChanges().subscribe(values => this.contadorre = values.length);
    this.afs.collection('type').valueChanges().subscribe(values => this.contador = values.length);
    
  }
  ngOnInit() {
    
    this.cont();
     
  }

}
