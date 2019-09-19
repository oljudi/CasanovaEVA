import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { faCarCrash, faShippingFast, faNotesMedical, faEnvelope, faMobileAlt, faFileInvoice, faCarSide, faTachometerAlt, faGasPump, faCarAlt, faCheck, faTimes, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { RegistroCompletoInterface } from 'src/app/Models/Registrocompleto';
import { resetComponentState, componentRefresh } from '@angular/core/src/render3/instructions';
import { FormGroup } from '@angular/forms';

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

opcion2:string;
indenc2:string;
placa: string;
vehiculo: string;
marca: string;
combustible: string;
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
senal: string;
placas: string;
tapongas: string;
radio: string;
admonflota: string;
asesor: string;
solicitud: string;
trabajosol: string;
trabajorea: string;
nocliente: string;
ccliente: string;
nucliente: string;
estatus:string;
cliente: string;
tecnico:string;
tipo: string;
comentarios: string;
Diagnostico:string;

  constructor(
    private afs: AngularFirestore,
    public encuestase: EncuestaService) { }

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
    
//Folio y tipo de servicio
    value.id = this.indenc2.toLocaleUpperCase();
    value.tipo = this.opcion2;
//Datos de Vehiculo
    value.placa = this.placa.toLocaleUpperCase();
    value.vehiculo = this.vehiculo;
    value.marca = this.marca.toLocaleLowerCase();
    value.combustible = this.combustible;
    value.numserie = this.numserie;
    value.kilometraje = this.kilometraje;
    value.anio = this.anio;
//Cliente
    value.NombreCliente = this.nocliente;
    value.CorreoCliente = this.ccliente;
    value.NumeroCliente = this.nucliente;
    value.cliente = this.cliente;
//Administrador
    value.Administrador = this.admonflota;
    value.asesor = this.asesor;
//Taller 1era parte
    value.fechaent = this.fechaent ;
    value.fechasal = this.fechasal;
    value.Diagnostico = this.Diagnostico;
    value.Solicta = this.solicitud;
    value.Trabajorealizado = this.trabajorea;
    value.Estatus = this.estatus;
    value.Tecnico = this.tecnico;
//Taller 2da parte
    value.tarjetacirculacion = this.tarjetac;
    value.antena= this.antena;
    value.controlllave = this.controlllave;
    value.llavetuerc = this.llavetuerc;
    value.kitherram = this.kitherram;
    value.llantas = this.llantas;
    value.llantaref = this.llantaref;
    value.gato = this.gato;
    value.taponllanta = this.taponllanta;
    value.segurorueda = this.segurorueda;
    value.tapongas = this.tapongas;
    value.ordenservicio = this.ordenservicio;
    value.vestiduras = this.vestiduras;
    value.tapetes = this.tapetes;
    value.extintor = this.extintor;
    value.senal = this.senal;
    value.radio = this.radio;
    value.comentarios = this.comentarios;
    
    //console.log(value); 
    var nameid = this.indenc2.toUpperCase();
    this.afs.firestore.doc('Encuestaexes/' + nameid).get()
    .then(docSnapshot => {
      if (docSnapshot.exists === true) {
        confirm('Registro ' + nameid + ' guardado');
        value.tipo = 'express';
       this.encuestase.updateType(value);
      } else {
        this.afs.firestore.doc('Encuestareps/' + nameid).get()
        .then(docSnapshot => {
          if (docSnapshot.exists === true) {
            confirm('Registro ' + nameid + ' guardado');
            value.tipo = 'reparacion';
            this.encuestase.updateType(value);
          } else {
            this.afs.firestore.doc('Encuestatram/' + nameid).get()
            .then(docSnapshot => {
              if (docSnapshot.exists === true) {
                confirm('Registro ' + nameid+ ' guardado');
                value.tipo = 'tramite';
                this.encuestase.updateType(value);
              } else {
                 confirm('Registro ' + nameid + ' no existe');
                
              }
            });
          }
        });
      }
    });
    
  }
  onEncuesta({value}: {value: EncuestaexInterface}) {
  this.name = this.idenc.toUpperCase();
    value.Folio = this.name;
    value.id = this.name;
    value.tipo = this.opcion;
    value.validacion = 'falta_validar';
    value.contestada = false;
    //console.log(value);

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
                  this.encuestase.addEcuescont(value);
                  this.encuestase.addEncuestaex(value);
                  confirm('Registro ' + this.name + ' guardado');
                }
                if (this.opcion === 'reparacion') { 
                  this.encuestase.addEcuescont(value);
                  this.encuestase.addEncuestare(value);
                  confirm('Registro ' + this.name + ' guardado');
                }
                if (this.opcion === 'tramite') {
                  this.encuestase.addEcuescont(value);
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
