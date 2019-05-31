import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { faSignInAlt, faAddressCard, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { RegistroInterface } from 'src/app/Models/registro';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faSignInAlt = faSignInAlt;
  faAddressCard = faAddressCard;
  faKey = faKey;
  faEnvelope = faEnvelope;

  public email: string;
  public correo: string;
  public password: string;


  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public afs: AngularFirestore

  ) { }
user: RegistroInterface = {
  id: '',
  nombre: '',
  correo: '',
  admin: false,
  suadmin: false,
  tipo: ''
};

ngOnInit() {

  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMensaje.show('Bienvenido a SEVS',
      {cssClass: 'alert-success', timeout: 4000 });
      this.onLoginRedirect( this.email );
    }).catch((err) => {
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000 });
      this.router.navigate(['/login']);
    });
  }

  onLoginRedirect( email: string ) {
      this.router.navigate(['/admin']);
    // this.afs.collection('Registro').doc( email ).valueChanges().subscribe( data => {
    //   this.user.admin = data.admin;
    //   this.user.tipo = data.tipo;
    //   if( this.user.admin === true ){
    //     this.router.navigate(['/admin']);
    //   } else if ( this.user.tipo === 'CallCenter'){
    //     this.router.navigate(['/dashboardcall']);
    //   } else if ( this.user.tipo === 'Taller') {
    //     this.router.navigate(['/taller']);
    //   }
    // });
  }

}
