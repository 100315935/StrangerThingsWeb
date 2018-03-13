import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CabezaComponent } from './core/cabeza/cabeza.component';
import { PieComponent } from './core/pie/pie.component';
import { MenuComponent } from './core/menu/menu.component';
import { AsideComponent } from './core/aside/aside.component';
import { InicioModule } from './inicio/inicio.module';


@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    PieComponent,
    MenuComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
