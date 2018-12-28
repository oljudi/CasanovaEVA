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

  public isLogin: boolean;
  
  listadoEncuestaex: any;
  ens: string;
  list: string[];
  p1: EncuestaexInterface;
  sumas:number;
  suma:number;

  sumas1:number;
  sumap2:number;
  sumap3:number;
  sumap4:number;
  sumap5:number;
  sumap6:number;
  sumap7:number;
  sumap8:number;
  
  suma1:number;
  suma2:number;
  suma3:number;
  suma4:number;
  suma5:number;
  suma6:number;
  suma7:number;
  suma8:number;
  prome:string;
  prome1:string;
  prome2:string;
  prome3:string;
  prome4:string;
  prome5:string;
  prome6:string;
  prome7:string;
  prome8:string;
  
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

  this.sumas1 = x.total;
  this.suma1 = (this.sumas1 + this.suma1);

  this.suma2 = x.pregunta2;
  this.sumap2 = this.suma2 + this.sumap2;

  this.suma3 = x.pregunta3;
  this.sumap3 = this.suma3 + this.sumap3;

  this.suma4 = x.pregunta4;
  this.sumap4 = this.suma4 + this.sumap4;

  this.suma5 = x.pregunta5;
  this.sumap5 = this.suma5 + this.sumap5;

  this.suma6 = x.pregunta5;
  this.sumap6 = this.suma6 + this.sumap6;

  this.suma7 = x.pregunta7;
  this.sumap7 = this.suma7 + this.sumap7;

  this.suma8 = x.pregunta8;
  this.sumap8 = this.suma8 + this.sumap8;

 // console.log(x.total);
 // console.log(this.suma);
  this.prom(this.suma1)

 return this.suma, this.suma1,  this.sumap2, this.sumap3, this.sumap4, this.sumap5, this.sumap6, this.sumap7, this.sumap8;

}
  arras( x: EncuestaexInterface){

    for(var i=0 ; i<this.contadorre ; i++ ){
      this.ens = this.list[i] as string;
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass(res)} );
    }

    
     // console.log(this.ens );
      
      
    
  }
  prom(x: number) {
    
    
  this.prome  = (this.suma/this.contador).toFixed(2);
  this.prome1 = (this.suma1/this.contador).toFixed(2);
  this.prome2 = (this.sumap2/this.contador).toFixed(2);
  this.prome3 = (this.sumap3/this.contador).toFixed(2);
  this.prome4 = (this.sumap4/this.contador).toFixed(2);
  this.prome5 = (this.sumap5/this.contador).toFixed(2);
  this.prome6 = (this.sumap6/this.contador).toFixed(2);
  this.prome7 = (this.sumap7/this.contador).toFixed(2);
  this.prome8 = (this.sumap8/this.contador).toFixed(2);

  console.log(this.prome,this.suma,this.suma1,this.prome1,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8 );
  // return this.prome1,this.prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
  
  }
  public emailUsuario: string;
  ngOnInit() {
    
    this.cont();
    
     //this.getcurrentuser();
     this.authservice.getAuth().subscribe( user =>{
      if(user){
        this.isLogin=true;
        this.emailUsuario = user.email;
       this.nombreusuaro(this.emailUsuario);
        //console.log(this.nomUsuario);
      } else{
        this.isLogin = false;
      }
    });
  }
  nombreusuaro(x:string){
    
    this.afs.collection('Registro').doc(x).valueChanges().pipe(take(1)).subscribe(res => {this.arrayss(res)} );
    //this.AuthService.getUser(this.emailUsuario);
    
  }
  nomUsuario: any;
  arrayss(x: RegistroInterface): string {
    
    this.nomUsuario= x.nombre;
   
   console.log(x.nombre);
   console.log(this.nomUsuario);
   
 
  return this.nomUsuario;
 
 }
 
  getcurrentuser(){
    
    
    this.authservice.getAuth().subscribe(user =>{
      if(user){
        this.user.nombre = user.displayName;
        console.log('USER: ',  user);
      }
    })
  }
  
  


}
