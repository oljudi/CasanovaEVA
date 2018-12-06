import { Component, OnInit } from '@angular/core';

import { faTired, faSadTear, faGrin, faSmileBeam, faCheckSquare, faTimesCircle, faMeh, faHourglassStart, faHourglassHalf, faHourglassEnd, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {EncuestaexInterface} from '../../Models/Encuestaex';
import {EncuestaService} from '../../services/encuesta.service';
import {Observable} from 'rxjs';



import { MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})

export class ExpressComponent implements OnInit {

  isEditable =  false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  sevenFormGroup: FormGroup;
  eightFormGroup: FormGroup;
  preguntad1:number;
  model: any = {};
  
  Encuesta: EncuestaexInterface = {
    
    idencuesta: '',
    pregunta1: 0,
    pregunta2: 0,
    pregunta3: 0,
    pregunta4: 0,
    pregunta5: 0,
    pregunta6: 0,
    pregunta7: 0,
    pregunta8: 0,
    total:0
  }
  constructor(
    private _formBuilder: FormBuilder,
    private encuestaService: EncuestaService
  ) { }

  ngOnInit() {

    this.model.tipo = 'express'; 

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
  }
  onGuardarEncuesta({value}: {value: EncuestaexInterface}){
    this.Encuesta.pregunta1=this.preguntad1;
    console.log(this.Encuesta.pregunta1);
    //this.encuestaService.addEncuestaex(value);
    
  }
  onChange(){
    
    console.log(this.Encuesta.pregunta1 );
        
    function sum(a:number , b:number):number{
      
      return a - b;
  }
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
}
