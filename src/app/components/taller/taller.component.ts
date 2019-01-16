import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { faCarCrash, faShippingFast, faNotesMedical, faEnvelope, faMobileAlt, faFileInvoice, faCarSide, faTachometerAlt, faGasPump, faCarAlt, faCheck, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({ 
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css']
})
export class TallerComponent implements OnInit {

  /* Variables de opciones de formulario */
  opt1: boolean;
  opt2: boolean;
  opt3: boolean;
  value: string;
  opcion:string;
  name:string;
  idenc: string;
  EncuestaDoc: AngularFirestoreDocument<EncuestaexInterface>;
  EncuestaCollection: AngularFirestoreCollection<EncuestaexInterface>;
  /* Iconos */
  faCarCrash = faCarCrash;
  faShippingFast = faShippingFast;
  faNotesMedical = faNotesMedical;
  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;
  faFileInvoice = faFileInvoice;
  faCar = faCarSide;
  faSerial = faNotesMedical;
  faKm = faTachometerAlt;
  faGas = faGasPump;
  faBrand = faCarAlt;
  faYes = faCheck;
  faNo = faTimes;
  faUser = faUser;

  constructor(
    private afs: AngularFirestore,
    public encuestase:EncuestaService
  ) { }

  ngOnInit() {
    this.Option( this.value );
  }

  Option( opt: string ) {
    if ( opt === 'express' ) {
      this.opt1 = true;
      this.opt2 = false;
      this.opt3 = false;
    }
    if ( opt === 'reparacion' ) {
      this.opt1 = false;
      this.opt2 = true;
      this.opt3 = false;
    }
    if ( opt === 'tramite' ) {
      this.opt1 = false;
      this.opt2 = false;
      this.opt3 = true;
    }
  }
   
  onEncuesta({value}: {value: EncuestaexInterface}){
  this.name=this.idenc.toUpperCase();
    value.id=this.name;
    value.tipo = this.opcion;
    console.log(value);

    this.afs.firestore.doc('Encuestaexes/'+this.name).get()
    .then(docSnapshot => {
      if (docSnapshot.exists == true) {
        confirm('Ya existe el registro ' + this.name)
     //  this.encuestase.addEncuestaex(value);
      }
      else{
        this.afs.firestore.doc('Encuestareps/'+this.name).get()
        .then(docSnapshot => {
          if (docSnapshot.exists == true) {
            confirm('Ya existe el registro ' + this.name)
          //  this.encuestase.addEncuestare(value);
          }
          else{
            this.afs.firestore.doc('Encuestatram/'+this.name).get()
            .then(docSnapshot => {
              if (docSnapshot.exists == true) {
                confirm('Ya existe el registro ' + this.name)
              //  this.encuestase.addEncuestare(value);
              }
              else{
                if(this.opcion == 'express'){
                  this.encuestase.addEncuestaex(value);
                  confirm('Registro ' + this.name+ ' guardado')
                }
                if(this.opcion == 'reparacion'){
                  this.encuestase.addEncuestare(value);
                  confirm('Registro ' + this.name+ ' guardado')
                }
                if(this.opcion == 'tramite'){
                  this.encuestase.addEncuestatr(value);
                  confirm('Registro ' + this.name+ ' guardado')
                }
              }
            });
          }
        });
      }
    });
  }
}
