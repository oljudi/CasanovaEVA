import { Component, OnInit } from '@angular/core';
import { faCarCrash, faShippingFast, faNotesMedical, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

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

  /* Iconos */
  faCarCrash = faCarCrash;
  faShippingFast = faShippingFast;
  faNotesMedical = faNotesMedical;
  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;
  constructor() { }

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
}
