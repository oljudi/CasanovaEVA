import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { faCarCrash, faShippingFast, faNotesMedical, faEnvelope, faMobileAlt, faFileInvoice, faCarSide, faTachometerAlt, faGasPump, faCarAlt, faCheck, faTimes, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { RegistroCompletoInterface } from 'src/app/Models/Registrocompleto';

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
  opcion: string;
  name: string;
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
  faUserCheck = faUserCheck;

/* Datos Llenado completo*/
placa: string;
vehiculo: string;
marca: string;
combustilbe: string;
numserie: string;
kilometraje: number;
anio: number;
fechaent: string;
fechasal: string;
tarjetac: string;
llantas: string;
ordenservicio: string;
antena: string;
llantaref: string;
vestiduras: string;
controlllave: string;
gato: string;
tapetes: string;
llavetuerc: string;
taponllanta: string;
extintor: string;
kitherram: string;
segurorueda: string;
señal: string;
placas: string;
tapongas: string;
radio: string;
admonflota: string;
asesor: string;
solicdiag: string;
trabajosol: string;
trabajorea: string;
nombrecliente: string;
correocliente: string;
numerocliente: string;
cliente: string;
tipo: string;

  constructor(
    private afs: AngularFirestore,
    public encuestase: EncuestaService
  ) { }

  ngOnInit() {
    this.Option( this.value );
  }

  Option( opt: string ) {
    if ( opt === 'express' ) {
      this.opt1 = true;
      this.opt2 = false;
      this.opt3 = false;
      this.tipo = opt;
    }
    if ( opt === 'reparacion' ) {
      this.opt1 = false;
      this.opt2 = true;
      this.opt3 = false;
      this.tipo = opt;
    }
    if ( opt === 'tramite' ) {
      this.opt1 = false;
      this.opt2 = false;
      this.opt3 = true;
      this.tipo = opt;
    }
  }
  onGuardar({value}: {value: RegistroCompletoInterface}) {
value.tipo = this.tipo;
value.placa = this.placa;
value.vehiculo = this.vehiculo;
value.marca = this.marca;
value.combustilbe = this.combustilbe;
value.numserie = this.numserie;
// value.kilometraje = this.kilometraje;
value.año = this.anio;
value.fechaent = this.fechaent;
value.fechasal = this.fechasal;
value.tarjetac = this.tarjetac;
value.antena = this.antena;

    console.log(value);
  }
  onEncuesta({value}: {value: EncuestaexInterface}) {
  this.name = this.idenc.toUpperCase();
    value.id = this.name;
    value.tipo = this.opcion;
    console.log(value);

    this.afs.firestore.doc('Encuestaexes/' + this.name).get()
    .then(docSnapshot => {
      if (docSnapshot.exists === true) {
        confirm('Ya existe el registro ' + this.name);
     //  this.encuestase.addEncuestaex(value);
      } else {
        this.afs.firestore.doc('Encuestareps/' + this.name).get()
        // tslint:disable-next-line:no-shadowed-variable
        .then(docSnapshot => {
          if (docSnapshot.exists === true) {
            confirm('Ya existe el registro ' + this.name);
          //  this.encuestase.addEncuestare(value);
          } else {
            this.afs.firestore.doc('Encuestatram/' + this.name).get()
            // tslint:disable-next-line:no-shadowed-variable
            .then(docSnapshot => {
              if (docSnapshot.exists === true) {
                confirm('Ya existe el registro ' + this.name);
              //  this.encuestase.addEncuestare(value);
              } else {
                if (this.opcion === 'express') {
                  this.encuestase.addEncuestaex(value);
                  confirm('Registro ' + this.name + ' guardado');
                }
                if (this.opcion === 'reparacion') {
                  this.encuestase.addEncuestare(value);
                  confirm('Registro ' + this.name + ' guardado');
                }
                if (this.opcion === 'tramite') {
                  this.encuestase.addEncuestatr(value);
                  confirm('Registro ' + this.name + ' guardado');
                }
              }
            });
          }
        });
      }
    });
  }
}
