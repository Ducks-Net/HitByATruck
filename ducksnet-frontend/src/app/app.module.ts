import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

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

const appRoutes: Routes = [
  { path: '', component: ApphomeComponent },
  { path: 'sign-up', component: AppSignUpComponent},
  { path: 'api-show', component: ApiShowComponent}

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
    AppSignUpBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
