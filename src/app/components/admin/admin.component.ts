import { Component, OnInit, ViewChild } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { query } from '@angular/core/src/render3';
import { last } from '@angular/router/src/utils/collection';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listadoEncuestaex: any={};
  list: any={};
  p1: any;
  sumas:number;
  sucursals:string;
  contador: number;
  contadorre: number;
  i:number;
  constructor(
    private encuestaex: EncuestaService,
    private afs: AngularFirestore
  ) { 
    this.listadoEncuestaex = this.encuestaex.getAllEncuestaex();
    
  }
  cont(){
    this.afs.collection('Encuestaexes').valueChanges().subscribe(values => this.contadorre = values.length);
    this.afs.collection('type').valueChanges().subscribe(values => this.contador = values.length);
    
    var col = this.afs.collection('Encuestaexes', querys => querys.where('total','>=', 10));
    col.get().subscribe(snapshot =>{ snapshot.docs.forEach(doc => {this.list[doc.id] =( doc.data())})})
    
    
    console.log(this.list);
    
  }
  ngOnInit() {
    
    this.cont();
     
  }
  
}
