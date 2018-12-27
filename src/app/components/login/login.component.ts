import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { faSignInAlt, faAddressCard, faKey, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { auth } from 'firebase';
import { AdminComponent } from '../admin/admin.component';
import { RegistroInterface } from 'src/app/Models/registro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public correo: string;
  public password: string;
  

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
    
  ) { }
user: RegistroInterface ={
  nombre:'',
  correo:'',
  admin:false,
  suadmin:false,
  id: ''
};
  ngOnInit() {
  
    this.authService.getAuth().subscribe(user => {
      if(user){
        //this.user = user;
        console.log('User', user.email);
      }
    })
    
   
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
