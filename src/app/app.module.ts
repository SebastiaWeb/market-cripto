import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import { Puntuacion } from './pipes/puntuacion.pipe';

import { routing, appRoutingProviders} from './routing.app';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CriptomonedaComponent } from './componentes/criptomoneda/criptomoneda.component';
import { ExchangeComponent } from './componentes/exchange/exchange.component';
import { ConvertirComponent } from './componentes/convertir/convertir.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './componentes/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CriptomonedaComponent,
    ExchangeComponent,
    ConvertirComponent,
    ContactoComponent,
    TableComponent,
    Puntuacion
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MatTableModule,
    routing,
    HttpClientModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    
    
  ],
  exports:[ MatTableModule ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
