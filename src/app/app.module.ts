import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';
import { TecladoDeLetrasComponent } from './teclado-de-letras/teclado-de-letras.component';

@NgModule({
  declarations: [
    AppComponent,
    TabuleiroComponent,
    TecladoDeLetrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
