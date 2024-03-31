import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [   //aca se declaran los COMPONENTES, DIRECTIVAS, PIPES
    AppComponent
  ],
  imports: [  //por definicion aca entran los MODULOS
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
