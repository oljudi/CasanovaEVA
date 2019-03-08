import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgxSpinnerModule } from 'ngx-spinner';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatNativeDateModule, MatIconModule, MatFormFieldModule, MatTab, MatTabsModule, MatCheckboxModule } from '@angular/material';


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
import { ExpressComponent } from './components/express/express.component';
import { ReparacionComponent } from './components/reparacion/reparacion.component';
import { TramiteComponent } from './components/tramite/tramite.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { EncuestaService } from './services/encuesta.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NavbardownComponent } from './components/navbardown/navbardown.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { from } from 'rxjs';
import { TallerComponent } from './components/taller/taller.component';
import { DashboardtallerComponent } from './components/dashboardtaller/dashboardtaller.component';
import { DashboardcallcenterComponent } from './components/dashboardcallcenter/dashboardcallcenter.component';

import { ExportAsModule } from 'ngx-export-as';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    AdminComponent,
    ExpressComponent,
    ReparacionComponent,
    TramiteComponent,
    ThankyouComponent,
    NavbarComponent,
    EncuestaComponent,
    ReportsComponent,
    NavbardownComponent,
    RegisterComponent,
    FooterComponent,
    TallerComponent,
    DashboardtallerComponent,
    DashboardcallcenterComponent
  ],
  imports: [
    NgxDatatableModule,
    NgxSpinnerModule,
    MatStepperModule,
    MatTabsModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserModule,
    ExportAsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    AngularFirestoreModule
  ],
  entryComponents: [ExpressComponent],
  providers: [
              AuthService,
              AuthGuard,
              FlashMessagesService,
              EncuestaService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
