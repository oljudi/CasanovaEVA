import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { faSignInAlt, faAddressCard, faKey, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) =>{
      this.flashMensaje.show('Bienvenido a SEVS',
      {cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/admin']);
    }).catch((err) => {
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000 });
      this.router.navigate(['/login']);
    });
  }

  faSignInAlt = faSignInAlt;
  faAddressCard = faAddressCard;
  faKey = faKey;
  faMailBulk = faMailBulk;

}
