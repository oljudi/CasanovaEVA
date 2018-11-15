import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faAddressCard, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  faSignInAlt = faSignInAlt;
  faAddressCard = faAddressCard;
  faKey = faKey;

}
