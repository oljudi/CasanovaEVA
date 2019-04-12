import { Component, OnInit, Input } from '@angular/core';

// tslint:disable-next-line:max-line-length
import { faTired, faSadTear, faGrin, faSmileBeam, faCheckSquare, faTimesCircle, faMeh, faHourglassStart, faHourglassHalf, faHourglassEnd, faVoteYea, faCarSide, faTruck, faTruckPickup, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {EncuestaexInterface} from '../../Models/Encuestaex';
import {EncuestaService} from '../../services/encuesta.service';
import {Observable, Subscription} from 'rxjs';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers, Response, URLSearchParams, RequestOptions, HttpModule } from '@angular/http';

//import {} from 'rxjs';

import { MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';




@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})


export class ExpressComponent implements OnInit {

  faCar = faCarSide;
  faTruck = faTruck;
  faTruckPickup = faTruckPickup;
  faAmbulance = faAmbulance;
totalnot:number;
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
  x: number;
  y: number;
  preguntad1: number;
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
    p8: 0
  };
  model2: any = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0,
    p8: 0
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
    total:0
  }

  public isYes = true;
  public isNo = true;
  proms: string;
  EncuestaexCollection: AngularFirestoreCollection<EncuestaexInterface>;
  constructor(
    private _formBuilder: FormBuilder,
    private encuestaService: EncuestaService,
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private af: AngularFireDatabase,
    private afs: AngularFirestore
  ) {
   const today = new Date();
   this.EncuestaexCollection = this.afs.collection('Contadores', ref => ref);
   this.mod.fecha = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
  }

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
    value.contestada = true;
    value.fecha = formatDate(new Date(), 'dd/MM/yyyy hh:mm:ss a', 'en');
    value.total = +this.proms;
    this.totalnot = value.total;
//    this.sendemail();
    this.contador(value);
    this.sendemail(value.total);
    
    this.encuestaService.updateType(value);
    this.encuestaService.updateEncuestaex(value);



    this.router.navigate(['/home']);


  }
  
  contador(s:any){
    /*
    s.pc1 = this.model2.p1;
    s.pc2 = this.model2.p2;
    s.pc3 = this.model2.p3;
    s.pc4 = this.model2.p4;
    s.pc5 = this.model2.p5;
    s.pc6 = this.model2.p6;
    s.pc7 = this.model2.p7;
    s.pc8 = this.model2.p8;*/
//P1
    if (this.model2.p1 == 4){
      this.EncuestaexCollection.doc('Pregunta1/').collection('MuyBueno').doc(s.id).set(s);
    }else if (this.model2.p1 == 3){
      this.EncuestaexCollection.doc('Pregunta1/').collection('Bueno/').doc(s.id).set(s);
    }else if (this.model2.p1 == 2){
      this.EncuestaexCollection.doc('Pregunta1/').collection('Regular/').doc(s.id).set(s);
    }else if (this.model2.p1 == 1){
      this.EncuestaexCollection.doc('Pregunta1/').collection('Malo/').doc(s.id).set(s);
    }else if (this.model2.p1 == 0){
      this.EncuestaexCollection.doc('Pregunta1/').collection('MuyMalo/').doc(s.id).set(s);
    }
//P2
    if (this.model2.p2 == 1){
      this.EncuestaexCollection.doc('Pregunta2/').collection('MuyBueno/').doc(s.id).set(s);
    }else if (this.model2.p2 == 0){
      this.EncuestaexCollection.doc('Pregunta2/').collection('MuyMalo/').doc(s.id).set(s);
    }
//P3
    if (this.model2.p3 == 2){
      this.EncuestaexCollection.doc('Pregunta3/').collection('MuyBueno/').doc(s.id).set(s);
    }else if (this.model2.p3 == 1){
      this.EncuestaexCollection.doc('Pregunta3/').collection('Regular/').doc(s.id).set(s);
    }else if (this.model2.p3 == 0){
      this.EncuestaexCollection.doc('Pregunta3/').collection('MuyMalo/').doc(s.id).set(s);
    }
//P4
    if (this.model2.p4 == 4){
      this.EncuestaexCollection.doc('Pregunta4/').collection('MuyBueno/').doc(s.id).set(s);
    }else if (this.model2.p4 == 3){
      this.EncuestaexCollection.doc('Pregunta4/').collection('Bueno/').doc(s.id).set(s);
    }else if (this.model2.p4 == 2){
      this.EncuestaexCollection.doc('Pregunta4/').collection('Regular/').doc(s.id).set(s);
    }else if (this.model2.p4 == 1){
      this.EncuestaexCollection.doc('Pregunta4/').collection('Malo/').doc(s.id).set(s);
    }else if (this.model2.p4 == 0){
      this.EncuestaexCollection.doc('Pregunta4/').collection('MuyMalo/').doc(s.id).set(s);
    }
//P5
    if (this.model2.p5 == 4){
      this.EncuestaexCollection.doc('Pregunta5/').collection('MuyBueno/').doc(s.id).set(s);
    }else if (this.model2.p5 == 3){
      this.EncuestaexCollection.doc('Pregunta5/').collection('Bueno/').doc(s.id).set(s);
    }else if (this.model2.p5 == 2){
      this.EncuestaexCollection.doc('Pregunta5/').collection('Regular/').doc(s.id).set(s);
    }else if (this.model2.p5 == 1){
      this.EncuestaexCollection.doc('Pregunta5/').collection('Malo/').doc(s.id).set(s);
    }else if (this.model2.p5 == 0){
      this.EncuestaexCollection.doc('Pregunta5/').collection('MuyMalo/').doc(s.id).set(s);
    }
//P6
    if (this.model2.p6 == 4){
      this.EncuestaexCollection.doc('Pregunta6/').collection('MuyBueno/').doc(s.id).set(s);
    }else if (this.model2.p6 == 3){
      this.EncuestaexCollection.doc('Pregunta6/').collection('Bueno/').doc(s.id).set(s);
    }else if (this.model2.p6 == 2){
      this.EncuestaexCollection.doc('Pregunta6/').collection('Regular/').doc(s.id).set(s);
    }else if (this.model2.p6 == 1){
      this.EncuestaexCollection.doc('Pregunta6/').collection('Malo/').doc(s.id).set(s);
    }else if (this.model2.p6 == 0){
      this.EncuestaexCollection.doc('Pregunta6/').collection('MuyMalo/').doc(s.id).set(s);
    }
//P7
    if (this.model2.p7 == 1){
      this.EncuestaexCollection.doc('Pregunta7/').collection('MuyBueno/').doc(s.id).set(s);
    }else if (this.model2.p7 == 0){
      this.EncuestaexCollection.doc('Pregunta7/').collection('MuyMalo/').doc(s.id).set(s);
    }
//P8
    if (this.model2.p8 == 4){
      this.EncuestaexCollection.doc('Pregunta8/').collection('MuyBueno/').doc(s.id).set(s);
    }else if (this.model2.p8 == 3){
      this.EncuestaexCollection.doc('Pregunta8/').collection('Bueno/').doc(s.id).set(s);
    }else if (this.model2.p8 == 2){
      this.EncuestaexCollection.doc('Pregunta8/').collection('Regular/').doc(s.id).set(s);
    }else if (this.model2.p8 == 1){
      this.EncuestaexCollection.doc('Pregunta8/').collection('Malo/').doc(s.id).set(s);
    }else if (this.model2.p8 == 0){
      this.EncuestaexCollection.doc('Pregunta8/').collection('MuyMalo/').doc(s.id).set(s);
    }
  }
  onChange() {

      this.ident = this.route.snapshot.params['id'];
  }
  sendemail(t:number) { 
    console.log('prueba');

    if (t <= 50){
    const name = 'Jonathan Huerta';
    const email = 'jonathan.huerta@casanovarentacar.mx';
    const message = 'ALERTA !!!!! HUBO UN PROBLEMA CON EL CLIENTE';
    const subject = 'Validar situacion calificación de encuesta: ' + this.totalnot;

    let formRequest = { name, email, subject, message};
    this.af.list('/messages').push(formRequest);
    
    }
    if (t >= 95){
      const name = 'Jonathan Huerta';
      const email = 'jonathan.huerta@casanovarentacar.mx';
      const message = 'Felicidades el servicio fue el mejor';
      const subject = 'La calificacion del servicio fue: ' + this.totalnot;
  
      let formRequest = { name, email, subject, message};
      this.af.list('/messages').push(formRequest);
      
      }
/*
    let url = `https://us-central1-casanovaeva01.cloudfunctions.net/httpEmail`;
    let params: URLSearchParams = new URLSearchParams();
    //private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':"*" , 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'});
    let options = new RequestOptions({ headers: headers });

    params.set('to', 'darrell.1780@gmail.com');
    params.set('from', 'jonathan.huerta@sevs.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');
    console.log('enviado');
    return this.http.post(url, params, options)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })
                    
                  */
}



p1ex(x) {
  this.model.p1 = (x * 10) / 4;
  
  this.model2.p1 = x;
}
p2ex(x) {
  this.model.p2 = (x * 10) / 1;
  this.model2.p2 = x;
  // console.log(x);
}
p3ex(x) {
  this.model.p3 = (x * 10) / 2;
  this.model2.p3 = x;
  // console.log(x);
}
p4ex(x) {
  this.model.p4 = (x * 10) / 4;
  this.model2.p4 = x;
  // console.log(x);
}
p5ex(x) {
  this.model.p5 = (x * 10) / 4;
  this.model2.p5 = x;
  // console.log(x);
}
p6ex(x) {
  this.model.p6 = (x * 10) / 4;
  this.model2.p6 = x;
  // console.log(x);
}
p7ex(x) {
  this.model.p7 = (x * 10) / 1;
  this.model2.p7 = x;
  // console.log(x);
}
p8ex(x) {
  this.model.p8 = (x * 10) / 4;
  this.model2.p8 = x;
  // console.log(x);
}
sum() {

  this.y =  ((this.model.p1 + this.model.p2 + this.model.p3 + this.model.p4 + this.model.p5 + this.model.p6 + this.model.p7 + this.model.p8) * 10) / 8;
}
}
