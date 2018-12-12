import { Component, OnInit, ViewChild } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { query } from '@angular/core/src/render3';
import { last } from '@angular/router/src/utils/collection';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listadoEncuestaex: any={};
  ens: any;
  list: string[];
  p1: EncuestaexInterface[]=[];
  sumas:number;
  sucursals:string;
  contador: number;
  contadorre: number;
  constructor(
    private encuestaex: EncuestaService,
    private afs: AngularFirestore
  ) { 
    this.listadoEncuestaex = this.encuestaex.getAllEncuestaex();
    this.encuestaex.getAllEncuestaex().subscribe(id => this.list = id as Array<string>);
   
  }
  cont(){
    this.afs.collection('Encuestaexes').valueChanges().subscribe(values => this.contadorre = values.length);
    this.afs.collection('type').valueChanges().subscribe(values => this.contador = values.length);
   
    
   // this.encuestaex.getAllEncuestaex().subscribe(id      => this.p1 = id );
   // this.list = this.p1[0] as number;
   // this.list = this.afs.collection('Encuestaexes').snapshotChanges().pipe(map(action => {return action.map( a => {const idz = a.payload.doc.id; return idz});}));
   
      
      this.afs.collection('Encuestaexes').doc('VI0001').valueChanges().pipe(take(1)).subscribe(res => {this.arras(res)} );
    
      //console.log(this.list);
    
}

  arras( x: EncuestaexInterface){
    
      console.log(x.total);
     // console.log(this.p1[0]);
      console.log(this.list);
    
    
  }
  ngOnInit() {
    
    this.cont();
     
  }
  
}
