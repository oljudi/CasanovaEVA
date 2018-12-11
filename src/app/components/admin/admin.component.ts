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
  list: Observable<EncuestaexInterface[]>;
  p1: number[];
  sumas:number;
  sucursals:string;
  contador: number;
  contadorre: number;
  invoiceCol: AngularFirestoreCollection<EncuestaexInterface>;
  conten: Observable<EncuestaexInterface[]>;
  invoiceArray: EncuestaexInterface[];
  constructor(
    private encuestaex: EncuestaService,
    private afs: AngularFirestore
  ) { 
    this.listadoEncuestaex = this.encuestaex.getAllEncuestaex();
    
  }
  cont(){
    this.afs.collection('Encuestaexes').valueChanges().subscribe(values => this.contadorre = values.length);
    this.afs.collection('type').valueChanges().subscribe(values => this.contador = values.length);
    this.list = this.encuestaex.getOneEncuestaex();
    

    
      this.afs.collection('Encuestaexes').doc('VI0001').valueChanges().pipe(take(1)).subscribe(res => {this.arras(res)} );
    
    
    //console.log(this.list);
    
}

  arras( x: EncuestaexInterface){
    
      console.log(x.total);
    
    
  }
  ngOnInit() {
    
    this.cont();
     
  }
  
}
