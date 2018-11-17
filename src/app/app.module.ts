import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatNativeDateModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminComponent } from './components/admin/admin.component';
import { TypeComponent } from './components/type/type.component';
import { ExpressComponent } from './components/express/express.component';
import { ReparacionComponent } from './components/reparacion/reparacion.component';
import { TramiteComponent } from './components/tramite/tramite.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ReportsComponent } from './components/reports/reports.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    AdminComponent,
    TypeComponent,
    ExpressComponent,
    ReparacionComponent,
    TramiteComponent,
    ThankyouComponent,
    NavbarComponent,
    EncuestaComponent,
    ReportsComponent
  ],
  imports: [
    MatStepperModule, 
    MatInputModule, 
    MatButtonModule, 
    MatAutocompleteModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  entryComponents: [ExpressComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);