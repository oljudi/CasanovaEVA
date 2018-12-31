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

  sumaspreg:number;
  sumap2:number;
  sumap3:number;
  sumap4:number;
  sumap5:number;
  sumap6:number;
  sumap7:number;
  sumap8:number;
  
  sumaprom:number;
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
   this.sumaprom=0;
   this.sumap2=0;
   this.sumap3=0;
   this.sumap4=0;
   this.sumap5=0;
   this.sumap6=0;
   this.sumap7=0;
   this.sumap8=0;
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

  
 // console.log(x.total);
 // console.log(this.suma);
  this.prom(this.suma)

 return this.suma;

}
arrass1(x: EncuestaexInterface): number {
    
   this.sumaspreg = x.pregunta1;
   this.sumaprom = this.sumaspreg + this.sumaprom;
 
 
  // console.log(x.total);
  console.log(this.sumaprom);
  console.log(this.sumaspreg);
   this.prom1(this.sumaprom)
 
  return  this.sumaprom;
 }
 arrass2(x: EncuestaexInterface): number {
    
 
  this.suma2 = x.pregunta2;
  this.sumap2 = this.suma2 + this.sumap2;

 
 // console.log(x.total);
 // console.log(this.suma);
  this.prom2(this.sumap2)

 return  this.sumap2;
}
arrass3(x: EncuestaexInterface): number {
  
  this.suma3 = x.pregunta3;
  this.sumap3 = this.suma3 + this.sumap3;

 
 // console.log(x.total);
 // console.log(this.suma);
  this.prom3(this.sumap3)

 return  this.sumap3;
}
arrass4(x: EncuestaexInterface): number {
    
 
  this.suma4 = x.pregunta4;
  this.sumap4 = this.suma4 + this.sumap4;


 // console.log(x.total);
 // console.log(this.suma);
  this.prom4(this.sumap4)

 return  this.sumap4;
}
arrass5(x: EncuestaexInterface): number {
    
 
  this.suma5 = x.pregunta5;
  this.sumap5 = this.suma5 + this.sumap5;


 // console.log(x.total);
 // console.log(this.suma);
  this.prom5(this.sumap5)

 return  this.sumap5;
}
arrass6(x: EncuestaexInterface): number {
    
 
  this.suma6 = x.pregunta6;
  this.sumap6 = this.suma6 + this.sumap6;


 // console.log(x.total);
 // console.log(this.suma);
  this.prom6(this.sumap6)

 return  this.sumap6;
}
arrass7(x: EncuestaexInterface): number {
    
 
  this.suma7 = x.pregunta7;
  this.sumap7 = this.suma7 + this.sumap7;


 // console.log(x.total);
 // console.log(this.suma);
  this.prom7(this.sumap7)

 return  this.sumap7;
}
arrass8(x: EncuestaexInterface): number {
    
 
  this.suma8 = x.pregunta8;
  this.sumap8 = this.suma8 + this.sumap8;


 // console.log(x.total);
 // console.log(this.suma);
  this.prom8(this.sumap8)

 return  this.sumap8;
}
  arras( x: EncuestaexInterface){

    for(var i=0 ; i<this.contadorre ; i++ ){
      this.ens = this.list[i] as string;
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass(res)} );
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass1(res)} );
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass2(res)} );
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass3(res)} );
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass4(res)} );
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass5(res)} );
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass6(res)} );
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass7(res)} );
      this.afs.collection('type').doc(this.ens).valueChanges().pipe(take(1)).subscribe(res => {this.arrass8(res)} );
    }

    
     // console.log(this.ens );
      
      
    
  }
  prom(x: number) {
  this.prome  = (this.suma/this.contador).toFixed(2);
   console.log(this.prome );
  // return this.prome1,this.prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
  
  }
  prom1(x: number) {
    this.prome1 = (x/this.contador).toFixed(2);
    console.log(this.prome1, x );
    // return this.prome1,this.prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
    }
    prom2(x: number) {
      this.prome2 = (x/this.contador).toFixed(2);
      console.log(this.prome2);
      // return this.prome1,this.prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
      }
      prom3(x: number) {
        this.prome3 = (this.sumap3/this.contador).toFixed(2);
        console.log(this.prome3);
        // return this.prome1,this.prome1,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
        }
        prom4(x: number) {
          this.prome4 = (this.sumap4/this.contador).toFixed(2);
          console.log(this.prome4);
          // return this.prome1,this.prome1,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
          }
          prom5(x: number) {
            this.prome5 = (this.sumap5/this.contador).toFixed(2);
            console.log(this.prome5);
            // return this.prome1,this.prome1,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
            }
            prom6(x: number) {
              this.prome6 = (this.sumap6/this.contador).toFixed(2);
              console.log(this.prome6);
              // return this.prome1,this.prome1,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
              }
              prom7(x: number) {
                this.prome7 = (this.sumap7/this.contador).toFixed(2);
                console.log(this.prome7);
                // return this.prome1,this.prome1,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
                }
                prom8(x: number) {
                  this.prome8 = (this.sumap8/this.contador).toFixed(2);
                  console.log(this.prome8);
                  this.getpreguntamayor();
                  // return this.prome1,this.prome1,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8prome2,this.prome3,this.prome4,this.prome5,this.prome6,this.prome7,this.prome8;
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
mejorpreg: number;
peorpreg:number;
pr1:number;
pr2:number;
pr3:number;
pr4:number;
pr5:number;
pr6:number;
pr7:number;
pr8:number;



getpreguntamayor(){
this.mejorpreg = 0;
this.pr1= parseFloat(this.prome1);
this.pr2= parseFloat(this.prome2);
this.pr3= parseFloat(this.prome3);
this.pr4= parseFloat(this.prome4);
this.pr5= parseFloat(this.prome5);
this.pr6= parseFloat(this.prome6);
this.pr7= parseFloat(this.prome7);
this.pr8= parseFloat(this.prome8);

function comparar(a, b) {
  return a - b;
}
var prt = [this.pr1,this.pr2,this.pr3,this.pr4,this.pr5,this.pr6,this.pr7,this.pr8];
var prt2 = [this.pr1,this.pr2,this.pr3,this.pr4,this.pr5,this.pr6,this.pr7,this.pr8];
prt.sort(comparar);   
this.peorpreg = prt[0];
this.mejorpreg = prt[7];


  console.log(prt);


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
