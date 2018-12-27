import { Component, OnInit, ViewChild } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { query } from '@angular/core/src/render3';
import { last } from '@angular/router/src/utils/collection';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { faArchive, faVoteYea, faBoxes, faStar, faTrophy, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { RegistroInterface } from 'src/app/Models/registro';
import { auth } from 'firebase';
import { userInfo } from 'os';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  faArchive = faArchive;
  faBoxes = faBoxes;
  faVoteYea = faVoteYea;
  faTrophy = faTrophy;
  faStar = faStar;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;


  listadoEncuestaex: any;
  ens: string;
  list: string[];
  p1: EncuestaexInterface;
  sumas:number;
  suma:number;
  prome:string;
  promedios:string;
  sucursals:string;
  contador: number;
  contadorre: number;
  constructor(
    private encuestaex: EncuestaService,
    private afs: AngularFirestore,
    private authservice: AuthService
  ) { 
    
    this.listadoEncuestaex = this.encuestaex.getAllEncuestaex();
    this.encuestaex.getitem().subscribe(id => this.list = id as Array<string>);
   this.suma=0;
  }
  user: RegistroInterface;
  cont(){
    this.afs.collection('Encuestaexes').valueChanges().subscribe(values => this.contadorre = values.length);
    this.afs.collection('type').valueChanges().subscribe(values => this.contador = values.length);
   
    
   // this.encuestaex.getAllEncuestaex().subscribe(id      => this.p1 = id );
   // this.list = this.p1[0] as number;
   // this.list = this.afs.collection('Encuestaexes').snapshotChanges().pipe(map(action => {return action.map( a => {const idz = a.payload.doc.id; return idz});}));
  
      
     this.afs.collection('Encuestaexes').doc('VI0001').valueChanges().pipe(take(1)).subscribe(res => {this.arras(res)} );
    
      //console.log(this.list);
    
}
arrass(x: EncuestaexInterface): number {
    
  this.sumas = x.total;
  this.suma = this.sumas + this.suma;
  console.log(x.total);
  console.log(this.suma);
  this.prom(this.suma)

 return this.suma;

}
  arras( x: EncuestaexInterface){

    for(var i=0 ; i<this.contadorre ; i++ ){
      this.ens = this.list[i] as string;
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass(res)} );
    }

    
      console.log(this.ens );
      
      
    
  }
  prom(x: number): string {
    
    
  this.prome= (this.suma/this.contador).toFixed(2);
  
   return this.prome;
  
  }
  ngOnInit() {
    
    this.cont();
    
     this.getcurrentuser();
   
  }
  getcurrentuser(){
    var userid = auth().currentUser.uid;
    
    this.authservice.getAuth().subscribe(user =>{
      if(user){
        this.user.nombre = user.displayName;
        console.log('USER: ',  user);
      }
    })
  }
  
  


}
