import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ApphomeBodyComponent } from './apphome-body/apphome-body.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    ApphomeComponent,
    ApphomeBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
