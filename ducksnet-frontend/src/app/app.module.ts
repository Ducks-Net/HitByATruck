import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import { ApiShowComponent } from './api-show/api-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ApphomeBodyComponent } from './apphome-body/apphome-body.component';
import { AppSignUpComponent } from './app-sign-up/app-sign-up.component';
import { DogAndCatComponent } from './dog-and-cat/dog-and-cat.component';
import { AppSignUpBodyComponent } from './app-sign-up-body/app-sign-up-body.component';
import { AppSignInComponent } from './app-sign-in/app-sign-in.component';
import { AppSignInBodyComponent } from './app-sign-in-body/app-sign-in-body.component';
import { AppClinicsComponent } from './app-clinics/app-clinics.component';
import { AppClinicsBodyComponent } from './app-clinics-body/app-clinics-body.component';
import { AppVetClinicComponent } from './app-vet-clinic/app-vet-clinic.component';
import { AppVetClinicBodyComponent } from './app-vet-clinic-body/app-vet-clinic-body.component';
import { AppHomepageComponent } from './app-homepage/app-homepage.component';
import { AppHomepageBodyComponent } from './app-homepage-body/app-homepage-body.component';
import { AppUpcomingAppointmentComponent } from './app-upcoming-appointment/app-upcoming-appointment.component';
import { AppUpcomingAppointmentBodyComponent } from './app-upcoming-appointment-body/app-upcoming-appointment-body.component';
import { AppMakeAppointmentComponent } from './app-make-appointment/app-make-appointment.component';
import { AppMakeAppointmentBodyComponent } from './app-make-appointment-body/app-make-appointment-body.component';

const appRoutes: Routes = [
  { path: '', component: ApphomeComponent },
  { path: 'sign-up', component: AppSignUpComponent},
  { path: 'sign-in', component: AppSignInComponent},
  { path: 'api-show', component: ApiShowComponent},
  { path: 'clinics', component: AppClinicsComponent},
  { path: 'vet-clinic', component: AppVetClinicComponent},
  { path: 'homepage', component: AppHomepageComponent},
  { path: 'upcoming-appointment', component: AppUpcomingAppointmentComponent},
  { path: 'make-appointment', component: AppMakeAppointmentComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    ApiShowComponent,
    ApphomeComponent,
    ApphomeBodyComponent,
    AppSignUpComponent,
    DogAndCatComponent,
    AppSignUpBodyComponent,
    AppSignInComponent,
    AppSignInBodyComponent,
    AppClinicsComponent,
    AppClinicsBodyComponent,
    AppVetClinicComponent,
    AppVetClinicBodyComponent,
    AppHomepageComponent,
    AppHomepageBodyComponent,
    AppUpcomingAppointmentComponent,
    AppUpcomingAppointmentBodyComponent,
    AppMakeAppointmentComponent,
    AppMakeAppointmentBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
