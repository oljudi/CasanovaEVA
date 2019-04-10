import { Component, OnInit } from '@angular/core';

import { faTired, faSadTear, faGrin, faSmileBeam, faCheckSquare, faTimesCircle, faMeh, faHourglassStart, faHourglassHalf, faHourglassEnd, faVoteYea, faCarSide, faTruck, faTruckPickup, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class TramiteComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private encuestaService: EncuestaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const today = new Date();

    this.mod.fecha = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
   }

  faTired = faTired;
  faSadTear = faSadTear;
  faGrin = faGrin;
  faSmileBeam = faSmileBeam;
  faCheckSquare = faCheckSquare;
  faTimesCircle = faTimesCircle;
  faMeh = faMeh;
  faHourglassStart = faHourglassStart;
  faHourglassHalf = faHourglassHalf;
  faHourglassEnd = faHourglassEnd;
  faVoteYea = faVoteYea;

  faCar = faCarSide;
  faTruck = faTruck;
  faTruckPickup = faTruckPickup;
  faAmbulance = faAmbulance;

  value: string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  sevenFormGroup: FormGroup;
  y: number;
  ident: string;
  mod: any = {};
  model: any = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0,
    p8: 0,
    p9: false,
    p9c: 0
  };
  Encuesta: EncuestaexInterface = {

    fecha: '',
    pregunta1: 0,
    pregunta2: 0,
    pregunta3: 0,
    pregunta4: 0,
    pregunta5: 0,
    pregunta6: 0,
    pregunta7: 0,
    pregunta8: 0,
    pregunta9: '',

    total: 0
  };
  public isYes = true;
  public isNo = true;
  proms: string;


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdFormGroup: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthFormGroup: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthFormGroup: ['', Validators.required]
    });
    this.sixFormGroup = this._formBuilder.group({
      sixFormGroup: ['', Validators.required]
    });
    this.sevenFormGroup = this._formBuilder.group({
      sevenFormGroup: ['', Validators.required]
    });
    this.onChange();
  }
  
  onGuardarEncuesta({value}: {value: EncuestaexInterface}) {
    this.proms = this.y.toFixed(2);
    value.id = this.ident;
    value.pregunta1 = this.model.p1;
    value.pregunta2 = this.model.p2;
    value.pregunta3 = this.model.p3;
    value.pregunta4 = this.model.p4;
    value.pregunta5 = this.model.p5;
    value.pregunta6 = this.model.p6;
    value.pregunta7 = this.model.p7;
    value.pregunta8 = this.model.p8;
    value.pregunta9 = this.model.p9;
    value.pregunta9cont = this.model.p9c;
    value.contestada = true;
    value.fecha = formatDate(new Date(), 'dd/MM/yyyy hh:mm:ss a', 'en');
    value.total = +this.proms;

    this.encuestaService.updateType(value);
    this.encuestaService.updateEncuestatram(value);

    this.router.navigate(['/home']);


  }
  onChange() {

    this.ident = this.route.snapshot.params['id'];
}
p1ex(x) {
  this.model.p1 = (x * 10) / 4;
}
p2ex(x) {
  this.model.p2 = (x * 10) / 1;
}
p3ex(x) {
  this.model.p3 = (x * 10) / 1;
  if (this.model.p3 === 10 ) {
    this.model.p9 = 'N/A';
    this.model.p9c = 1;
  }
}
p4ex(x) {
  this.model.p4 = (x * 10) / 4;
}
p5ex(x) {
  this.model.p5 = (x * 10) / 4;
}
p6ex(x) {
  this.model.p6 = (x * 10) / 4;
}
p7ex(x) {
  this.model.p7 = (x * 10) / 1;
}
p8ex(x) {
  this.model.p8 = (x * 10) / 4;
}
p9ex(x) {
  if (x === false ) {
    this.model.p9 = 'No';
    this.model.p9c = 0;
  } else {
    this.model.p9 = 'Si';
    this.model.p9c = 1;
  }

}
sum() {

  this.y =  ((this.model.p1 + this.model.p2 + this.model.p3 + this.model.p4 + this.model.p5 + this.model.p6 + this.model.p7 + this.model.p8) * 10) / 8;
}

  onNo() {
    this.isYes = false;
  }
  onSi() {
    this.isNo = false;
  }
}
